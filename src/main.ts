import { addLayerToggle, centerMapOnRoom, flipYCoordinates, setWikiInfo } from './controls';
import './icons.css';
import { projection, roomLayer } from './layers';
import { map, updateUrlWithClosestPoint } from './map';
import './style.css';

export let roomMarkerData: { rooms: any[], standaloneMarkers: any[] };

async function loadData() {
  roomMarkerData = await fetch('data/lookup_table.json').then((res) => res.json());
}


map.getLayers().forEach((layer, i) => {
  if (i > 1) {
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


document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const closest = params.get('selectedRoom');
  await loadData(); // Load rooms and markers data
  if (closest) {
    console.log(roomLayer!.getSource()!.getFeatures());
    roomLayer!.getSource()!.getFeatures().forEach((feature) => {
      if (feature.get('name') === closest) {
        const selectedRoom = roomMarkerData.rooms.filter((room) => room.name == feature.get('name'))[0]
        const selectedCoords = flipYCoordinates(selectedRoom.center, projection.getExtent());
        centerMapOnRoom([selectedCoords[0] * 48, selectedCoords[1] * 48])
        setWikiInfo(selectedRoom)
      }
    });
  }
});


const isInIframe = window.self !== window.top;
const hide = document.getElementById("hideframe")!;
if (isInIframe) {
  hide.classList.add('hidden');
}


// Populate suggestions function using the lookup table
async function populateSuggestions(searchText: string) {
  const suggestionsBox = document.getElementById('suggestions')!;
  suggestionsBox.innerHTML = ''; // Clear previous suggestions
  suggestionsBox.style.display = 'none';
  const cleanSearch = searchText.trim();
  if (cleanSearch.length < 2) return;

  const matchingRooms = roomMarkerData.rooms.filter((room: any) =>
    room.name.toLowerCase().includes(cleanSearch.toLowerCase())
  );

  const matchingMarkers = [
    // Search in markers inside rooms
    ...roomMarkerData.rooms.flatMap((room: any) =>
      room.markers.filter((marker: any) =>
        marker.properties.name.toLowerCase().includes(cleanSearch.toLowerCase())
      ).map((marker: any) => ({ ...marker, room }))
    ),
    // // Search in standalone markers
    // ...roomMarkerData.standaloneMarkers.filter((marker: any) =>
    //   marker.properties.name.toLowerCase().includes(searchText.toLowerCase())
    // ).map((marker: any) => ({ ...marker, roomName: null }))
  ];

  // Populate suggestions based on matched rooms and markers
  [...matchingRooms, ...matchingMarkers].forEach((item: any) => {
    const suggestion = document.createElement('div');
    suggestion.className = 'suggestion-item';

    if (item.markers) {
      // If it's a room
      suggestion.textContent = `Room: ${item.name}`;
    } else {
      // If it's a marker
      suggestion.textContent = item.room
        ? `${item.properties.name} (in ${item.room.name})`
        : `${item.properties.name}`;
    }

    suggestion.onclick = async () => {
      console.log(item);
      const center = item.type ? item.room.center : item.center
      const itemWiki = item.type ? item.room : item
      const centerCoords = flipYCoordinates(center, projection.getExtent());
      // Center map and set wiki info
      centerMapOnRoom([centerCoords[0] * 48, centerCoords[1] * 48]);
      setWikiInfo(itemWiki);
      updateUrlWithClosestPoint(itemWiki.name);
      suggestionsBox.style.display = 'none';
    };

    suggestionsBox.appendChild(suggestion);
  });

  // Display suggestions if there are matches
  if (matchingRooms.length > 0 || matchingMarkers.length > 0) {
    suggestionsBox.style.display = 'block';
  }
}


document!.getElementById('copy-button')!.addEventListener('click', () => {
  // Get the current URL
  const currentUrl = window.location.href;

  // Create the iFrame embed code
  const iframeCode = `<iframe src="${currentUrl}" width="600" height="400" frameborder="0"></iframe>`;

  // Copy to clipboard
  navigator.clipboard.writeText(iframeCode).then(() => {
    // Show a confirmation message
    const copiedMessage = document.getElementById('copied-message')!;
    copiedMessage.style.display = 'block';

    // Hide the confirmation message after 2 seconds
    setTimeout(() => {
      copiedMessage.style.display = 'none';
    }, 2000);
  });
});