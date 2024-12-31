import { Map, Overlay, View } from 'ol';
import { getCenter } from 'ol/extent';
import { Icon, Style } from 'ol/style';
import { backgroundLayer, createFeatureStyle, fillSourceFeatures, highlightLayer, highlightTile, mapExtent, maxZoom, projection, roomLayer, roomSource, skillingLayer, skillingSource } from './layers';
import { centerMapOnRoom, setWikiInfo } from './controls';
import { roomMarkerData } from './main';

export const map = new Map({
    target: 'map',
    layers: [backgroundLayer, highlightLayer, roomLayer, skillingLayer],
    view: new View({
        projection: projection,
        resolutions: backgroundLayer.getSource()!.getTileGrid()!.getResolutions()!,
        extent: mapExtent,
        center: getCenter(mapExtent),
        zoom: 0,
        minZoom: 0,
        maxZoom: maxZoom,
    }),
});

fillSourceFeatures('rooms', roomSource)
fillSourceFeatures('markers', skillingSource)

map.on('singleclick', function (event) {
    const source = roomLayer.getSource()!;

    // Get the closest feature to the clicked coordinate
    const closestFeature = source.getClosestFeatureToCoordinate(event.coordinate);

    if (closestFeature) {
        const closestName = closestFeature.get('name') || closestFeature.getId();
        // Perform other actions
        console.log(closestFeature);
        const selectedRoom = roomMarkerData.rooms.filter((room) => room.name == closestName)[0]
        const center = getCenter(closestFeature!.getGeometry()!.getExtent());
        setWikiInfo(selectedRoom)
        centerMapOnRoom([center[0],center[1]])
        updateUrlWithClosestPoint(closestName);
    } else {
        console.log('No polygon found near the clicked point.');
    }
});

export function updateUrlWithClosestPoint(name: string) {
    const url = new URL(window.location.href);
    url.searchParams.set('selectedRoom', name);
    window.history.pushState({}, '', url);
}



// const output = rooms.map(room => {
//   let outputString = '';
//  let sellers: string[] = []
//  let mobs: string[] = []
//  let skills: string[] = []
//  room.actions.forEach(action => {
//     if(action.type && combatProfessions.includes(action.type)) {
//       mobs.push(action.name);
//     } else if (action.type && action.type === PROFESSIONS.SELLER) {
//       sellers.push(action.name)
//     } else if (action.type) {
//       skills.push(action.name)
//     }


//  });
//  return `${room.name};;;${mobs.join(', ')};${skills.join(', ')};${sellers.join(', ')}\n`
// })
// console.log(output.join(''))





// Create a tooltip element for the overlay
export const tooltipElement = document.createElement('div');
tooltipElement.className = 'ol-tooltip';
tooltipElement.style.position = 'absolute';
tooltipElement.style.background = 'rgba(0, 0, 0, 0.6)';
tooltipElement.style.color = 'white';
tooltipElement.style.padding = '5px';
tooltipElement.style.borderRadius = '4px';
tooltipElement.style.whiteSpace = 'nowrap';
tooltipElement.style.pointerEvents = 'none';

// Create an overlay for the tooltip and add it to the map
export const tooltipOverlay = new Overlay({
    element: tooltipElement,
    offset: [10, 0],
    positioning: 'bottom-left',
});
map.addOverlay(tooltipOverlay);


// Function to highlight the current tile under the cursor

// Update the highlighted tile on pointer move
map.on('pointermove', (event: any) => {
    highlightTile(event.coordinate);
});


// Add listener to adjust icon size relative to zoom level
map.getView().on('change:resolution', () => {
    const currentZoom = map.getView().getZoom()!;
    const maxZoom = map.getView().getMaxZoom();

    // Calculate the scale based on current zoom level relative to max zoom
    const scaleFactor = Math.pow(2, currentZoom - maxZoom);

    // Iterate over all features to update their scale dynamically
    skillingSource.getFeatures().forEach(feature => {
        const iconStyle = feature.getStyle() as Style;
        if (iconStyle && iconStyle.getImage() instanceof Icon) {
            const icon = iconStyle.getImage() as Icon;
            icon.setScale(scaleFactor); // Dynamically adjust scale relative to zoom level
        }
    });
});

map.on('moveend', () => {
    const zoom = map.getView().getZoom()!; // Get the current zoom level
  
    roomSource.getFeatures().forEach((feature) => {
      const featureName = feature.get('name') || 'Unnamed Feature'; // Replace with your feature's property key
      const style = createFeatureStyle(featureName, zoom);
      feature.setStyle(style);
    });
  });
  