import { Feature } from 'ol';
import { getCenter, getHeight } from 'ol/extent';
import { LineString, Point, Polygon } from 'ol/geom';
import { Vector as VectorLayer } from 'ol/layer';
import TileLayer from 'ol/layer/Tile';
import { Projection } from 'ol/proj';
import { Vector as VectorSource, Zoomify } from 'ol/source';
import { Circle, Fill, Icon, Stroke, Style, Text } from 'ol/style';
import { iconScale, iconSpriteInfo, legendItems } from './constants';
import { map, tooltipElement, tooltipOverlay } from './map';
import { rooms } from './rooms';

import GeoJSON from 'ol/format/GeoJSON';
import { Marker } from './types';

// Define projection and extent
export const maxZoom = 7;
export const scale = 1;
export const tileSize = 288;
export const tileUnit = 48;
const imageWidth = 19200 / scale; // Replace with the actual width of the original image
const imageHeight = 14400 / scale;
export const mapExtent = [0, 0, imageWidth, imageHeight];
const oldExtent = [0, 0, 6754, 3668];
export const resolutions = Array.from({ length: maxZoom + 1 }, (_, z) => Math.pow(2, maxZoom - z))
const scaleFactorX = mapExtent[2] / oldExtent[2];  // New width / Old width
const scaleFactorY = mapExtent[3] / oldExtent[3];
export const projection = new Projection({
  code: 'shores',
  units: 'pixels',
  extent: mapExtent,
});

const zoomifySource = new Zoomify({
  url: '/tiles/{TileGroup}/{z}-{x}-{y}.png', // Path to the directory containing Zoomify tiles
  extent: mapExtent,

  size: [imageWidth, imageHeight], // Size of the original image
  tileSize: tileSize, // Size of each tile, consistent with VIPS generation
  crossOrigin: 'anonymous', // Allow cross-origin requests
});

// Create a tile layer using the Zoomify source
export const backgroundLayer = new TileLayer({
  source: zoomifySource,
});


function fillSourceFeatures(fileName: string, source: VectorSource, isGeo = false) {
  // Fetch the GeoJSON data from your server and add it to the vector source
  fetch(`${fileName}.json`)  // Replace with the correct path to your GeoJSON file
    .then(response => response.json())
    .then(data => {
      if (isGeo) {
        const geojsonFeatures = new GeoJSON().readFeatures((data), {
          dataProjection: 'shores',
          featureProjection: projection,
        });
        geojsonFeatures.forEach((feature, index: number) => {
          // Extract name or label from the feature properties (assuming there is a 'name' property)
          const featureName = feature.get('name') || index.toString();

          // Create a style for the feature with a label
          const featureStyle = new Style({
            stroke: new Stroke({
              color: '#ffcc33', // Color of the polygon border
              width: 2,
            }),
            fill: new Fill({
              color: 'rgba(255, 204, 51, 0.2)', // Semi-transparent fill color
            }),
            text: new Text({
              font: '16px Calibri,sans-serif', // Font type and size for the label
              text: featureName, // Use the feature's name as the label
              fill: new Fill({ color: '#000' }), // Label text color (black)
              stroke: new Stroke({ color: '#fff', width: 3 }), // Outline color and width for better visibility
              overflow: true, // Allow text overflow for better placement
            }),

          });// Set the style for the feature
          feature.setStyle(featureStyle);
        });
        source.addFeatures(geojsonFeatures);
        // Check each point and determine if it overlaps with any room (polygon)
        
        scaleVectorLayerToMatchTileUnits(source, 48);

        rooms.forEach((point) => {
          const pointCoords: [number, number] = [point.location[0], point.location[1]];
          const matchingPolygon = findMatchingPolygonForPoint(pointCoords, geojsonFeatures);

          if (matchingPolygon) {
            console.log(matchingPolygon)
            matchingPolygon.set("name",point.name)
            console.log(`Point "${point.name}" is located inside "${matchingPolygon.getId()}".`);
          } else {
            console.log(`Point "${point.name}" does not match any room.`);
          }
        });
        console.log(geojsonFeatures)
      }
      else {
        const actions = data as Array<Marker>;
        actions.forEach((action: any) => {
          const { width, height } = extractTileSizeFromFilename(action.image);

          // Calculate the center of the feature based on its tile coverage
          const centerX = (action.x + width / 2);     // Center in x-axis
          const centerY = imageHeight - (action.y + height / 2);  // Center in y-axis (flip Y axis)

          const feature = new Feature({
            geometry: new Point([centerX, centerY]),
            //geometry: new Point([action.x + 0.5, imageHeight - action.y - 0.5]),
            name: action.name,

          });
          const iconStyle = new Style({
            image: new Icon({
              src: `/icons/${action.image}`, // Set the icon image source
              anchor: [0.5, height / 2],
              scale: Math.pow(2, map.getView().getZoom()! - maxZoom),                 // Set scale to 1 to ensure no scaling of the icon
              anchorXUnits: 'fraction', // Fractional anchoring
              anchorYUnits: 'fraction', // Fractional anchoring
            }),
          });

          // Set the style to the feature
          feature.setStyle(iconStyle);
          source.addFeature(feature);

        })
        scaleVectorLayerToMatchTileUnits(source, 48, true);
      }
    })

    .catch(error => {
      console.error('Error loading GeoJSON:', error);
    });
}


