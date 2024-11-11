// import 'ol/ol.css';
// import { Feature, Map, Overlay, View } from 'ol';
// import ImageLayer from 'ol/layer/Image.js';
// import Static from 'ol/source/ImageStatic.js';
// import Projection from 'ol/proj/Projection.js';
// import { Draw } from 'ol/interaction';
// import { Vector as VectorLayer } from 'ol/layer';
// import { Vector as VectorSource, XYZ } from 'ol/source';
// import { getCenter } from 'ol/extent.js';
// import { Style, Stroke, Fill, Circle } from 'ol/style';
// import { Point, Polygon } from 'ol/geom';
// import { areas } from './areas';

// import './style.css'
// import './icons.css'
// import { rooms } from './rooms';
// import { legendItems } from './constants';


// // Define the extent of your map image
// const extent = [0, 0, 6754, 3668];
// const mainExtend = [-3377, -1834, 10131, 5502];
// const projection = new Projection({
//   code: 'shores',
//   units: 'pixels',
//   extent: extent,
// });


// const background = new ImageLayer({
//   source: new Static({
//     url: 'shores-min.png', // Replace with the path to your image
//     projection: projection,
//     imageExtent: extent,
//   }),
// })
// background.set('title', "Background");

// background.on('postrender', (event) => {
//   const canvas = event.context!.canvas as HTMLCanvasElement;
//   const context = event.context as CanvasRenderingContext2D;

//   // Set image smoothing properties to false for a pixelated effect
//   context.imageSmoothingEnabled = false;
//   if (event.context && event.context.canvas) {
//     canvas.style.imageRendering = 'pixelated';
//   }
// });
// // Initialize the map with a static image layer
// const map = new Map({
//   target: 'map',
//   layers: [
//     background
//   ],
//   view: new View({
//     projection: projection,
//     center: getCenter(extent),
//     zoom: 1,
//     maxZoom: 5,
//     minZoom: 0,
//     extent: mainExtend,
//   }),
// });


// // Create vector source and layer for areas
// const areaSource = new VectorSource();
// const areaLayer = new VectorLayer({
//   source: areaSource,
//   style: (feature) => {
//     return new Style({
//       stroke: new Stroke({
//         color: feature.get('color'), // Use the color defined in the feature properties
//         width: 3,
//       }),
//       fill: new Fill({
//         color: 'rgba(0, 0, 0, 0)', // No fill
//       }),
//     });
//   },
// });
// areaLayer.set('title', "Areas");

// // Add predefined areas as features to the vector source
// areas.forEach(area => {
//   const polygon = new Polygon(area.poly);
//   const feature = new Feature({
//     geometry: polygon,
//     name: area.name,
//     color: area.color, // Customize this color for each area if desired
//   });
//   areaSource.addFeature(feature);
// });
// // Add area layer to the map
// map.addLayer(areaLayer);


// map.render();
// // Add an overlay for the tooltip
// const tooltip = document.createElement('div');
// tooltip.className = 'tooltip';
// const overlay = new Overlay({
//   element: tooltip,
//   offset: [10, 0],
//   positioning: 'bottom-left',
// });
// map.addOverlay(overlay);


// //Display tooltip on hover
// // map.on('pointermove', (event) => {
// //   const coords = map.getCoordinateFromPixel(event.pixel);
// //   const [x, y] = coords.map(coord => coord.toFixed(2)); // Round to 2 decimal places
// //   overlay.setPosition(event.coordinate);
// //     // Set the content of the coordDisplay div
// //     tooltip.innerHTML = `X: ${x}, Y: ${y}`;
// //     // Position the display div near the cursor
// //     tooltip.style.left = `${event.originalEvent.pageX + 15}px`;
// //     tooltip.style.top = `${event.originalEvent.pageY + 15}px`;
// // });

// // // Log coordinates to console on map click
// // map.on('click', function (event) {
// //   const coords = map.getCoordinateFromPixel(event.pixel);
// //   const [x, y] = coords.map(coord => coord.toFixed(2)); // Round to 2 decimal places
// //   console.log(`Clicked coordinates: [${x},${y}]`);
// // });

// // Vector layer for drawing
// const drawSource = new VectorSource();
// // const drawLayer = new VectorLayer({

// //   source: drawSource,
// //   style: new Style({
// //     stroke: new Stroke({
// //       color: 'red',
// //       width: 2,
// //     }),
// //     fill: new Fill({
// //       color: 'rgba(255, 0, 0, 0.1)',
// //     }),
// //   }),
// // });
// //map.addLayer(drawLayer);

