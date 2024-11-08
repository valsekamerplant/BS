import 'ol/ol.css';
import {Feature, Map, Overlay, View} from 'ol';
import ImageLayer from 'ol/layer/Image.js';
import Static from 'ol/source/ImageStatic.js';
import Projection from 'ol/proj/Projection.js';
import {Draw} from 'ol/interaction';
import {Vector as VectorLayer} from 'ol/layer';
import {Vector as VectorSource} from 'ol/source';
import {getCenter} from 'ol/extent.js';
import {Style, Stroke, Fill} from 'ol/style';
import { Polygon } from 'ol/geom';
import { areas } from './areas';

import './style.css'
import { rooms } from './rooms';

// Define the extent of your map image
const extent = [0, 0, 6754, 3668];
const projection = new Projection({
  code: 'shores',
  units: 'pixels',
  extent: extent,
});
const background = new ImageLayer({
  source: new Static({
    url: 'shores-min.png', // Replace with the path to your image
    projection: projection,
    imageExtent: extent,
  }),
})
background.set('title',"Background");

// Initialize the map with a static image layer
const map = new Map({
  target: 'map',
  layers: [
    background
  ],
  view: new View({
    projection: projection,
    center: getCenter(extent),
    zoom: 2,
    maxZoom: 8,
    minZoom: 0,
    extent: extent,
  }),
});


// Create vector source and layer for areas
const areaSource = new VectorSource();
const areaLayer = new VectorLayer({
  source: areaSource,
  style: (feature) => {
    return new Style({
      stroke: new Stroke({
        color: feature.get('color'), // Use the color defined in the feature properties
        width: 3,
      }),
      fill: new Fill({
        color: (feature.get('name') != 'hopeport' && feature.get('name') != 'hopeforest') ? feature.get('color') : 'rgba(0, 0, 0, 0)', // No fill
      }),
    });
  },
});
areaLayer.set('title',"Areas");

// Add predefined areas as features to the vector source
areas.forEach(area => {
  const polygon = new Polygon(area.poly);
  console.log(area);
  const feature = new Feature({
    geometry: polygon,
    name: area.name,
    color: area.color, // Customize this color for each area if desired
  });
  areaSource.addFeature(feature);
});
// Add area layer to the map
map.addLayer(areaLayer);



// Add an overlay for the tooltip
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
const overlay = new Overlay({
  element: tooltip,
  offset: [10, 0],
  positioning: 'bottom-left',
});
map.addOverlay(overlay);


//Display tooltip on hover
map.on('pointermove', (event) => {
  const coords = map.getCoordinateFromPixel(event.pixel);
  const [x, y] = coords.map(coord => coord.toFixed(2)); // Round to 2 decimal places
  overlay.setPosition(event.coordinate);
    // Set the content of the coordDisplay div
    tooltip.innerHTML = `X: ${x}, Y: ${y}`;
    // Position the display div near the cursor
    tooltip.style.left = `${event.originalEvent.pageX + 15}px`;
    tooltip.style.top = `${event.originalEvent.pageY + 15}px`;
});

// Log coordinates to console on map click
map.on('click', function (event) {
  const coords = map.getCoordinateFromPixel(event.pixel);
  const [x, y] = coords.map(coord => coord.toFixed(2)); // Round to 2 decimal places
  console.log(`Clicked coordinates: [${x},${y}]`);
});

// Vector layer for drawing
const drawSource = new VectorSource();
// const drawLayer = new VectorLayer({
  
//   source: drawSource,
//   style: new Style({
//     stroke: new Stroke({
//       color: 'red',
//       width: 2,
//     }),
//     fill: new Fill({
//       color: 'rgba(255, 0, 0, 0.1)',
//     }),
//   }),
// });
//map.addLayer(drawLayer);

// Add draw interaction for polygons
const draw = new Draw({
  source: drawSource,
  type: 'Polygon',
});
//map.addInteraction(draw);

// Event listener to log coordinates when a polygon is drawn
draw.on('drawend', function (event) {
  const polygon = event.feature.getGeometry() as Polygon;
  const coordinates = polygon.getCoordinates();
  console.log('Polygon coordinates:', coordinates);
  
  // Optionally, you could do something else with these coordinates,
  // like displaying them on the page or storing them

});


// Create the layer control UI

const layerControl = document.getElementById("layerControl")!;
// Function to add a layer toggle checkbox
function addLayerToggle(layer: any) {
  const layerWrapper = document.createElement('div');
  const layerCheckbox = document.createElement('input');
  layerCheckbox.type = 'checkbox';
  layerCheckbox.checked = layer.getVisible();
  layerCheckbox.id = layer.get('title');

  const layerLabel = document.createElement('label');
  layerLabel.htmlFor = layer.get('title');
  layerLabel.textContent = layer.get('title');

  layerCheckbox.onchange = () => {
    layer.setVisible(layerCheckbox.checked);
  };

  layerWrapper.appendChild(layerCheckbox);
  layerWrapper.appendChild(layerLabel);
  layerControl.appendChild(layerWrapper);
}

// Add existing layers to the control
map.getLayers().forEach((layer, i) => {
  if(i > 0) {
    addLayerToggle(layer);
  }
  
});


// Function to populate suggestions based on input
function populateSuggestions(searchText: string) {
  const suggestionsBox = document.getElementById('suggestions')!;
  suggestionsBox.innerHTML = ''; // Clear previous suggestions
  suggestionsBox.style.display = 'none';

  if (searchText.length < 2 ) return;

  const matchingRooms = rooms.filter((room: any) =>
      Object.values(room!.actions).some((action: any) =>action.name.toLowerCase().includes(searchText.toLowerCase()))
  );

  matchingRooms.forEach((room: any) => {
    const item = room.actions.find((action: any) => action.name.toLowerCase().includes(searchText.toLowerCase()))
      const suggestion = document.createElement('div');
      suggestion.className = 'suggestion-item';
      suggestion.textContent = `${item.name} - ${room.name}`;
      suggestion.onclick = () => {
          centerMapOnRoom(room);
          suggestionsBox.style.display = 'none';
      };
      suggestionsBox.appendChild(suggestion);
  });

  if (matchingRooms.length > 0) {
      suggestionsBox.style.display = 'block';
  }
}

// Function to center map on a selected room
function centerMapOnRoom(room: any) {
  map.getView().animate({
      center: room.location,
      duration: 1000,
      zoom: 5
  });
}


// Set up search box with event listener for input
const searchBox = document.getElementById('search-box')! as HTMLInputElement;
searchBox.addEventListener('input', () => {
    const searchText = searchBox.value;
    populateSuggestions(searchText);
});

// Hide suggestions when clicking outside
document.addEventListener('click', (event) => {
    if (!document.getElementById('search-container')!.contains(event.target as any)) {
        document.getElementById('suggestions')!.style.display = 'none';
    }
});