// Function to check if a point is within any of the polygons
function findMatchingPolygonForPoint(point: [number, number], polygons: Feature[]): any | null {
  for (const polygonFeature of polygons) {
    const polygonGeometry = polygonFeature.getGeometry() as Polygon;
    if (polygonGeometry.intersectsCoordinate(point)) {
      const polygonName = polygonFeature.get('name');
      return polygonFeature;
    }
  }
  return null;
}
const roomSource = new VectorSource();
fillSourceFeatures('hopeport_hopeforest', roomSource, true)
// Step 3: Create a Vector Layer and Add Styles
export const roomLayer = new VectorLayer({
  source: roomSource,
  style: new Style({
    fill: new Fill({
      color: 'rgba(0, 153, 255, 0.5)', // Set fill color for the polygons
    }),
    stroke: new Stroke({
      color: '#003366', // Set stroke color
      width: 2,
    }),
  }),
});
roomLayer.set("title", "roomLayer")

export const skillingSource = new VectorSource();
fillSourceFeatures('hopeport_markers', skillingSource)
// Step 3: Create a Vector Layer and Add Styles
export const skillingLayer = new VectorLayer({
  source: skillingSource,
  style: new Style({
    fill: new Fill({
      color: 'rgba(0, 153, 255, 0.5)', // Set fill color for the polygons
    }),
    stroke: new Stroke({
      color: '#003366', // Set stroke color
      width: 2,
    }),
  }),
});
skillingLayer.set("title", "skilling")
// const tileGrid = new TileGrid({
//   resolutions: resolutions,
//   tileSize: tileSize,
//   extent: mapExtent,
// });

// // Define the TileLayer with `extent` and `maxExtent` considerations
// export const backgroundLayer = new TileLayer({
//   source: new XYZ({
//     url: '/tiles/{z}/{y}/{x}.png',
//     tileGrid: tileGrid, // Use the custom tile grid
//     projection: projection,
//     wrapX: false,
//   }),
// });
backgroundLayer.set('title', 'Background');

// Marker Layer for Rooms
const markerSource = new VectorSource();
export const markerLayer = new VectorLayer({
  source: markerSource,
  style: new Style({
    image: new Circle({
      radius: 6,
      fill: new Fill({ color: 'rgba(0, 0, 255, 0)' }),
    }),
  }),
});
markerLayer.set('title', 'Items');

// Add room features to the marker layer
rooms.forEach((room) => {
  const feature = new Feature({
    geometry: new Point(room.location),
    name: room.name,
  });
  feature.set('actions', room.actions);
  markerSource.addFeature(feature);
});


// Legend-based Layers for Each Category in legendItems
export const legendLayers: { [key: string]: VectorLayer } = {};

// Loop through legend items to create a layer for each category
legendItems.forEach((item) => {
  const sprite = iconSpriteInfo[item];
  const layer = new VectorLayer({

    source: new VectorSource(),
    style: [
      // Circle background style
      new Style({
        image: new Circle({
          radius: 16,  // Slightly larger than icon to create a background
          fill: new Fill({ color: '#ffffff88' }), // White background
          //stroke: new Stroke({ color: 'black', width: 1 }), // Optional border
        }),
      }),
      // Icon style on top of the circle
      new Style({
        image: new Icon({
          src: 'icons.png',
          scale: iconScale, // Scale to display 64x64 icon as 24x24
          anchor: [0.5, 0.5], // Center the icon on the point
          offset: [sprite.x, sprite.y], // Position of the icon within the spritesheet
          size: [sprite.width, sprite.height], // Size of the icon in the spritesheet
        }),
      })
    ],
  });
  layer.set('title', item);
  legendLayers[item] = layer;
});



