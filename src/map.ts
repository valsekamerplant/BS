import { Map, View } from 'ol';
import { getCenter } from 'ol/extent';
import { backgroundLayer, markerLayer, extent, mainExtend, projection, legendLayers } from './layers';
import { Point } from 'ol/geom';

export const map = new Map({
  target: 'map',
  layers: [backgroundLayer, ...Object.values(legendLayers)],
  view: new View({
    projection: projection,
    center: getCenter(extent),
    zoom: 1,
    maxZoom: 5,
    minZoom: 0,
    extent: mainExtend,
  }),
});


// Find and highlight closest point on click
map.on('singleclick', function (event) {
  let closestFeature: any = null;
  let minDistance = Infinity;

  markerLayer.getSource()!.getFeatures().forEach((feature) => {
    const pointGeo = feature && feature.getGeometry() as Point;
    const featureCoords = pointGeo.getCoordinates();
    const distance = Math.hypot(featureCoords[0] - event.coordinate[0], featureCoords[1] - event.coordinate[1]);

    if (distance < minDistance) {
      minDistance = distance;
      closestFeature = feature;
    }
  });

  if (closestFeature) {
    const closestName = closestFeature.get('name');
    updateUrlWithClosestPoint(closestName);
  }
});


function updateUrlWithClosestPoint(name: string) {
  const url = new URL(window.location.href);
  url.searchParams.set('selectedRoom', name);
  window.history.pushState({}, '', url);
}