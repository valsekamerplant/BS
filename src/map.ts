import { Map, Overlay, View } from 'ol';
import { backgroundLayer, markerLayer, projection, legendLayers, hoverFeature, hoverLayer, maxExtent } from './layers';
import { Point } from 'ol/geom';
import { getCenter } from 'ol/extent';

export const map = new Map({
    target: 'map',
    layers: [backgroundLayer, hoverLayer, ...Object.values(legendLayers)],
    view: new View({
        projection: projection,
        center: [0, 0],
        zoom: 5,
        minZoom: 2,
        maxZoom: 5,
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

// Function to update the hover feature's geometry based on the current zoom level
function updateHoverFeature(center: [number, number]) {
    const view = map.getView();
    const currentZoom = view.getZoom()!;
    const hoverSizeInPixels = 24 / Math.pow(2, 5 - currentZoom); // Adjust size relative to zoom

    const mapResolution = view.getResolution()!;
    const hoverSizeInMapUnits = hoverSizeInPixels * mapResolution;

    // Calculate the four corners of the hover square based on the center and hover size
    const [centerX, centerY] = center;
    const hoverCoordinates = [
        [centerX - hoverSizeInMapUnits / 2, centerY - hoverSizeInMapUnits / 2],
        [centerX + hoverSizeInMapUnits / 2, centerY - hoverSizeInMapUnits / 2],
        [centerX + hoverSizeInMapUnits / 2, centerY + hoverSizeInMapUnits / 2],
        [centerX - hoverSizeInMapUnits / 2, centerY + hoverSizeInMapUnits / 2],
        [centerX - hoverSizeInMapUnits / 2, centerY - hoverSizeInMapUnits / 2],
    ];

    // Update the geometry of the hover feature
    hoverFeature.getGeometry()?.setCoordinates([hoverCoordinates]);
}


// Update hover feature position on pointer move
map.on('pointermove', (event) => {
    const mapResolution = map.getView().getResolution()!;
    const tileSizeInMapUnits = 24 * mapResolution;

    // Calculate the snapped center of the nearest tile
    const snappedX = Math.floor(event.coordinate[0] / tileSizeInMapUnits) * tileSizeInMapUnits + tileSizeInMapUnits / 2;
    const snappedY = Math.floor(event.coordinate[1] / tileSizeInMapUnits) * tileSizeInMapUnits + tileSizeInMapUnits / 2;

    // Update the hover feature geometry based on the snapped center
    updateHoverFeature([snappedX, snappedY]);
});

// Update hover feature size on zoom change
map.getView().on('change:resolution', () => {
    const currentCenter = hoverFeature.getGeometry()?.getInteriorPoint().getCoordinates();
    if (currentCenter) {
        updateHoverFeature([currentCenter[0], currentCenter[1]]);
    }
});