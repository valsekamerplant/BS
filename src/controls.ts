
import { map } from './map';
import { rooms } from './rooms';



export function addLayerToggle(layer: any, containerId: string) {
    const layerControl = document.getElementById(containerId)!;
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

export function populateSuggestions(searchText: string) {
    const suggestionsBox = document.getElementById('suggestions')!;
    suggestionsBox.innerHTML = ''; // Clear previous suggestions
    suggestionsBox.style.display = 'none';

    if (searchText.length < 2) return;

    // Filter rooms by room name or actions
    const matchingRooms = rooms.filter((room: any) => {
        // Check if room name matches search text
        const roomNameMatch = room.name.toLowerCase().includes(searchText.toLowerCase());

        // Check if any action name matches search text
        const actionMatch = room.actions.some((action: any) =>
            action.name.toLowerCase().includes(searchText.toLowerCase())
        );

        console.log(actionMatch)

        return actionMatch || roomNameMatch; // Match if either condition is true
    });

    // Populate suggestions based on matched rooms
    matchingRooms.forEach((room: any) => {
        // Check if the room name matches, to prioritize how it's displayed
        //const roomNameMatch = room.name.toLowerCase().includes(searchText.toLowerCase());

        // Find the first action that matches (if any)
        const matchingAction = room.actions.find((action: any) =>
            action.name.toLowerCase().includes(searchText.toLowerCase())
        );

        // Create the suggestion text
        const suggestionText = matchingAction
            ? `${matchingAction.name} - ${room.name}` // If room name matches, display the room name only
            : `${room.name}`; // Otherwise, display action and room name

        const suggestion = document.createElement('div');
        suggestion.className = 'suggestion-item';
        suggestion.textContent = suggestionText;
        suggestion.onclick = () => {
            centerMapOnRoom(room.location);
            suggestionsBox.style.display = 'none';
        };
        suggestionsBox.appendChild(suggestion);
    });

    // Display suggestions if there are matches
    if (matchingRooms.length > 0) {
        suggestionsBox.style.display = 'block';
    }
}

export function centerMapOnRoom(location: [number, number]) {
    map.getView().animate({
        center: location,
        duration: 1000,
        zoom: 6,
    });
}



// Function to create a legend for specified categories
// export function createLegend(containerId: string) {
//     const legendContainer = document.getElementById(containerId) as HTMLDivElement;

//     legendItems.forEach((item) => {
//         const legendItem = document.createElement('div');
//         const iconName = item.toLowerCase().replace(' ', '-');
//         const icon = document.createElement('div');
//         icon.classList.add('icon', `icon-${iconName}`);

//         legendItem.classList.add('legend-item');
//         legendItem.textContent = item;
//         legendItem.appendChild(icon);
//         legendItem.addEventListener('click', () => highlightCategory(item));

//         legendContainer.appendChild(legendItem);
//     });
// }

// Function to highlight markers on the map based on the selected category
// function highlightCategory(category: string) {
//     markerLayer.getSource()!.getFeatures().forEach((feature) => {
//         const isCategoryMatch = feature.get('actions').some((action: any) => { return action?.type?.toLowerCase() == category.toLowerCase() })

//         if (isCategoryMatch) {
//             feature.setStyle(new Style({
//                 image: new Circle({
//                     radius: 6,
//                     fill: new Fill({ color: 'blue' }),
//                     stroke: new Stroke({ color: 'yellow', width: 2 }),
//                 }),
//             }));

//             setTimeout(() => {
//                 feature.setStyle(new Style({
//                     image: new Circle({
//                         radius: 6,
//                         fill: new Fill({ color: 'rgba(0, 0, 255, 0)' }),
//                     }),
//                 }));
//             }, 1000);
//         } else {
//             feature.setStyle(new Style({
//                 image: new Circle({
//                     radius: 6,
//                     fill: new Fill({ color: 'rgba(0, 0, 255, 0)' }),
//                 }),
//             }));
//         }
//     });
// }