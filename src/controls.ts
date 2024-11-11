
import { wikiUrl } from './constants';
import { map } from './map';
import { rooms } from './rooms';
import { Room } from './types';



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

export async function populateSuggestions(searchText: string) {
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
    matchingRooms.forEach((room: Room) => {
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
        suggestion.onclick = async () => {
            centerMapOnRoom(room.location);
            setWikiInfo(room);
            suggestionsBox.style.display = 'none';
        };
        suggestionsBox.appendChild(suggestion);
    });

    // Display suggestions if there are matches
    if (matchingRooms.length > 0) {
        suggestionsBox.style.display = 'block';
    }
}

export async function setWikiInfo(room: Room) {
    const roomInfo = document.getElementById('room-info');

            const requests = room.actions.map(action => getPageInfo(createWikiParams(action.name)));
            const results = await Promise.all(requests);
            console.log(results);
            if(results && roomInfo) {
                roomInfo.innerHTML = "";
                roomInfo.style.display = 'block';
                const resultTitle= document.createElement("h3");
                resultTitle.textContent=room.name;
                roomInfo.appendChild(resultTitle);
                results.forEach((result => roomInfo.appendChild(createResultItem(result)) ) )
            }
            
}

export function centerMapOnRoom(location: [number, number]) {
    map.getView().animate({
        center: location,
        duration: 1000,
        zoom: 6,
    });

}

function createResultItem(result: any) {
    // Create a container div for each result
    const resultItem = document.createElement("div");
    resultItem.classList.add("result-item");

    // Create a link element for the title
    const titleLink = document.createElement("a");
    titleLink.href = `${wikiUrl}${encodeURIComponent(result.title)}`;
    titleLink.target = "_blank"; // Opens in a new tab
    titleLink.textContent = result.title;
    titleLink.classList.add("result-title");

    // Create a paragraph for the extract
    const extractParagraph = document.createElement("p");
    extractParagraph.textContent = result.extract;
    extractParagraph.classList.add("result-extract");

    // Append the title link and extract paragraph to the result item container
    resultItem.appendChild(titleLink);
    resultItem.appendChild(extractParagraph);

    // Append the result item to the main room-info div
    return resultItem;
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




export function createWikiParams(skillNode: string) {
    return new URLSearchParams({
        action: "query",
        format: "json",
        prop: "extracts",
        exintro: "1",
        explaintext: "1",
        titles: skillNode,
        origin: "*" // CORS workaround
      });
}

export function getPageInfo(params: URLSearchParams) {
    return fetch(`${wikiUrl}api.php?${params}`)
    .then(function(response){return response.json();})
    .then(function(response) {
        const pageId = Object.keys(response.query.pages)[0];
        const page = response.query.pages[pageId];
        return {
            title: page.title || "No title found",
            extract: page.extract || "No summary available",
          };
    })
    .catch(function(error){console.log(error);});
}