// Add features to each legend layer only if the action type is in legendItems
rooms.forEach((room) => {
  room.actions.forEach((action) => {
    if (action.type && legendItems.includes(action.type)) {
      const feature = new Feature({
        geometry: new Point([room.location[0] - 50, room.location[1] + 50]),
        name: room.name,
      });
      feature.set('actions', room.actions);
      if (action.type) {
        legendLayers[action.type].getSource()!.addFeature(feature);
      }
    }
  });
});

// Create a feature for the highlighted tile
const highlightSource = new VectorSource();
export const highlightLayer = new VectorLayer({
  declutter: true,
  source: highlightSource,
  style: new Style({
    stroke: new Stroke({
      color: 'yellow',
      width: 2,
    }),
    fill: new Fill({
      color: 'rgba(255, 255, 0, 0.3)', // Semi-transparent yellow fill
    }),
  }),
});

const highlightFeature = new Feature();
highlightSource.addFeature(highlightFeature);

export function highlightTile(coordinate: [number, number]) {
  try {
    // Get the current resolution
    const resolution = map.getView().getResolution();
    if (resolution === undefined) {
      console.error('Resolution is undefined');
      return;
    }

    // Calculate tile size in map units for the current zoom level
    const tileSizeInMapUnits = 48 * resolution / Math.pow(2, maxZoom - map.getView().getZoom()!);

    // Calculate the tile index (X, Y) based on the coordinate
    const tileIndexX = Math.floor(coordinate[0] / tileSizeInMapUnits);
    const tileIndexY = Math.floor(coordinate[1] / tileSizeInMapUnits);

    // Calculate the top-left corner of the tile
    const tileX = tileIndexX * tileSizeInMapUnits;
    const tileY = tileIndexY * tileSizeInMapUnits;

    // Define the polygon geometry for the highlighted tile
    const tilePolygon = new Polygon([[
      [tileX, tileY],
      [tileX + tileSizeInMapUnits, tileY],
      [tileX + tileSizeInMapUnits, tileY + tileSizeInMapUnits],
      [tileX, tileY + tileSizeInMapUnits],
      [tileX, tileY],
    ]]);

    // Update the tooltip content and position
    const tileCenterX = tileX + tileSizeInMapUnits / 2;
    const tileCenterY = tileY + tileSizeInMapUnits / 2;
    tooltipElement.innerHTML = `Tile Center: X: ${tileCenterX.toFixed(2)}, Y: ${tileCenterY.toFixed(2)}`;
    tooltipOverlay.setPosition([tileCenterX, tileCenterY]);

    // Update the geometry of the highlight feature
    highlightFeature.setGeometry(tilePolygon);
  } catch (error) {
    console.error('An error occurred while highlighting the tile:', error);
  }
}

// Step 7: Function to Scale the Vector Layer Features to Match 48x48 Tile Units
function scaleVectorLayerToMatchTileUnits(vectorSource: VectorSource, tileUnitSize: number, inverse = false) {
  // Define the scaling factor
  const scaleFactor = tileUnitSize; // 48, since each unit should be 48 pixels in size

  // Calculate the center of the current extent to use as the scaling center
  const currentExtent = vectorSource.getExtent();
  if (!currentExtent) {
    console.error('Unable to determine vector source extent.');
    return;
  }

  const centerY = inverse ? imageHeight : 0;
  // Apply the scaling factor to all features in the vector source
  const features = vectorSource.getFeatures();
  features.forEach(feature => {
    const geometry = feature.getGeometry();
    if (geometry) {
      // Scale the geometry by the scale factor with respect to the center
      geometry.scale(scaleFactor, scaleFactor, [0, centerY]);
      feature.setGeometry(geometry); // Update the feature with the new geometry
    }
  });
}



// Function to extract tile size from the image name or default to 1x1
function extractTileSizeFromFilename(filename: string) {
  const regex = /_(\d+)x(\d+)/; // Match pattern like "_1x5" in the filename
  const match = filename.match(regex);
  if (match) {
    const width = parseInt(match[2], 10);
    const height = parseInt(match[1], 10);
    return { width, height };
  } else {
    // Default to 1x1 if no size is provided in the filename
    return { width: 1, height: 1 };
  }
}