// // Add draw interaction for polygons
// const draw = new Draw({
//   source: drawSource,
//   type: 'Polygon',
// });
// //map.addInteraction(draw);

// // Event listener to log coordinates when a polygon is drawn
// draw.on('drawend', function (event) {
//   const polygon = event.feature.getGeometry() as Polygon;
//   const coordinates = polygon.getCoordinates();
//   console.log('Polygon coordinates:', coordinates);

//   // Optionally, you could do something else with these coordinates,
//   // like displaying them on the page or storing them

// });


// // Create the layer control UI

// const layerControl = document.getElementById("layerControl")!;
// // Function to add a layer toggle checkbox
// function addLayerToggle(layer: any) {
//   const layerWrapper = document.createElement('div');
//   const layerCheckbox = document.createElement('input');
//   layerCheckbox.type = 'checkbox';
//   layerCheckbox.checked = layer.getVisible();
//   layerCheckbox.id = layer.get('title');

//   const layerLabel = document.createElement('label');
//   layerLabel.htmlFor = layer.get('title');
//   layerLabel.textContent = layer.get('title');

//   layerCheckbox.onchange = () => {
//     layer.setVisible(layerCheckbox.checked);
//   };

//   layerWrapper.appendChild(layerCheckbox);
//   layerWrapper.appendChild(layerLabel);
//   layerControl.appendChild(layerWrapper);
// }


// // Function to populate suggestions based on input
// function populateSuggestions(searchText: string) {
//   const suggestionsBox = document.getElementById('suggestions')!;
//   suggestionsBox.innerHTML = ''; // Clear previous suggestions
//   suggestionsBox.style.display = 'none';

//   if (searchText.length < 2) return;

//   // Filter rooms by room name or actions
//   const matchingRooms = rooms.filter((room: any) => {
//     // Check if room name matches search text
//     const roomNameMatch = room.name.toLowerCase().includes(searchText.toLowerCase());

//     // Check if any action name matches search text
//     const actionMatch = room.actions.some((action: any) => 
//       action.name.toLowerCase().includes(searchText.toLowerCase())
//     );

//     console.log(actionMatch)

//     return actionMatch || roomNameMatch; // Match if either condition is true
//   });

//   // Populate suggestions based on matched rooms
//   matchingRooms.forEach((room: any) => {
//     // Check if the room name matches, to prioritize how it's displayed
//     //const roomNameMatch = room.name.toLowerCase().includes(searchText.toLowerCase());

//     // Find the first action that matches (if any)
//     const matchingAction = room.actions.find((action: any) =>
//       action.name.toLowerCase().includes(searchText.toLowerCase())
//     );

//     // Create the suggestion text
//     const suggestionText = matchingAction 
//       ? `${matchingAction.name} - ${room.name}` // If room name matches, display the room name only
//       : `${room.name}`; // Otherwise, display action and room name

//     const suggestion = document.createElement('div');
//     suggestion.className = 'suggestion-item';
//     suggestion.textContent = suggestionText;
//     suggestion.onclick = () => {
//       centerMapOnRoom(room);
//       suggestionsBox.style.display = 'none';
//     };
//     suggestionsBox.appendChild(suggestion);
//   });

//   // Display suggestions if there are matches
//   if (matchingRooms.length > 0) {
//     suggestionsBox.style.display = 'block';
//   }
// }

// // Function to center map on a selected room
// function centerMapOnRoom(room: any) {
//   map.getView().animate({
//     center: room.location,
//     duration: 1000,
//     zoom: 6
//   });
// }


// // Set up search box with event listener for input
// const searchBox = document.getElementById('search-box')! as HTMLInputElement;
// searchBox.addEventListener('input', () => {
//   const searchText = searchBox.value;
//   populateSuggestions(searchText);
// });

// // Hide suggestions when clicking outside
// document.addEventListener('click', (event) => {
//   if (!document.getElementById('search-container')!.contains(event.target as any)) {
//     document.getElementById('suggestions')!.style.display = 'none';
//   }
// });











// const legendContainer = document.getElementById("legend") as HTMLDivElement;

// legendItems.forEach(item => {
//   const legendItem = document.createElement('div');
//   const iconName = item.toLowerCase().replace(' ', '-')
//   const icon = document.createElement('div');
//   icon.classList.add("icon", `icon-${iconName}`);
//   legendItem.classList.add("legend-item");
//   legendItem.innerHTML = item;
//   legendItem.addEventListener('click', () => highlightCategory(item))
//   legendItem.appendChild(icon);
//   legendContainer.appendChild(legendItem);
// })
// // <div class="legend-item" onclick="highlightCategory('Portal Stone')">Portal Stones</div>
// // <div class="legend-item" onclick="highlightCategory('Storage Rift')">Storage Rifts</div>

