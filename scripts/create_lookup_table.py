import json
from shapely.geometry import Point, Polygon
from shapely.geometry import shape

# Load the rooms and markers data
with open('./public/data/rooms.json', 'r') as rooms_file:
    rooms_data = json.load(rooms_file)

with open('./public/data/markers.json', 'r') as markers_file:
    markers_data = json.load(markers_file)

# Define the padding distance (adjust based on your coordinate system)
padding_distance = 2  # Units depend on your data's coordinate system

# Parse rooms as polygons and apply padding
rooms = []
for feature in rooms_data['features']:
    polygon = shape(feature['geometry'])  # Create a polygon from the geometry
    padded_polygon = polygon.buffer(padding_distance)  # Add padding to the polygon
    room_name = feature['properties']['name']
    room_center = polygon.centroid.coords[0]  # Get the centroid coordinates (original polygon)
    rooms.append({
        'polygon': padded_polygon,  # Use the padded polygon for containment checks
        'name': room_name,
        'center': list(room_center),  # Add center coordinates (unchanged)
        'markers': []  # Markers specific to this room
    })

# Function to check if a marker is already in the room based on name
def is_marker_name_unique(marker, marker_list):
    return not any(marker['properties']['name'] == m['properties']['name'] for m in marker_list)

# Parse markers as points and group them into rooms
standalone_markers = []
unique_markers = []  # To track unique markers across all data
for marker_feature in markers_data['features']:
    marker_point = Point(marker_feature['geometry']['coordinates'])
    contained_in_room = False

    # Check if the marker is inside any room
    for room in rooms:
        if room['polygon'].contains(marker_point):
            # Add the marker only if its name is unique for this room
            if is_marker_name_unique(marker_feature, room['markers']):
                room['markers'].append(marker_feature)
            contained_in_room = True
            break

    # If not contained in any room, add to standalone markers
    if not contained_in_room:
        # Add the marker only if its name is globally unique
        if is_marker_name_unique(marker_feature, standalone_markers):
            standalone_markers.append(marker_feature)

# Create the lookup table
lookup_table = {
    'rooms': [{'name': room['name'], 'center': room['center'], 'markers': room['markers']} for room in rooms],
    'standaloneMarkers': standalone_markers
}

# Save the lookup table to a JSON file
with open('./public/data/lookup_table.json', 'w') as lookup_file:
    json.dump(lookup_table, lookup_file, indent=4)

print("Lookup table with unique marker names created and saved to 'lookup_table.json'")