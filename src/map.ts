import { Map, Overlay, View } from 'ol';
import { backgroundLayer, highlightLayer, highlightTile, legendLayers, mapExtent, maxZoom, projection, resolutions, tileUnit, roomLayer, skillingLayer, skillingSource } from './layers';
import { getCenter } from 'ol/extent';
import { Icon, Style } from 'ol/style';

export const map = new Map({
    target: 'map',
    layers: [backgroundLayer, highlightLayer, roomLayer, skillingLayer, ...Object.values(legendLayers)],
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


// Find and highlight closest point on click
// map.on('singleclick', function (event) {
//     let closestFeature: any = null;
//     let minDistance = Infinity;

//     markerLayer.getSource()!.getFeatures().forEach((feature) => {
//         const pointGeo = feature && feature.getGeometry() as Point;
//         const featureCoords = pointGeo.getCoordinates();
//         const distance = Math.hypot(featureCoords[0] - event.coordinate[0], featureCoords[1] - event.coordinate[1]);

//         if (distance < minDistance) {
//             minDistance = distance;
//             closestFeature = feature;
//         }
//     });

//     if (closestFeature) {
//         const closestName = closestFeature.get('name');
//         updateUrlWithClosestPoint(closestName);
//     }
// });


// function updateUrlWithClosestPoint(name: string) {
//     const url = new URL(window.location.href);
//     url.searchParams.set('selectedRoom', name);
//     window.history.pushState({}, '', url);
// }

function updateUrlWithClosestPoint(name: string) {
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
