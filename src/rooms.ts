import { PROFESSIONS } from "./constants";
import { Room } from "./types";

export const rooms: Room[] = [
    //HOPEPORT
    {
        name: 'Rocky Road',
        location: [407.92,2723.71],
        actions: [{ name: 'Punkupine', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'Collapsed Hovels',
        location: [280.97,2556.14],
        actions: [{ name: 'Ghoul', type: PROFESSIONS.GUARD }, { name: 'Feather', type: PROFESSIONS.GATHERER }, { name: 'Maggots (any)', type: PROFESSIONS.GATHERER }, { name: 'Moth Wing', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Wasteland',
        location: [407.92,2380.11],
        actions: [{ name: 'Ghoul', type: PROFESSIONS.GUARD }, { name: 'Monument Piece', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Overgrow Road',
        location: [600.88,2278.44],
        actions: [{ name: 'Hairbeast', type: PROFESSIONS.GUARD }, { name: 'Nettle', type: PROFESSIONS.GATHERER }, { name: 'WaterLily', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Crater',
        location: [428.23,2090.56],
        actions: [{ name: 'Giant Ant', type: PROFESSIONS.GUARD }, { name: 'Hogberries', type: PROFESSIONS.GATHERER }, { name: 'Monument Piece', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Pirate Hideout',
        location: [189.57,2080.41],
        actions: [{ name: 'Pirate', type: PROFESSIONS.GUARD }, { name: 'Gurnard (any)', type: PROFESSIONS.FISHER }, { name: 'Limpet', type: PROFESSIONS.GATHERER }, { name: 'Wrack', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Ray Bay',
        location: [230.20,1858.68],
        actions: [{ name: 'Limpet', type: PROFESSIONS.GATHERER }, { name: 'Ray (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Starfish Point',
        location: [213.27,1658.95],
        actions: [{ name: 'Wrack', type: PROFESSIONS.GATHERER }, { name: 'Starfish', type: PROFESSIONS.GATHERER }, { name: 'Cod (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Jellyfish Landing',
        location: [414.69,1684.34],
        actions: [{ name: 'Jellyfish', type: PROFESSIONS.GUARD }, { name: 'Kelp', type: PROFESSIONS.GATHERER }, { name: 'Starfish', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Fallen Monument',
        location: [413.00,1863.75],
        actions: [{ name: 'Carnivorous Plant', type: PROFESSIONS.GUARD }, { name: 'Hogberries', type: PROFESSIONS.GATHERER }, { name: 'Potato', type: PROFESSIONS.GATHERER }, { name: 'Monument Piece', type: PROFESSIONS.GATHERER }, { name: 'Fallen Monument', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Rubble Road',
        location: [631.34,2056.71],
        actions: [{ name: 'Hairbeast', type: PROFESSIONS.GUARD }, { name: 'Bellplant', type: PROFESSIONS.GATHERER }, { name: 'Water lilly', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Overgrown Pond',
        location: [800.61,1990.70],
        actions: [{ name: 'Bugman', type: PROFESSIONS.GUARD }, { name: 'Nettle', type: PROFESSIONS.GATHERER }, { name: 'Pond Weed', type: PROFESSIONS.GATHERER }]
    },

    {
        name: 'Overgrown Field',
        location: [624.57,1863.75],
        actions: [{ name: 'Carnivorous Plant', type: PROFESSIONS.GUARD }, { name: 'Bellplant', type: PROFESSIONS.GATHERER }, { name: 'Potato', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Seashells Seashore',
        location: [638.11,1653.87],
        actions: [{ name: 'Bass (any)', type: PROFESSIONS.FISHER }, { name: 'Shell', type: PROFESSIONS.GATHERER }, { name: 'Anemone', type: PROFESSIONS.GATHERER }, { name: 'Sea Potato', type: PROFESSIONS.GATHERER }, { name: 'Sea Slug (any)', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'East Beach',
        location: [822.61,1620.02],
        actions: [{ name: 'Crab', type: PROFESSIONS.GUARD }, { name: 'Flounder (any)', type: PROFESSIONS.FISHER }, { name: 'Kelp', type: PROFESSIONS.GATHERER }, { name: 'Shell', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Sea Road',
        location: [866.62,1746.96],
        actions: [{ name: 'The seaside Rock Shop', type: PROFESSIONS.SELLER }, { name: 'Storage Rift', type: PROFESSIONS.STORAGERIFT }]
    },
    {
        name: 'Scrapyard',
        location: [1032.49,1897.61],
        actions: [{ name: 'Scrap Merchant', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'West Waterfront',
        location: [1126.06,1693.19],
        actions: [{ name: 'Lobster (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Little Lucy',
        location: [1148.90,1488.99],
        actions: [{ name: 'Wraddock (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Central Waterfront',
        location: [1349.07,1694.53],
        actions: [{ name: 'Bream (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Boardwalk',
        location: [1582.83,1687.82],
        actions: [{ name: 'Herring (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'East Waterfront',
        location: [1804.49,1689.16],
        actions: [{ name: 'Oyster (any)', type: PROFESSIONS.FISHER }, { name: 'Scrap Metal', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Vacant Pier',
        location: [1758.82,1506.45],
        actions: [{ name: 'Dab (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Vincible',
        location: [1944.21,1456.75],
        actions: [{ name: 'Sturlet (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Salty Swine',
        location: [1314.14,1484.96],
        actions: [{ name: 'Mackibut (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Eel Street',
        location: [1393.41,1845.00],
        actions: [{ name: 'The frequently fresh fish stall', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Eel street Bridge',
        location: [1394.75,2016.95],
        actions: [{ name: 'Eel (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Hopeport Obelisk',
        location: [1215.15,2021.02],
        actions: [{ name: 'Obelisk', type: PROFESSIONS.OBELISK }]
    },
    {
        name: 'Brannof Boulevard',
        location:  [1192.52,2181.98],
        actions: [{ name: 'Periwinkle', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Town Square',
        location: [1398.76,2166.89],
        actions: [{ name: 'Potion Reagents', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Stone Street',
        location: [1435.23,2350.50],
        actions: [{ name: 'Kevin\'s Ingredients', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Apothecary',
        location:  [1581.10,2344.21],
        actions: [{ name: 'Potion Stations', type: PROFESSIONS.ALCHEMIST }, { name: 'Passive Potion Stations', type: PROFESSIONS.ALCHEMIST }, { name: 'Work for Ebsworth', type: PROFESSIONS.ALCHEMIST }, { name: 'Potion Reagents', type: PROFESSIONS.STORAGE }, { name: 'Potions', type: PROFESSIONS.STORAGE }, { name: 'The Apothecary Shop', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Melv\s Fishing Supplies',
        location: [1550.92,2227.26],
        actions: [{ name: 'Fishing Bait', type: PROFESSIONS.STORAGE }, { name: 'Fishing Supplies', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Hairdresser',
        location: [1671.65,2223.48],
        actions: [{ name: 'Hairdresser', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Old Street West',
        location: [1606.25,2131.68],
        actions: [{ name: 'Wallplant', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Wilhope Passage',
        location: [1649.01,1919.15],
        actions: [{ name: 'Street Louse', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'Tim\'s Alley',
        location: [1793.63,2010.96],
        actions: [{ name: 'Thief', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'Limpet Lane',
        location: [1793.63,1802.20],
        actions: [{ name: 'Thief', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'Little Square',
        location: [1791.11,1904.06],
        actions: [{ name: 'Louse', type: PROFESSIONS.GATHERER }, { name: 'Shimmerbean', type: PROFESSIONS.GATHERER }, { name: 'Spinseed', type: PROFESSIONS.GATHERER }, { name: 'Sprey', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Nook Alley',
        location: [1880.40,1822.32],
        actions: [{ name: 'Scrap Metal', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Murk Close',
        location: [1965.91,1905.32],
        actions: [{ name: 'Thug', type: PROFESSIONS.GUARD }, { name: 'Storage Rift', type: PROFESSIONS.STORAGERIFT }]
    },
    {
        name: 'Hopeport Portal Stone',
        location: [1166.19,2756.11],
        actions: [{ name: 'Portal Stone', type: PROFESSIONS.PORTALSTONE }]
    },
    {
        name: 'Sparring Area',
        location: [1076.90,2566.22],
        actions: [{ name: 'Sparring Guard', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'Quartermaster',
        location: [1522.08,2519.69],
        actions: [{ name: 'Quartermaster', type: PROFESSIONS.STORAGE }, { name: 'Quartermaster Shop', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Old Street East',
        location: [1841.50,2129.85],
        actions: [{ name: 'Deathcrow', type: PROFESSIONS.GUARD }, { name: 'Wallplant', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'The Cloakroom',
        location: [1767.30,2224.17],
        actions: [{ name: 'Capes', type: PROFESSIONS.STORAGE }, { name: 'Cape Shop', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'The Forager\'s Warehouse',
        location: [1899.35,2236.74],
        actions: [{ name: 'The Forager\'s Warehouse', type: PROFESSIONS.SELLER }]
    },

    {
        name: 'Enchantress Shop',
        location: [1856.59,2019.19],
        actions: [{ name: 'Enchantress', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Town Gates',
        location: [2062.61,2127.49],
        actions: [{ name: 'Deathcrow', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'South Walls',
        location: [2130.52,1961.49],
        actions: [{ name: 'Goblin Chief', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'North Walls',
        location: [2120.46,2294.74],
        actions: [{ name: 'Goblin Soldier', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'Kevin\'s Ingredients ',
        location: [1407.11,2406.36],
        actions: [{ name: "Bread" },
        { name: "Butter" },
        { name: "Cabbage" },
        { name: "Raw Chicken" },
        { name: "Cream" },
        { name: "Gelatin" },
        { name: "Lemon Juice" },
        { name: "Pastry" },
        { name: "Raw Sausages" },
        { name: "Soy Sauce" },
        { name: "Stock" },
        { name: "Wine" },
        { name: "Basic Raw Bacon" },
        { name: "Appetizing Raw Bacon" },
        { name: "Fine Raw Bacon" },
        { name: "Tasty Raw Bacon" },
        { name: "Delicious Raw Bacon" },
        { name: "Gourmet Raw Bacon" },
        { name: "Golbranth Beetroot" },
        { name: "Tarang Beetroot" },
        { name: "Kalb Beetroot" },
        { name: "Flexhair Beetroot" },
        { name: "Zing Beetroot" },
        { name: "Oldclay Beetroot" },
        { name: "Furtop Beetroot" },
        { name: "Olgrave Beetroot" },
        { name: "Volbarn Beetroot" },
        { name: "Jamato Beetroot" },
        { name: "Basic Eggs" },
        { name: "Appetizing Eggs" },
        { name: "Tasty Eggs" },
        { name: "Delicious Eggs" },
        { name: "Gourmet Eggs" },
        { name: "Deepside Garlic" },
        { name: "Firevein Garlic" },
        { name: "Langard Garlic" },
        { name: "Shelkram Garlic" },
        { name: "Grotto Garlic" },
        { name: "Amberflesh Garlic" },
        { name: "Weldbulb Garlic" },
        { name: "Valent Leek" },
        { name: "Basic Mixed Vegetables" },
        { name: "Appetizing Mixed Vegetables" },
        { name: "Fine Mixed Vegetables" },
        { name: "Tasty Mixed Vegetables" },
        { name: "Delicious Mixed Vegetables" },
        { name: "Gourmet Mixed Vegetables" },
        { name: "Piper Potato" },
        { name: "King Phelwan Potato" },
        { name: "Calystra Potato" },
        { name: "Colawan Potato" },
        { name: "Bitterbide Potato" },
        { name: "Greengrail Potato" },
        { name: "Galimeer Potato" }]
    },
    {
        name: 'Ebsworth',
        location: [1594.07,2358.82],
        actions: [
            { name: "Bottle" },
            { name: "+1 Potion Boost Level" },
            { name: "+2 Potion Boost level" },
            { name: "3 Minute Potion Fear" },
            { name: "6 Minute Potion Fear" },
            { name: "20% Potion Healing" },
            { name: "25% Potion Healing" }]
    },
    {
        name: 'Melv',
        location: [1548.12,2217.81],
        actions: [{ name: "Bucket" },
        { name: "Crate" },
        { name: "Fishing Spear" },
        { name: "Tier 2 Fishing Spear" },
        { name: "Tier 3 Fishing Spear" },
        { name: "Tier 4 Fishing Spear" },
        { name: "Tier 5 Fishing Spear" },
        { name: "Tier 6 Fishing Spear" },
        { name: "Fishing Rod" },
        { name: "Tier 2 Fishing Rod" },
        { name: "Tier 3 Fishing Rod" },
        { name: "Tier 4 Fishing Rod" },
        { name: "Tier 5 Fishing Rod" },
        { name: "Tier 6 Fishing Rod" },
        { name: "Cast Net" },
        { name: "Lobster Pot" },
        { name: "Oyster Net" },
        { name: "Tier 2 Cast Net" },
        { name: "Tier 2 Lobster Pot" },
        { name: "Tier 2 Oyster Net" },
        { name: "Grubby Grubs" },
        { name: "Hobrin Grubs" },
        { name: "Shvelt Grubs" },
        { name: "Meldan Grubs" },
        { name: "Cellandale Grubs" },
        { name: "Blotchy Maggots" },
        { name: "Pasty Maggots" },
        { name: "Icky Maggots" },
        { name: "Rosy Maggots" },
        { name: "Writhing Maggots" },
        { name: "Slippy Sea Slug" },
        { name: "Black Sea Slug" },
        { name: "Brown Sea Slug" },
        { name: "Gunky Sea Slug" },
        { name: "Juicy Sea Slug" },
        { name: "Feast Worms" },
        { name: "Pine Needle Worms" },
        { name: "Red Worms" },
        { name: "Squirm Worms" }]
    },
    {
        name: 'Frequently fresh fish shop',
        location: [1365.91,1872.41],
        actions: [{ name: "Placid Bass" },
        { name: "Striped Bass" },
        { name: "Emerald Bass" },
        { name: "Dropthe Bass" },
        { name: "Giant Bass" },
        { name: "Leathery Bream" },
        { name: "Black Bream" },
        { name: "Surf Bream" },
        { name: "Graceful Bream" },
        { name: "Cream Bream" },
        { name: "Gilt-Headed Bream" },
        { name: "Brilliant Bream" },
        { name: "Slight Cod" },
        { name: "Waltzing Cod" },
        { name: "Teal Cod" },
        { name: "Pearly Cod" },
        { name: "Mosaic Cod" },
        { name: "Burly Cod" },
        { name: "Emperor Cod" },
        { name: "Common Dab" },
        { name: "Small Dab" },
        { name: "Dancing Dab" },
        { name: "Summer Dab" },
        { name: "Smooth Dab" },
        { name: "Screaming Ab Dab" },
        { name: "Spotted Dab" },
        { name: "Mighty Dab" },
        { name: "Lesser Eel" },
        { name: "Gray Eel" },
        { name: "Rocky Eel" },
        { name: "Rord Eel" },
        { name: "Moray Eel" },
        { name: "Conger Eel" },
        { name: "Leopard Eel" },
        { name: "Greater Eel" },
        { name: "Mottled Flounder" },
        { name: "Olive Flounder" },
        { name: "Stone Flounder" },
        { name: "Arrowtooth Flounder" },
        { name: "Flowery Flounder" },
        { name: "Jelly Flounder" },
        { name: "Peacock Flounder" },
        { name: "Starry Flounder" },
        { name: "Black Flounder" },
        { name: "Yellowtail Gurnard" },
        { name: "Bigeye Gurnard" },
        { name: "Blackfin Gurnard" },
        { name: "Shiny Gurnard" },
        { name: "Torpedo Gurnard" },
        { name: "Grand Gurnard" },
        { name: "Ridged Herring" },
        { name: "Gray Herring" },
        { name: "Red Herring" },
        { name: "Ochre Herring" },
        { name: "Wishful Herring" },
        { name: "Hope Herring" },
        { name: "Shimmering Herring" },
        { name: "Orange Lobster" },
        { name: "Striped Lobster" },
        { name: "Ghost Lobster" },
        { name: "Cunning Lobster" },
        { name: "Spotted Mackibut" },
        { name: "Whitespot Mackibut" },
        { name: "Blue Jack Mackibut" },
        { name: "Streaked Mackibut" },
        { name: "Horse Mackibut" },
        { name: "Chub Mackibut" },
        { name: "Blue Mackibut" },
        { name: "Wahoo Mackibut" },
        { name: "Etway Mackibut" },
        { name: "King Mackibut" },
        { name: "Beach Oyster" },
        { name: "Signal Oyster" },
        { name: "Speckled Oyster" },
        { name: "Rusty Oyster" },
        { name: "Sandy Pufferfish" },
        { name: "Lonely Pufferfish" },
        { name: "Lemon Pufferfish" },
        { name: "Figure Eight Pufferfish" },
        { name: "Rubber Pufferfish" },
        { name: "Merry Old Pufferfish" },
        { name: "High Tide Pufferfish" },
        { name: "Unicorn Pufferfish" },
        { name: "Common Ray" },
        { name: "Dim Ray" },
        { name: "Soldier Ray" },
        { name: "Nimble Ray" },
        { name: "Tiger Ray" },
        { name: "Broad Ray" },
        { name: "Jade Ray" },
        { name: "Prime Ray" },
        { name: "Idle Sturlet" },
        { name: "Flathead Sturlet" },
        { name: "Striped Sturlet" },
        { name: "Thick Lipped Sturlet" },
        { name: "Wandering Sturlet" },
        { name: "Silver Sturlet" },
        { name: "Western Sturlet" },
        { name: "Blond Sturlet" },
        { name: "Bullet Sturlet" },
        { name: "Mighty Sturlet" },
        { name: "Ballan Wraddock" },
        { name: "Goldsinny Wraddock" },
        { name: "Cuckoo Wraddock" },
        { name: "Cleaner Wraddock" },
        { name: "Ornate Wraddock" },
        { name: "Six Line Wraddock" },
        { name: "Corkwing Wraddock" },
        { name: "Mega Wraddock" },
        ]
    },
    {
        name: 'Forager\'s warehouse',
        location: [1899.35,2236.74],
        actions: [{ name: "Basket" },
        { name: "Bottle" },
        { name: "Bucket" },
        { name: "Crate" },
        { name: "Jar" },
        { name: "Sack" },
        { name: "Secateurs" },
        { name: "Trowel" },
        { name: "Pond Net" },]
    },
    {
        name: 'Zeltay Tramagan (Potion Reagents)',
        location: [1398.76,2166.89],
        actions: [
            { name: "Blue Aboredon Egg" },
            { name: "Stoneshell Aboredon Egg" },
            { name: "Bitter Acorn" },
            { name: "Sweet Acorn" },
            { name: "Beadlet Anemone" },
            { name: "Strawberry Anemone" },
            { name: "Dhalia Anemone" },
            { name: "Snakelocks Anemone" },
            { name: "Elegant Anemone" },
            { name: "Tad Apple" },
            { name: "Myrtle Apple" },
            { name: "Golden Scrumptious Apple" },
            { name: "Chipped Beastman Claws" },
            { name: "Shaggy Beastman Claws" },
            { name: "Yellowing Beastman Claws" },
            { name: "Thick Beastman Claws" },
            { name: "Heavy Beastman Claws" },
            { name: "Salt Beetle" },
            { name: "Star Beetle" },
            { name: "Mauve Bellplant" },
            { name: "Crimson Bellplant" },
            { name: "Starshine Bellplant" },
            { name: "Slothful Bug" },
            { name: "Lowburrow Bug" },
            { name: "Pine Bug" },
            { name: "Blood Bug" },
            { name: "Sour Bug" },
            { name: "Red Cabbage" },
            { name: "Napa Cabbage" },
            { name: "Bristled Catkin" },
            { name: "Fuzzy Catkin" },
            { name: "Gray Cave Moss" },
            { name: "Brown Cave Moss" },
            { name: "Yellow Cave Moss" },
            { name: "Green Cave Moss" },
            { name: "Dark Cave Moss" },
            { name: "Orange Centipede" },
            { name: "Scuttling Centipede" },
            { name: "Dewkin Chestnut" },
            { name: "Lowbrunch Chestnut" },
            { name: "Klamit Cinnamon Sticks" },
            { name: "Vorshalt Cinnamon Sticks" },
            { name: "Brown Kelp" },
            { name: "White Periwinkle" },
            { name: "Creamy Wallplant" },]
    },
    {
        name: "The Delectable Dab Kitchen",
        location: [1126.84,2360.90],
        actions: [
            { name: "Cooking Stations", type: PROFESSIONS.CHEF },
            { name: "Fish Dishes", type: PROFESSIONS.CHEF },
            { name: "Ingredients", type: PROFESSIONS.STORAGE },
            { name: "Head Chef", type: PROFESSIONS.SELLER },
            { name: "Chef's Bounty Board", type: PROFESSIONS.CHEF }
        ]
    },
    {
        name: "The Delectable Dab Restaurant",
        location: [1282.00,2335.98],
        actions: []
    },
    {
        name: "Brannof's Chamber",
        location: [1022.35,2265.82],
        actions: []
    },
    {
        name: "Brannof's Dining Room",
        location: [914.71,2171.05],
        actions: []
    },
    {
        name: "Brannof Hall's Hallway",
        location: [1019.57,2169.64],
        actions: []
    },
    {
        name: "The Hooked Hand",
        location: [1293.96,1867.88],
        actions: []
    },
    {
        name: "Thieves' Den",
        location: [1644.54,2022.27],
        actions: []
    },
    {
        name: "Captain Degreene's Office",
        location: [1303.40,2733.17],
        actions: []
    },
    {
        name: "Barracks",
        location: [1451.72,2745.46],
        actions: []
    },
    {
        name: "Infirmary",
        location: [1514.81,2617.63],
        actions: []
    },
    {
        name: "Training Ground",
        location: [1309.14,2575.84],
        actions: []
    },
    {
        name: "Wilhope Crossing",
        location: [1547.13,1904.17],
        actions: [
            { name: "Pufferfish", type: PROFESSIONS.FISHER }
        ]
    },
    {
        name: "Monob Row",
        location: [1712.66,2002.65],
        actions: []
    },
    {
        name: "Naybeth's House",
        location: [2023.82,2037.22],
        actions: []
    },
    {
        name: "Pipe Alley",
        location: [1841.52,2276.09],
        actions: []
    },
    //HOPE FOREST
    {
        name: "Two Headed Bear Clearing",
        location: [2317.02, 2846.08],
        actions: [
            { name: "Goat Horn", type: PROFESSIONS.FORAGER },
            { name: "Yew Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Yew Branches", type: PROFESSIONS.GATHERER }
        ]
    },
    {
        name: "Bear Behind",
        location: [2081.39, 2629.58],
        actions: [
            { name: "Bear", type: PROFESSIONS.SCOUT },
            { name: "Yew Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Yew Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Bear Clearing",
        location: [2278.75, 2629.58],
        actions: [
            { name: "Bear", type: PROFESSIONS.SCOUT },
            { name: "Goat Horn", type: PROFESSIONS.FORAGER },
            { name: "Yew Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Yew Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Road to Hopeport",
        location: [2325.80, 2130.35],
        actions: [
            { name: "Globeplant", type: PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Forest Clearing",
        location: [2539.16, 2137.21],
        actions: [
            { name: "Outlaw", type: PROFESSIONS.SCOUT },
            { name: "Globeplant", type: PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Forest Path",
        location: [2805.40, 2190.46],
        actions: [
            { name: "Outlaw", type: PROFESSIONS.SCOUT }
        ]
    },
    {
        name: "Goblin Camp",
        location: [2814.96, 2054.61],
        actions: [
            { name: "Goblin", type: PROFESSIONS.SCOUT },
            { name: "Obelisk", type: PROFESSIONS.OBELISK }
        ]
    },
    {
        name: "Mushroom Glade",
        location: [2396.49, 1904.42],
        actions: [
            { name: "Dandelion", type: PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Huntsman's Clearing",
        location: [2604.70, 1924.90],
        actions: [
            { name: "Wild Boar", type: PROFESSIONS.SCOUT },
            { name: "Dandelion", type: PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Timberwell Supplies",
        location: [2408.96, 1603.58],
        actions: [
            { name: "Basket" },
            { name: "Bottle" },
            { name: "Bucket" },
            { name: "Crate" },
            { name: "Jar" },
            { name: "Sack" },
            { name: "Hand Rake" },
            { name: "Sickle" },
            { name: "Tier 2 Sickle" },
            { name: "Tier 2 Hand Rake" },
            { name: "Tier 3 Hand Rake" },
            { name: "Tier 3 Sickle" },
        ]
    },
    {
        name: "Timberwell Road",
        location: [2658.77, 1654.70],
        actions: [
            { name: "Ash Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Ash Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Timberwell Side Road",
        location: [2380.10, 1470.84],
        actions: [
            { name: "Apple", type: PROFESSIONS.FORAGER },
            { name: "Ash Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Ash Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "The Color Wheel",
        location: [2178.74, 1468.99],
        actions: [
            { name: "Dyes", type: PROFESSIONS.SELLER }
        ]
    },
    {
        name: "Mr McGrish's Garden",
        location: [2237.28, 1279.37],
        actions: [
            { name: "Apple", type: PROFESSIONS.FORAGER },
            { name: "Ash Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Ash Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Gwen's Lumber",
        location: [2485.44, 1361.81],
        actions: [
            { name: "Coarse Ash Log" },
            { name: "Coarse Oak Log" },
            { name: "Coarse Pine Log" },
            { name: "Coarse Hickory Log" },
            { name: "Coarse Juniper Log" },
            { name: "Coarse Poplar Log" },
            { name: "Coarse Suave Log" },
            { name: "Coarse Yew Log" },
            { name: "Rugged Ash Log" },
            { name: "Rugged Oak Log" },
            { name: "Rugged Pine Log" },
            { name: "Rugged Hickory Log" },
            { name: "Rugged Juniper Log" },
            { name: "Rugged Poplar Log" },
            { name: "Rugged Suave Log" },
            { name: "Rugged Yew Log" },
            { name: "Average Ash Log" },
            { name: "Average Oak Log" },
            { name: "Average Pine Log" },
            { name: "Average Hickory Log" },
            { name: "Average Juniper Log" },
            { name: "Average Poplar Log" },
            { name: "Average Suave Log" },
            { name: "Average Yew Log" },
            { name: "Fine Ash Log" },
            { name: "Fine Oak Log" },
            { name: "Fine Pine Log" },
            { name: "Fine Hickory Log" },
            { name: "Fine Juniper Log" },
            { name: "Fine Poplar Log" },
            { name: "Fine Suave Log" },
            { name: "Fine Yew Log" },
            { name: "Sturdy Ash Log" },
            { name: "Sturdy Oak Log" },
            { name: "Sturdy Pine Log" },
            { name: "Sturdy Hickory Log" },
            { name: "Sturdy Juniper Log" },
            { name: "Sturdy Poplar Log" },
            { name: "Sturdy Suave Log" },
            { name: "Sturdy Yew Log" },
            { name: "Perfect Ash Log" },
            { name: "Perfect Oak Log" },
            { name: "Perfect Pine Log" },
            { name: "Perfect Hickory Log" },
            { name: "Perfect Juniper Log" },
            { name: "Perfect Poplar Log" },
            { name: "Perfect Suave Log" },
            { name: "Perfect Yew Log" },
        ]
    },
    {
        name: "Timberwell Green",
        location: [2646.21, 1322.24],
        actions: [
            { name: "Catkin", type: PROFESSIONS.FORAGER },
            { name: "Ash Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Ash Branches", type: PROFESSIONS.WOODCUTTER },
            { name: "Morauce\'s Pointy Implements", type: PROFESSIONS.SELLER },
            { name: "Timber", type: PROFESSIONS.STORAGE }
        ]
    },
    {
        name: "Morauce\'s Point Implements",
        location: [2646.21, 1322.24],
        actions: [
            { name: "Hand Saw" },
            { name: "Hatchet" },
            { name: "Two Person Saw" },
            { name: "Tree Loppers" }
        ]
    },
    {
        name: "Timber Merchant",
        location: [2626.42, 1043.57],
        actions: [
            { name: "Coarse Ash Plank" },
            { name: "Coarse Oak Pole" },
            { name: "Coarse Pine Pole" },
            { name: "Coarse Hickory Pole" },
            { name: "Coarse Juniper Stave" },
            { name: "Coarse Poplar Pole" },
            { name: "Coarse Suave Pole" },
            { name: "Coarse Yew Pole" },
            { name: "Rugged Ash Plank" },
            { name: "Rugged Oak Pole" },
            { name: "Rugged Pine Pole" },
            { name: "Rugged Hickory Pole" },
            { name: "Rugged Juniper Stave" },
            { name: "Rugged Poplar Pole" },
            { name: "Rugged Suave Log" },
            { name: "Rugged Yew Pole" },
            { name: "Average Ash Plank" },
            { name: "Average Oak Pole" },
            { name: "Average Pine Pole" },
            { name: "Average Hickory Pole" },
            { name: "Average Juniper Stave" },
            { name: "Average Poplar Pole" },
            { name: "Average Suave Log" },
            { name: "Average Yew Pole" },
            { name: "Fine Ash Plank" },
            { name: "Fine Oak Pole" },
            { name: "Fine Pine Pole" },
            { name: "Fine Hickory Pole" },
            { name: "Fine Juniper Stave" },
            { name: "Fine Poplar Pole" },
            { name: "Fine Suave Log" },
            { name: "Fine Yew Pole" },
            { name: "Sturdy Ash Plank" },
            { name: "Sturdy Oak Pole" },
            { name: "Sturdy Pine Pole" },
            { name: "Sturdy Hickory Pole" },
            { name: "Sturdy Juniper Stave" },
            { name: "Sturdy Poplar Pole" },
            { name: "Sturdy Suave Log" },
            { name: "Sturdy Yew Pole" },
            { name: "Perfect Ash Plank" },
            { name: "Perfect Oak Pole" },
            { name: "Perfect Pine Pole" },
            { name: "Perfect Hickory Pole" },
            { name: "Perfect Juniper Stave" },
            { name: "Perfect Poplar Pole" },
            { name: "Perfect Suave Log" },
            { name: "Perfect Yew Pole" }
        ]
    },
    {
        name: "Carpenter's Workshop",
        location: [2626.42, 1043.57],
        actions: [
            { name: "Lumber", type: PROFESSIONS.STORAGE },
            { name: "Sawmill", type: PROFESSIONS.CARPENTER },
            { name: "Furniture Assembly Station", type: PROFESSIONS.CARPENTER },
            { name: "Workbench", type: PROFESSIONS.CARPENTER },
            { name: "Timber Merchant", type: PROFESSIONS.SELLER }
        ]
    },
    {
        name: "Thin Trail",
        location: [2687.04, 2837.96],
        actions: [
            { name: "Leek", type: PROFESSIONS.FORAGER },
            { name: "Yew Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Yew Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Narrow Path",
        location: [2684.77, 2689.04],
        actions: [
            { name: "Leek", type: PROFESSIONS.GATHERER },
            { name: "Yew Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Yew Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Leafy Junction",
        location: [2490.49, 2587.74],
        actions: [
            { name: "Wildman", type: PROFESSIONS.SCOUT },
            { name: "Yew Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Yew Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Leafy Lane",
        location: [2485.12, 2391.76],
        actions: [
            { name: "Yew Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Yew Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Secluded Dead End",
        location: [2622.73, 2487.20],
        actions: [
            { name: "Satyr", type: PROFESSIONS.SCOUT },
            { name: "Hickory Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Hickory Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Secluded Path",
        location: [2758.13, 2456.13],
        actions: [
            { name: "Tangfruit", type: PROFESSIONS.FORAGER },
            { name: "Hickory Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Hickory Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Secluded Junction",
        location: [2915.71, 2452.80],
        actions: [
            { name: "Orchid", type: PROFESSIONS.FORAGER },
            { name: "Hickory Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Hickory Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Dryad Glade",
        location: [2702.64, 2339.60],
        actions: [
            { name: "Tangfruit", type: PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Luscious Glade",
        location: [2907.95, 2346.26],
        actions: [
            { name: "Orchid", type: PROFESSIONS.FORAGER },
            { name: "Hickory Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Hickory Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "North Central Path",
        location: [3036.68, 2371.78],
        actions: [
            { name: "Hickory Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Hickory Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Wooded Clifftop",
        location: [2903.39, 3258.93],
        actions: [
            { name: "Bramblelith", type: PROFESSIONS.SCOUT }
        ]
    },
    {
        name: "Rising Trail",
        location: [2912.41, 3119.57],
        actions: [
            { name: "Bramblelith", type: PROFESSIONS.SCOUT }
        ]
    },
    {
        name: "North Peat Bog",
        location: [3036.19, 3338.44],
        actions: [
            { name: "Dock Leaf", type: PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Peat Bog",
        location: [3036.19, 3235.97],
        actions: [
            { name: "Dock Leaf", type: PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Hopeforest North Portal Stone",
        location: [3194.40, 3104.00],
        actions: [
            { name: "Portal Stone", type: PROFESSIONS.PORTALSTONE }
        ]
    },
    {
        name: "Treeway Clearing",
        location: [2978.81, 2983.50],
        actions: [
            { name: "Oak Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Berry Glade",
        location: [3187.04, 2951.50],
        actions: [
            { name: "Haleberries", type: PROFESSIONS.FORAGER },
            { name: "Oak Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Tangled Path",
        location: [2849.92, 2596.53],
        actions: [
            { name: "Storage Rift", type: PROFESSIONS.STORAGERIFT },
        ]
    },
    {
        name: "Canopy Junction",
        location: [2947.90, 2833.41],
        actions: [
            { name: "Oak Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Treeway Junction",
        location: [3049.12, 2828.03],
        actions: [
            { name: "Spriggan", type: PROFESSIONS.SCOUT }
        ]
    },
    {
        name: "Canopy Lane",
        location: [2870.38, 2738.66],
        actions: [
            { name: "Beetroot", type: PROFESSIONS.FORAGER },
            { name: "Hazelnut", type: PROFESSIONS.FORAGER },
            { name: "Worms", type: PROFESSIONS.FORAGER },
            { name: "Oak Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Treeway Trail",
        location: [3219.01, 2836.80],
        actions: [
            { name: "Spriggan", type: PROFESSIONS.SCOUT },
            { name: "Haleberries", type: PROFESSIONS.FORAGER },
            { name: "Oak Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Twisted Road",
        location: [3466.72, 2799.17],
        actions: [
            { name: "Shade", type: PROFESSIONS.SCOUT },
            { name: "Suave Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Stump Clearing",
        location: [3024.38, 2640.08],
        actions: [
            { name: "Moss Monster", type: PROFESSIONS.SCOUT },
            { name: "Oak Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Cutters Clearing",
        location: [3244.92, 2724.74],
        actions: [
            { name: "Oak Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", type: PROFESSIONS.WOODCUTTER },
            { name: "Split Wood for Murphy", type: PROFESSIONS.WOODCUTTER },
            { name: "Bones", type: PROFESSIONS.STORAGE }
        ]
    },
    {
        name: "Shortcut",
        location: [3400.68, 2567.44],
        actions: [
            { name: "Brambles", type: PROFESSIONS.WOODCUTTER },
            { name: "Suave Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Stumped Path",
        location: [3233.04, 2566.44],
        actions: [
            { name: "Oak Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Twisted Junction",
        location: [3531.39, 2589.39],
        actions: [
            { name: "Shade", type: PROFESSIONS.SCOUT }
        ]
    },
    {
        name: "Wolves' Den",
        location: [3743.64, 2843.60],
        actions: [
            { name: "Wolf", type: PROFESSIONS.SCOUT },
            { name: "Femur Shard", type: PROFESSIONS.FORAGER },
            { name: "Suave Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Gnarled Path",
        location: [3671.84, 2718.26],
        actions: [
            { name: "Femur Shard", type: PROFESSIONS.FORAGER },
            { name: "Suave Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Overgrown Trail",
        location: [3698.61, 2578.32],
        actions: [
            { name: "Bone Spike", type: PROFESSIONS.FORAGER },
            { name: "Suave Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", type: PROFESSIONS.WOODCUTTER },
            { name: "Storage Rift", type: PROFESSIONS.STORAGERIFT }
        ]
    },
    {
        name: "Crystal Clearing",
        location: [3909.13, 2567.37],
        actions: [
            { name: "Bone Spike", type: PROFESSIONS.FORAGER },
            { name: "Suave Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Bramble Path",
        location: [3705.91, 2463.93],
        actions: [
            { name: "Brambles", type: PROFESSIONS.WOODCUTTER },
            { name: "Suave Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Mushroom Grove",
        location: [3703.48, 2355.63],
        actions: [
            { name: "Acorn", type: PROFESSIONS.FORAGER },
            { name: "Ancient Coin", type: PROFESSIONS.FORAGER },
            { name: "Sheep Rib", type: PROFESSIONS.FORAGER },
            { name: "Suave Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Logging Area",
        location: [3221.44, 2355.77],
        actions: [
            { name: "Thistle", type: PROFESSIONS.FORAGER },
            { name: "Poplar Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Poplar Branches", type: PROFESSIONS.WOODCUTTER },
            { name: "Split Wood for Claude", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Snakes Path",
        location: [3402.12, 2376.40],
        actions: [
            { name: "Viper", type: PROFESSIONS.SCOUT },
            { name: "Snake Scale", type: PROFESSIONS.FORAGER },
            { name: "Poplar Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Poplar Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Snakes Clearing",
        location: [3372.42, 2194.06],
        actions: [
            { name: "Viper", type: PROFESSIONS.SCOUT },
            { name: "Chestnut", type: PROFESSIONS.FORAGER },
            { name: "Snake Scale", type: PROFESSIONS.FORAGER },
            { name: "Poplar Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Poplar Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Central Junction",
        location: [3171.94, 2199.02],
        actions: [
            { name: "Chestnut", type: PROFESSIONS.FORAGER },
            { name: "Poplar Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Poplar Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Central Crossroads",
        location: [3011.05, 2198.19],
        actions: [
            { name: "Beetle", type: PROFESSIONS.FORAGER },
            { name: "Bug", type: PROFESSIONS.FORAGER },
            { name: "Lichen", type: PROFESSIONS.FORAGER },
            { name: "Poplar Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Poplar Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Ivy Path",
        location: [3015.60,2014.66],
        actions: []
    },
    {
        name: "Hopeforest Central Portal Stone",
        location: [3119.65, 2013.34],
        actions: [
            { name: "Portal Stone", type: PROFESSIONS.PORTALSTONE }
        ]
    },
    {
        name: "Cliffside Junction",
        location: [3327.17, 1953.30],
        actions: [
            { name: "Tree Cat", type: PROFESSIONS.SCOUT },
            { name: "Pine Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Cyclops Path",
        location: [3496.85, 1966.35],
        actions: [
            { name: "Rams Horn", type: PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Ivy Junction",
        location: [3007.40, 1838.44],
        actions: [
            { name: "Wendigo", type: PROFESSIONS.SCOUT },
            { name: "Pine Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Ivy Trail",
        location: [3179.69, 1846.27],
        actions: [
            { name: "Wendigo", type: PROFESSIONS.SCOUT },
            { name: "Pine Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Cliffside Shortcut",
        location: [3327.17, 1818.86],
        actions: [
            { name: "Brambles", type: PROFESSIONS.WOODCUTTER },
            { name: "Pine Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Quiet Grove",
        location: [3483.80, 1871.07],
        actions: [
            { name: "Rams Horn", type: PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Huntsman's Path",
        location: [2807.70, 1838.44],
        actions: [
            { name: "Storage Rift", type: PROFESSIONS.STORAGERIFT }
        ]
    },
    {
        name: "Lumber Clearing",
        location: [2857.43, 1660.44],
        actions: [
            { name: "Clover", type: PROFESSIONS.FORAGER },
            { name: "Pine Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", type: PROFESSIONS.WOODCUTTER },
            { name: "Split Wood for Hanna", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Fern Junction",
        location: [3024.20, 1708.08],
        actions: [
            { name: "Clover", type: PROFESSIONS.FORAGER },
            { name: "Pine Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Path of Good Intentions",
        location: [3207.99, 1701.28],
        actions: [
            { name: "Bitterfruit", type: PROFESSIONS.FORAGER },
            { name: "Pine Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Cliffside Path",
        location: [3274.93, 1576.48],
        actions: [
            { name: "Bitterfruit", type: PROFESSIONS.FORAGER },
            { name: "Pine Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Mine Road West",
        location: [2841.55, 1489.13],
        actions: [
            { name: "Catkin", type: PROFESSIONS.FORAGER },
            { name: "Aboreden Egg", type: PROFESSIONS.FORAGER },
            { name: "Shoot", type: PROFESSIONS.FORAGER },
            { name: "Stalks", type: PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Mine Road East",
        location: [3083.20, 1453.96],
        actions: [
            { name: "Giant Fly", type: PROFESSIONS.SCOUT },
            { name: "Pine Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Barricades",
        location: [3294.21, 1439.21],
        actions: [
            { name: "Pine Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Tree Lined Trail",
        location: [2857.61, 1305.41],
        actions: [
            { name: "Aboreden", type: PROFESSIONS.SCOUT },
            { name: "Juniper Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Tree Lined Track",
        location: [2843.58, 1059.75],
        actions: [
            { name: "Juniper Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Small Clearing",
        location: [3013.65, 1369.65],
        actions: [
            { name: "Juniper Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Acidic Avenue",
        location: [3021.09, 1202.20],
        actions: []
    },
    {
        name: "Pool of Rainbows",
        location: [3008.84, 985.89],
        actions: [
            { name: "Juniper Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", type: PROFESSIONS.WOODCUTTER },
            { name: "Storage Rift", type: PROFESSIONS.STORAGERIFT }
        ]
    },
    {
        name: "Hopeforest Ferry",
        location: [2790.13, 855.25],
        actions: [
            { name: "Juniper Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Ferry South Shore",
        location: [2808.79, 547.78],
        actions: [
            { name: "Sage", type: PROFESSIONS.FORAGER },
            { name: "Juniper Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Himatik Ruins",
        location: [2822.50, 376.37],
        actions: [
            { name: "Sage", type: PROFESSIONS.FORAGER },
            { name: "Juniper Log", type: PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", type: PROFESSIONS.WOODCUTTER }
        ]
    },
    // MINE OF MANTUBAN
    {
        name: 'Mine Back Entrance',
        location: [3469.16,1747.71],
        actions: [{ name: 'Minecrawler', type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Rugged Tunnel', 
        location: [3608.55,1735.71],
        actions: [{ name: 'Minecrawler', type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Mine Cart Cave',
        location: [3445.15,1593.54],
        actions: [{ name: 'Mine Cart Work', type: PROFESSIONS.MINER }]
    },
    {
        name: 'Northwest Mining Cavern',
        location: [3563.32,1579.69],
        actions: [{ name: 'Limestone', type: PROFESSIONS.MINER }]
    },
    {
        name: 'Jagged Junction',
        location: [3670.41,1645.24],
        actions: [{ name: 'Basalt', type: PROFESSIONS.MINER }]
    },
    {
        name: 'North Mining Cavern',
        location: [3800.57,1644.31],
        actions: [{ name: 'Basalt', type: PROFESSIONS.MINER }]
    },
    {
        name: 'Rat Infested Tunnel',
        location: [3677.79,1552.00],
        actions: []
    },
    {
        name: 'Cave of the Past',
        location: [3967.67,1681.24],
        actions: [{ name: 'Fossil Assembly', type: PROFESSIONS.BONEWRIGHT }]
    },
    {
        name: 'Mine Entrance',
        location: [3436.85,1446.76],
        actions: []
    },
    {
        name: 'Abandoned Mine Cavern',
        location: [3554.09,1445.83],
        actions: [{ name: 'Flint', type: PROFESSIONS.MINER }]
    },
    {
        name: 'Rat Infested Junction',
        location: [3687.95,1438.45],
        actions: [{ name: 'Flint', type: PROFESSIONS.MINER }, { name: 'Beastman', type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Goblin Loot Stash',
        location: [3832.89,1503.07],
        actions: []
    },
    {
        name: 'Goblin Sleeping Area 3',
        location: [3834.73,1420.91],
        actions: []
    },
    {
        name: 'Goblin Sleeping Area 2',
        location: [3935.36,1353.52],
        actions: [{ name: 'Goblin Miner', type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Communal Goblin Area',
        location: [3831.89,1296.12],
        actions: [{ name: 'Goblin Miner' }]
    },
    {
        name: 'Chuncrates Chamber',
        location: [4044.29,1348.90],
        actions: []
    },
    {
        name: 'Ratty Terminus',
        location: [3690.72,1331.36],
        actions: [{ name: 'Giant Rat', type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Mine Cart Tunnel',
        location: [3525.47,1316.59],
        actions: [{ name: 'Storage Rift', type: PROFESSIONS.STORAGERIFT }]
    },
    {
        name: 'Dilapidated Mining Cavern',
        location: [3419.34,1276.86],
        actions: [{ name: 'Iron Ore', type: PROFESSIONS.MINER }]
    },
    {
        name: 'Bridge Cavern',
        location: [3484.89,1156.84],
        actions: [{ name: 'Jangle\'s Bone Shop', type: PROFESSIONS.SELLER }, { name: 'Iron Ore', type: PROFESSIONS.MINER }, { name: 'Building Materials', type: PROFESSIONS.STORAGE }]
    },
    //TODO
    {
        name: 'Jangle\'s Bone Shop',
        location: [3484.89,1156.84],
        actions: []
    },
    {
        name: 'Bone Vats',
        location: [3233.00,1075.76],
        actions: [{ name: 'Timber', type: PROFESSIONS.STORAGE }, { name: 'Bonemeal Cement', type: PROFESSIONS.BONEWRIGHT }, { name: 'Knickknacks', type: PROFESSIONS.BONEWRIGHT }, { name: 'Bones', type: PROFESSIONS.STORAGE }]
    },
    {
        name: 'Leech Pools',
        location: [3356.42,1005.61],
        actions: [{ name: 'Gas Leeches', type: PROFESSIONS.STONEMASON }]
    },
    {
        name: 'Bat Cave',
        location: [3466.85,1006.26],
        actions: [{ name: 'Giant Bat', type: PROFESSIONS.MINEFIGHTER}]
    },
    {
        name: 'Boneworks',
        location: [3229.76,939.36],
        actions: [{ name: 'Bone Weapon Stations', type: PROFESSIONS.BONEWRIGHT }]
    },
    {
        name: 'Andesite Site',
        location: [3484.03,859.74],
        actions: [{ name: 'Andesite', type: PROFESSIONS.MINER }]
    },
    {
        name: 'Stalagmite Nook',
        location: [3359.32,807.78],
        actions: [{ name: 'Andesite', type: PROFESSIONS.MINER }]
    },
    {
        name: 'Purpladium Vein',
        location: [3503.86,752.55],
        actions: [{ name: 'Electric Snail', type: PROFESSIONS.MINEFIGHTER }, { name: 'Purpladium', type: PROFESSIONS.MINER }]
    },
    {
        name: 'Gassy Cave',
        location: [3629.23,844.14],
        actions: [{ name: 'Floor Tentacle', type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Gassy Grotto',
        location: [3771.48,785.03],
        actions: [{ name: 'Soapstone', type: PROFESSIONS.MINER }, { name: 'Gas Vents', type: PROFESSIONS.STONEMASON }]
    },
    {
        name: 'Big River Cavern',
        location: [3633.81,1149.79],
        actions: [{ name: 'Gold', type: PROFESSIONS.MINER  }, { name: 'Corrupted Miner', type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Riverside Goblin Cavern',
        location: [3819.59,1158.23],
        actions: [{ name: 'Alabaster', type: PROFESSIONS.MINER  }]
    },
    {
        name: 'Upstream Goblin Cavern',
        location: [3962.49,1154.33],
        actions: [{ name: 'Flantium Ore', type: PROFESSIONS.MINER }]
    },
    {
        name: 'River Bend',
        location: [4142.42,1184.21],
        actions: [{ name: 'Flantium Ore', type: PROFESSIONS.MINER }]
    },
    {
        name: 'Mine of Mantuban Obelisk',
        location: [4165.75,1013.19],
        actions: [{ name: 'Obelisk', type: PROFESSIONS.OBELISK }]
    },
    {
        name: 'Waterfall',
        location: [4183.28,1314.58],
        actions: []
    },
    {
        name: 'Kobold Cavern',
        location: [3906.23,1011.74],
        actions: [{ name: 'Kobold', type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Grachnid Cave',
        location: [4015.61,910.58],
        actions: []
    },
    {
        name: 'Rocky Passage',
        location: [3595.71,1004.35],
        actions: []
    },
    {
        name: 'Mossy Corner',
        location: [3658.51,1026.96],
        actions: []
    },
    {
        name: 'Tenebrous Tunnel',
        location: [3766.53,999.95],
        actions: [{ name: 'Cabranese Ore', type: PROFESSIONS.MINER }]
    },
    {
        name: 'Central Mining Cavern',
        location: [3760.88,913.91],
        actions: [{ name: 'Cabranese Ore', type: PROFESSIONS.MINER }]
    },
    {
        name: 'Moderate Mineshaft',
        location: [3670.40,650.71],
        actions: [{ name: 'Floor tentacle', type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Rugged Passage',
        location: [3775.08,613.33],
        actions: [{ name: 'Shinerium', type: PROFESSIONS.MINER }]
    },
    {
        name: 'Strange Junction',
        location: [3908.17,604.85],
        actions: [{ name: 'Fire Toad', type: PROFESSIONS.MINEFIGHTER  }]
    },
    {
        name: 'Outside Hollow',
        location: [4072.66,584.42],
        actions: [{ name: 'Fire Toad', type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Forsaken Mine Workings',
        location: [4023.32,415.44],
        actions: [{ name: 'Skeleton Miner', type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Wretched Excavation',
        location: [4140.46,425.40],
        actions: [{ name: 'Skeleton Miner', type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Lost and Found',
        location: [3917.98,497.88],
        actions: []
    },
    {
        name: 'Strange Stairway',
        location: [3930.94,374.76],
        actions: []
    },
    {
        name: 'Podium Cave',
        location: [3994.75,185.34],
        actions: []
    },
    {
        name: 'Goblin Well',
        location: [3622.39,479.44],
        actions: []
    },
    {
        name: 'Goblin Storage Cave',
        location: [3485.31,480.93],
        actions: []
    },
    {
        name: 'Mine Southwest Portal',
        location: [3350.22,483.92],
        actions: [{ name: 'Portal Stone',type: PROFESSIONS.PORTALSTONE }]
    },
    {
        name: 'Market Tunnel',
        location: [3471.85,380.05],
        actions: []
    },
    {
        name: 'Goblin Marketplace',
        location: [3323.55,248.69],
        actions: [{ name: 'Bobble\'s Oresome Ores',type: PROFESSIONS.SELLER }, { name: 'Pans and Pickaxes',type: PROFESSIONS.SELLER }, { name: 'Poffit\'s Interesting Rocks',type: PROFESSIONS.SELLER }, { name: 'Mogorob\'s Stoneware Assortment',type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Cave of the Future',
        location:  [3340.00,96.70],
        actions: [{ name: 'Divination',type: PROFESSIONS.BONEWRIGHT }]
    },
    {
        name: 'Stonemasonry Room',
        location: [3535.90,230.29],
        actions: [{ name: 'Timber',type: PROFESSIONS.STORAGE }, { name: 'Stone',type: PROFESSIONS.STORAGE }, { name: 'Stone Weapon Stations',type: PROFESSIONS.STONEMASON }]
    },
    {
        name: 'Polished Tunnel',
        location: [3581.17,378.38],
        actions: []
    },
    {
        name: 'Goblin Living Quarters',
        location: [3676.33,397.93],
        actions: []
    },
    {
        name: 'Sculpting Room',
        location: [3707.60,234.76],
        actions: [{ name: 'T.E.A. Machine',type: PROFESSIONS.STONEMASON }, { name: 'Stone Sculpting Cart',type: PROFESSIONS.STONEMASON }, { name: 'Stoneware Bench',type: PROFESSIONS.STONEMASON }]
    },
    {
        name: 'Goblin Workshop',
        location:  [3790.02,461.63],
        actions: [{ name: 'Timber',type: PROFESSIONS.STORAGE }, { name: 'Ore and Ingots',type: PROFESSIONS.STORAGE }, { name: 'Goblin Forge',type: PROFESSIONS.BLACKSMITH }, { name: 'Goblin Smelter',type: PROFESSIONS.BLACKSMITH }]
    },
    {
        name: 'Upper River Bend',
        location: [4195.26,1448.01],
        actions: [{ name: 'Granite',type: PROFESSIONS.MINER }]
    },
    {
        name: 'Rockling Cave',
        location: [4151.07,1583.11],
        actions: [{ name: 'Rockling',type: PROFESSIONS.MINEFIGHTER }, { name: 'Storage Rift', type:PROFESSIONS.STORAGERIFT }]
    },
    {
        name: 'Skallek\'s Dwelling',
        location: [4320.16,1575.46],
        actions: []
    },
    {
        name: 'Upper Bridge',
        location:  [4317.61,1454.81],
        actions: [{ name: 'Dread Shell',type: PROFESSIONS.MINEFIGHTER }, { name: 'Granite',type: PROFESSIONS.MINER }]
    },
    {
        name: 'Gnome Dwelling',
        location: [4311.66,1315.46],
        actions: [{ name: 'Torreli Jewelry Trading',type: PROFESSIONS.SELLER  }]
    },
    {
        name: 'Damp Tunnel',
        location: [4444.21,1499.84],
        actions: [{ name: 'Metalith',type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Crumbling Passage',
        location: [4470.10,1299.85],
        actions: [{ name: 'Stonewurm',type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Rubble Cave',
        location: [4474.37,1142.73],
        actions: [{ name: 'Adathril Ore',type: PROFESSIONS.MINER }]
    },
    {
        name: 'Bronze Gate',
        location: [4450.34,987.58],
        actions: [{ name: 'Adathril Ore',type: PROFESSIONS.MINER }, { name: 'Brimstone',type: PROFESSIONS.MINER }]
    },
    {
        name: 'Stonewurm Nests',
        location: [4603.12,1297.43],
        actions: [{ name: 'Stonewurm',type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Rock Strewn Tunnel',
        location: [4592.36,1484.64],
        actions: [{ name: 'Metalith',type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Cockroach Lair',
        location: [4710.71,1567.48],
        actions: [{ name: 'Cockroach',type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Mutant Cockroaches',
        location: [4715.01,1433.00],
        actions: [{ name: 'Cockroach',type: PROFESSIONS.MINEFIGHTER }]
    },
    {
        name: 'Cave of the Crystal',
        location: [4836.59,1441.60],
        actions: [{ name: 'Marble',type: PROFESSIONS.MINER }]
    },
    {
        name: 'Gnome Forge',
        location: [4866.71,1630.96],
        actions: [{ name: 'Timber',type: PROFESSIONS.STORAGE }, { name: 'Ore and Ingots',type: PROFESSIONS.STORAGE }, { name: 'Gnome Forge',type: PROFESSIONS.BLACKSMITH }, { name: 'Gnome Smelter',type: PROFESSIONS.BLACKSMITH }, { name: 'Jewelry Bench',type: PROFESSIONS.BLACKSMITH }]
    },
    {
        name: 'Gnomic Silver Mine',
        location: [5008.08,1621.28],
        actions: [{ name: 'Silver',type: PROFESSIONS.MINER }]
    },
    //CRENOPOLIS
    {
        name: "Unicorn Farm",
        location: [3928.89,2197.64],
        actions: [
            { name: "Cheese Shop", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Cyclops Store Cave",
        location: [4057.50,2130.85],
        actions: [
            { name: "Victor T Cyclops", type: PROFESSIONS.MERCHANT},
            { name: "???", type: PROFESSIONS.DETECTIVE}
        ]
    },
    {
        name: "Cyclops Sleeping Cave",
        location: [4064.08,2228.83],
        actions: []
    },
    {
        name: "Cyclops Living Area",
        location: [4155.45,2139.71],
        actions: []
    },
    {
        name: "Shrubby Canyon",
        location: [3785.47,2141.97],
        actions: [
            { name: "Gremlin", type: PROFESSIONS.WATCHPERSON}
        ]
    },
    {
        name: "Boulder Canyon",
        location: [3801.26,2024.66],
        actions: []
    },
    {
        name: "Cyclops Canyon",
        location: [3903.91,2022.41],
        actions: []
    },
    {
        name: "Stony Canyon",
        location: [4055.06,2019.02],
        actions: [
            { name: "Sabertooth Tiger", type: PROFESSIONS.WATCHPERSON}
        ]
    },
    {
        name: "Stony Gorge",
        location: [4240.05,2015.64],
        actions: [
            { name: "Sabertooth Tiger", type: PROFESSIONS.WATCHPERSON}
        ]
    },
    {
        name: "Stony Ravine",
        location: [4316.75,2118.28],
        actions: []
    },
    {
        name: "Cyclops East Pass",
        location: [4434.06,2120.54],
        actions: []
    },
    {
        name: "Rugged Canyon",
        location: [3685.08,1962.62],
        actions: []
    },
    {
        name: "Crenopolis Outskirts Portal Stone",
        location: [4470.15,2013.38],
        actions: [
            { name: "Portal Stone", type: PROFESSIONS.PORTALSTONE }
        ]
    },
    {
        name: "Road to Crenopolis",
        location: [4496.10,2229.95],
        actions: []
    },
    {
        name: "Fortunehold",
        location: [4596.45,2947.09],
        actions: []
    },
    {
        name: "Fortunehold Farm",
        location: [4571.59,2794.13],
        actions: [
            { name: "Fortunehold Farm", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Fortunehold Meadow",
        location: [4456.87,2597.20],
        actions: []
    },
    {
        name: "Rockbird Clearing",
        location: [4548.34,2387.30],
        actions: [
            { name: "Rockbird", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "West Gate",
        location: [4630.15,2218.15],
        actions: [
            { name: "Cinnamon Sticks", type: PROFESSIONS.MERCHANT },
            { name: "Grapes", type: PROFESSIONS.MERCHANT }
        ]
    },
    {
        name: "Sewer Pipes",
        location: [4875.56,3075.07],
        actions: [
            { name: "Sewer Fiend", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Southwest Sewer",
        location: [4866.64,2951.05],
        actions: [
            { name: "Sewer Fiend", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Dismal Drainage",
        location: [4987.98,2952.84],
        actions: [
            { name: "Mawchest", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Sewer Entrance",
        location: [5108.42,2954.62],
        actions: [
            { name: "Mawchest", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Sewer Pool",
        location: [5244.92,3101.83],
        actions: [
            { name: "Spectral Stalker", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Southeast Sewer",
        location: [5227.97,2971.57],
        actions: [
            { name: "Spectral Stalker", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Sewer Gate",
        location: [5110.20,2857.38],
        actions: []
    },
    {
        name: "Crenobelisk",
        location: [4984.41,2736.04],
        actions: [
            { name: "Obelisk", type: PROFESSIONS.OBELISK }
        ]
    },
    {
        name: "Sludge Street",
        location: [5110.20,2760.13],
        actions: []
    },
    {
        name: "Meggrit's Market",
        location: [4840.69,2634.45],
        actions: [
            { name: "Francesca's Fruit Stall", type: PROFESSIONS.MERCHANT },
            { name: "Snitch's Watches", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Murkwell Court",
        location: [4980.08,2601.85],
        actions: [
            { name: "Storage Rift", type: PROFESSIONS.STORAGERIFT }
        ]
    },
    {
        name: "Ratmen Den",
        location: [4836.24,2468.35],
        actions: [
            { name: "Ratman Chief", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Rat Alley",
        location: [4964.24,2452.14],
        actions: [
            { name: "Ratman Grunt", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Soap Shop",
        location: [5273.15,2669.74],
        actions: [
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.MERCHANT }
        ]
    },
    {
        name: "Dawkin Court",
        location:[5451.50,2621.10],
        actions: [
            { name: "Street Hag", type: PROFESSIONS.WATCHPERSON },
            { name: "Gangsters' Stakeout", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Dawkin Lane",
        location: [5289.37,2580.99],
        actions: [
            { name: "Street Hag", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Investigation Hall",
        location: [5336.30,2440.19],
        actions: [
            { name: "Investigations", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Guard's Archive",
        location: [5427.61,2440.19],
        actions: [
            { name: "Evidence Fling", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Bladrick's Armory",
        location: [4787.53,2326.55],
        actions: [
            { name: "Bladrick's Armory", type: PROFESSIONS.SELLER }
        ]
    },
    {
        name: "Hopton Corner",
        location: [4951.63,2334.85],
        actions: [
            { name: "Spice Stall", type: PROFESSIONS.MERCHANT },
            { name: "Spice Stall", type: PROFESSIONS.MERCHANT }
        ]
    },
    {
        name: "Forensics Lab",
        location: [5112.78,2320.63],
        actions: [
            { name: "Potions", type: PROFESSIONS.STORAGE },
            { name: "Forensics", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Guardhouse Lobby",
        location: [5325.14,2322.73],
        actions: [
            { name: "Detective Depot", type: PROFESSIONS.SELLER }
        ]
    },
    {
        name: "Interrogation Room",
        location: [5447.43,2319.55],
        actions: [
            { name: "Interrogation", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Lord's Road West",
        location: [4823.91,2212.34],
        actions: [
            { name: "Butchers Stall", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Lord's Road Central",
        location: [5071.25,2210.46],
        actions: [
            { name: "Vase Stall", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Lord's Road East",
        location: [5288.39,2199.92],
        actions: [
            { name: "Penny's Clockwork", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE },
            { name: "Wanted Posters", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Lord's Road New",
        location: [5449.20,2209.32],
        actions: [
            { name: "Leather Goods", type: PROFESSIONS.SELLER }
        ]
    },
    {
        name: "Cobble Corner",
        location: [4791.12,2046.27],
        actions: [
            { name: "Hermar's Homeware", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Greengrocers",
        location: [5026.32,2117.40],
        actions: [
            { name: "Greengrocers", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Cabbage Stall", type: PROFESSIONS.SELLER },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Dusty Nook",
        location: [4888.64,1899.41],
        actions: [
            { name: "Brute", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Dusty Alley",
        location: [4991.90,1901.71],
        actions: [
            { name: "Zombie", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Twiddle Corner",
        location: [4999.93,2019.88],
        actions: []
    },
    {
        name: "Four Winds Bar",
        location: [5209.89,1925.80],
        actions: [
            { name: "Muggers' Stakeout", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Snag Alley",
        location: [5295.94,2050.86],
        actions: [
            { name: "Street Brawler", type: PROFESSIONS.WATCHPERSON },
            { name: "Muggers' Stakeout", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Goose Inn Guest Room 1",
        location: [5465.75,2101.34],
        actions: []
    },
    {
        name: "Goose Inn Guest Room 2",
        location: [5451.98,1991.20],
        actions: []
    },
    {
        name: "Dusty Corner",
        location: [4986.14,1821.72],
        actions: [
            { name: "Zombie", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Morose Lane West",
        location: [5107.70,1818.95],
        actions: []
    },
    {
        name: "Morose Lane East",
        location: [5316.75,1829.08],
        actions: []
    },
    {
        name: "Lani's Curiosities",
        location: [5194.27,1741.60],
        actions: [
            { name: "Clock Stall", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT }
        ]
    },
    {
        name: "Thimble Lane",
        location: [5492.51,1826.75],
        actions: [
            { name: "Smugglers' Stakeout", type: PROFESSIONS.DETECTIVE },
            { name: "Storage Rift", type: PROFESSIONS.STORAGERIFT }
        ]
    },
    {
        name: "Geld Family Residence",
        location: [5429.89,1739.26],
        actions: [
            { name: "Smugglers' Den", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Geld Family Logistics",
        location: [5534.88,1729.13],
        actions: [
            { name: "Smugglers' Den", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "The Frog and Barnacle",
        location: [5318.74,1621.08],
        actions: []
    },
    {
        name: "Waterfront Market",
        location: [5475.71,1621.08],
        actions: [
            { name: "Jenneira's Wines", type: PROFESSIONS.MERCHANT },
            { name: "Textile Stall", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE },
            { name: "???", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Waterfront",
        location: [5682.09,1608.00],
        actions: [
            { name: "Hide Stall", type: PROFESSIONS.SELLER },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE },
            { name: "Building Materials", type: PROFESSIONS.STORAGE }
        ]
    },
    {
        name: "Tanners Road",
        location: [5882.66,1609.45],
        actions: [
            { name: "Toy Stall", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Tannery",
        location: [6086.14,1612.36],
        actions: [
            { name: "Tanning Stations", type: PROFESSIONS.LEATHERWORKER },
            { name: "Hides", type: PROFESSIONS.STORAGE }
        ]
    },
    {
        name: "Pier Two",
        location: [5583.21,1408.22],
        actions: [
            { name: "Bricks", type: PROFESSIONS.MERCHANT },
            { name: "Tiles", type: PROFESSIONS.MERCHANT }
        ]
    },
    {
        name: "Pier One",
        location: [5796.25,1400.29],
        actions: []
    },
    {
        name: "Quibble Lane",
        location: [6020.62,1473.94],
        actions: [
            { name: "Spiky Ball", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Smuggler's Cove",
        location: [6045.55,1325.50],
        actions: [
            { name: "Giant Slug", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Goose Inn Bar",
        location: [5552.68,2045.02],
        actions: []
    },
    {
        name: "Goose Inn Kitchen",
        location: [5594.26,1925.81],
        actions: [
            { name: "Chef", type: PROFESSIONS.MERCHANT }
        ]
    },
    {
        name: "Bobbin Road North",
        location: [5667.26,2044.09],
        actions: []
    },
    {
        name: "Leatherworks",
        location: [5766.14,2033.00],
        actions: [
            { name: "Knickknacks", type: PROFESSIONS.LEATHERWORKER },
            { name: "Upholstery", type: PROFESSIONS.LEATHERWORKER },
            { name: "Leathers", type: PROFESSIONS.STORAGE }
        ]
    },
    {
        name: "Ratmore Rise",
        location: [5868.71,1963.70],
        actions: [
            { name: "Trash Heap Monster", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "West Player Market",
        location: [5967.58,2179.01],
        actions: [
            { name: "Counterfeiters' Stakeout", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Oscen's Warehouse",
        location: [5974.05,2023.76],
        actions: [
            { name: "Burglars' Den", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "South Player Market",
        location:  [6098.80,2090.29],
        actions: [
            { name: "Burglars' Stakeout", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Market Chambers",
        location: [6094.18,1931.35 ],
        actions: [
            { name: "Burglars' Den", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Bobbin Road South",
        location: [5671.88,1831.56],
        actions: [
            { name: "Candice's Candles", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Ratmore Road",
        location: [5954.65,1781.66],
        actions: [
            { name: "Burglars' Stakeout", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "City Dyes",
        location: [6086.79,1790.90],
        actions: [
            { name: "Dyes", type: PROFESSIONS.SELLER }
        ]
    },
    {
        name: "Peacock Road South",
        location: [5653.10,2428.11],
        actions: [
            { name: "Pearl Stall", type: PROFESSIONS.SELLER },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Slant Street",
        location: [5811.44,2449.06],
        actions: [
            { name: "Counterfeiters' Stakeout", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Slant Street Cart House",
        location: [5839.38,2348.94],
        actions: [
            { name: "Counterfeiters' Den", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Dilapidated Warehouse",
        location: [5973.27,2461.87],
        actions: [
            { name: "Counterfeiters' Den", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Thadwick Square",
        location: [5626.32,2222.03],
        actions: [
            { name: "Hallick's Street Food", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Outer Market",
        location: [5800.96,2216.21],
        actions: [
            { name: "Leather Stall", type: PROFESSIONS.SELLER },
            { name: "Leather Offcuts", type: PROFESSIONS.MERCHANT },
            { name: "Souvenir Stall", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "North Player Market",
        location: [6109.49,2400.16],
        actions: []
    },
    {
        name: "Merchants' Guild",
        location: [6106.00,2242.99],
        actions: [
            { name: "Janessa's Delicacies", type: PROFESSIONS.MERCHANT },
            { name: "Guild Bounty Board", type: PROFESSIONS.MERCHANT }
        ]
    },
    {
        name: "East Player Market",
        location: [6242.21,2244.15],
        actions: []
    },
    {
        name: "Henderson's Meat Storehouse",
        location: [6356.31,2322.16],
        actions: [
            { name: "Henderson's Meat", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Bert's Gallery",
        location: [6367.95,2177.79],
        actions: [
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Council Office",
        location: [6239.89,2436.26],
        actions: [
            { name: "Change Name", type: PROFESSIONS.SELLER }
        ]
    },
    {
        name: "Crenopolis Market Portal Stone",
        location: [6253.36,2028.37],
        actions: [
            { name: "Portal Stone", type: PROFESSIONS.PORTALSTONE }
        ]
    },
    {
        name: "Peacock Road Central",
        location: [5652.61,2639.61],
        actions: [
            { name: "Tommy Shoes' Wines", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE },
            { name: "???", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Private Road",
        location: [5800.47,2723.43],
        actions: [
            { name: "Storage Rift", type: PROFESSIONS.STORAGERIFT }
        ]
    },
    {
        name: "Bogg's Antiques",
        location: [5816.77,2582.56],
        actions: [
            { name: "Bogg's Antiques", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT }
        ]
    },
    {
        name: "East Courtyard",
        location: [6109.00,2716.45],
        actions: []
    },
    {
        name: "Helfar's Wall",
        location: [5957.64,2701.31],
        actions: []
    },
    {
        name: "Peacock Road North",
        location: [5648.03,2935.24],
        actions: [
            { name: "Olives", type: PROFESSIONS.MERCHANT },
            { name: "Monocle Market", type: PROFESSIONS.MERCHANT },
            { name: "Stall Assistant", type: PROFESSIONS.MERCHANT },
            { name: "Olive Stall", type: PROFESSIONS.SELLER },
            { name: "Spotting Thieves", type: PROFESSIONS.DETECTIVE }
        ]
    },
    {
        name: "Hamila Jimore's Garden",
        location: [5771.44,2973.67],
        actions: [
            { name: "Giant Wasp", type: PROFESSIONS.WATCHPERSON }
        ]
    },
    {
        name: "Hamila Jimore's Hallway",
        location: [5770.28,2850.25],
        actions: []
    },
    {
        name: "Helfar's Gate",
        location: [5992.65,2857.24],
        actions: []
    },
    {
        name: "Fountain of Delight",
        location: [5656.49,3424.71],
        actions: []
    },
    {
        name: "Kaynat's Hall",
        location: [5657.81,3300.63],
        actions: []
    },
    {
        name: "Kaynat's Garden",
        location: [5659.13,3176.55],
        actions: []
    },
    {
        name: "Fillan's Storeroom",
        location: [5513.93,3152.13],
        actions: []
    },
    {
        name: "Fillan's Living Room",
        location: [5560.62,3054.17],
        actions: []
    },
    {
        name: "Fillan's Bedroom",
        location: [5448.88,3050.37],
        actions: []
    },
    {
        name: "Vestere Drive",
        location: [5806.44,3076.14],
        actions: [
            { name: "Giant Wasp", type: PROFESSIONS.WATCHPERSON }
        ]
    }
    // More rooms as needed
];