// // Style for invisible markers
// const invisibleStyle = new Style({
//   image: new Circle({
//     radius: 6,
//     fill: new Fill({ color: 'rgba(0, 0, 255, 0)' }) // Invisible by default
//   })
// });

// // Style for visible/highlighted markers
// const visibleStyle = new Style({
//   image: new Circle({
//     radius: 6,
//     stroke: new Stroke({ color: 'rgba(255, 255, 255, 1)', width: 2 }),
//     fill: new Fill({ color: 'rgba(125, 255, 125, 1)' }) // Change color as needed
//   })
// });

// const markerSource = new VectorSource();
// const markerLayer: VectorLayer = new VectorLayer({
//   source: markerSource,
//   style: invisibleStyle
// });
// markerLayer.set('title', "Items");

// rooms.forEach((d) => {
//   const feature = new Feature({
//     geometry: new Point(d.location),
//     name: d.name,
//     style: invisibleStyle
//   });
//   feature.set('actions', d.actions)
//   markerSource.addFeature(feature);
// });
// // Create vector source and layer for areas
// map.addLayer(markerLayer);

// function highlightCategory(category: string) {
//   markerLayer!.getSource()!.getFeatures().forEach((feature) => {
//     if (feature.get('actions').some((action: any) => { return action?.type?.toLowerCase() == category.toLowerCase() })) {
//       // Apply "ping" style
//       feature.setStyle(new Style({
//         image: new Circle({
//           radius: 6,
//           fill: new Fill({ color: 'blue' }),
//           stroke: new Stroke({ color: 'yellow', width: 2 })
//         })
//       }));
//       feature.setStyle(visibleStyle);
//       // Add ping animation class (CSS handles the animation)
//       setTimeout(() => {
//         feature.setStyle(invisibleStyle); // Reset to visible style after ping
//       }, 1000); // Adjust duration to match CSS animation timing

//     } else {
//       feature.setStyle(invisibleStyle); // Keep other points invisible
//     }
//   });
// }




// // Function to update URL with the closest point
// function updateUrlWithClosestPoint(name: string) {
//   const url = new URL(window.location.href);
//   url.searchParams.set('selectedRoom', name);
//   window.history.pushState({}, '', url);
// }

// // Find and highlight closest point on click
// map.on('singleclick', function (event) {
//   let closestFeature: any = null;
//   let minDistance = Infinity;

//   markerLayer!.getSource()!.getFeatures().forEach((feature) => {
//     const featureCoords = feature.getGeometry().getCoordinates();
//     const distance = Math.hypot(featureCoords[0] - event.coordinate[0], featureCoords[1] - event.coordinate[1]);

//     if (distance < minDistance) {
//       minDistance = distance;
//       closestFeature = feature;
//     }
//   });

//   if (closestFeature) {
//     const closestName = closestFeature.get('name');
//     closestFeature.setStyle(visibleStyle);
//     updateUrlWithClosestPoint(closestName);

//     // Reset highlight after a brief period
//     setTimeout(() => {
//       closestFeature.setStyle(invisibleStyle);
//     }, 1000);
//   }
// });




import './style.css';
import './icons.css';
import { map } from './map';
import { addLayerToggle, centerMapOnRoom, populateSuggestions, setWikiInfo } from './controls';
import { markerLayer } from './layers';
import { rooms } from './rooms';





map.getLayers().forEach((layer, i) => {
    if (i > 0) {
      addLayerToggle(layer, 'layerControl');
    }
  
  });

// Initialize the legend
// createLegend('legend');

// Set up search box with event listener for input
const searchBox = document.getElementById('search-box')! as HTMLInputElement;
searchBox.addEventListener('input', () => {
  populateSuggestions(searchBox.value);
});

// Hide suggestions when clicking outside
document.addEventListener('click', (event) => {
  if (!document.getElementById('search-container')!.contains(event.target as Node)) {
    document.getElementById('suggestions')!.style.display = 'none';
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const closest = params.get('selectedRoom');

  if (closest) {
    markerLayer!.getSource()!.getFeatures().forEach((feature) => {

      if (feature.get('name') === closest) {
        const selectedRoom = rooms.filter((room) => room.name == feature.get('name'))[0]
        centerMapOnRoom(selectedRoom.location)
        setWikiInfo(selectedRoom)
      }
    });
  }
});