import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { Vector as VectorLayer } from 'ol/layer';
import ImageLayer from 'ol/layer/Image.js';
import { Projection } from 'ol/proj';
import { Vector as VectorSource } from 'ol/source';
import ImageStatic from 'ol/source/ImageStatic';
import { Circle, Fill, Icon, Style } from 'ol/style';
import { iconScale, iconSpriteInfo, legendItems } from './constants';
import { rooms } from './rooms';

// Define projection and extent
export const extent = [0, 0, 6754, 3668];
export const mainExtend = [-3377, -1834, 10131, 5502];
export const projection = new Projection({
  code: 'shores',
  units: 'pixels',
  extent: extent,
});

// Background Layer
export const backgroundLayer = new ImageLayer({
  source: new ImageStatic({
    url: 'shores-min.png',
    projection: projection,
    imageExtent: extent,
  }),
});
backgroundLayer.set('title', 'Background');
backgroundLayer.on('postrender', (event: any) => {
  const context = event.context as CanvasRenderingContext2D;
  context.imageSmoothingEnabled = false;
  if (context.canvas instanceof HTMLCanvasElement) {
    context.canvas.style.imageRendering = 'pixelated';
  }
});

// Area Layer
// const areaSource = new VectorSource();
// export const areaLayer = new VectorLayer({
//   source: areaSource,
//   style: (feature) =>
//     new Style({
//       stroke: new Stroke({
//         color: feature.get('color'),
//         width: 3,
//       }),
//       fill: new Fill({
//         color: 'rgba(0, 0, 0, 0)',
//       }),
//     }),
// });
// areaLayer.set('title', 'Areas');
// areas.forEach((area) => {
//   const polygon = new Polygon(area.poly);
//   const feature = new Feature({
//     geometry: polygon,
//     name: area.name,
//     color: area.color,
//   });
//   areaSource.addFeature(feature);
// });

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
        geometry: new Point(room.location),
        name: room.name,
      });
      feature.set('actions', room.actions);
      if(action.type) {
        legendLayers[action.type].getSource()!.addFeature(feature);
      } 
    }
  });
});