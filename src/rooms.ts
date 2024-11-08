import { PROFESSIONS } from "./constants";

export const rooms = [
    {
        name: 'Rocky Road',
        location: [439.96, 2797.61],
        actions: [{ name: 'Punkupine', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'Collapsed Hovels',
        location: [337.90, 2614.39],
        actions: [{ name: 'Ghoul', type: PROFESSIONS.GUARD }, { name: 'Feather', type: PROFESSIONS.GATHERER }, { name: 'Maggots (any)', type: PROFESSIONS.GATHERER }, { name: 'Moth Wing', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Wasteland',
        location: [444.87, 2443.96],
        actions: [{ name: 'Ghoul', type: PROFESSIONS.GUARD }, { name: 'Monument Piece', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Overgrow Road',
        location: [641.29, 2340.57],
        actions: [{ name: 'Hairbeast', type: PROFESSIONS.GUARD }, { name: 'Nettle', type: PROFESSIONS.GATHERER }, { name: 'WaterLily', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Crater',
        location: [463.30, 2152.11],
        actions: [{ name: 'Giant Ant', type: PROFESSIONS.GUARD }, { name: 'Hogberries', type: PROFESSIONS.GATHERER }, { name: 'Monument Piece', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Pirate Hideout',
        location: [221.18, 2137.71],
        actions: [{ name: 'Pirate', type: PROFESSIONS.GUARD }, { name: 'Gurnard (any)', type: PROFESSIONS.FISHER }, { name: 'Limpet', type: PROFESSIONS.GATHERER }, { name: 'Wrack', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Ray Bay',
        location: [259.31, 1926.46],
        actions: [{ name: 'Limpet', type: PROFESSIONS.GATHERER }, { name: 'Ray (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Starfish Point',
        location: [248.99, 1716.22],
        actions: [, { name: 'Wrack', type: PROFESSIONS.GATHERER }, { name: 'Starfish', type: PROFESSIONS.GATHERER }, { name: 'Cod (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Jellyfish Landing',
        location: [450.98, 1730.24],
        actions: [{ name: 'Jellyfish', type: PROFESSIONS.GUARD }, { name: 'Kelp', type: PROFESSIONS.GATHERER }, { name: 'Starfish', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Fallen Monument',
        location: [423.65, 1917.71],
        actions: [{ name: 'Carnivorous Plant', type: PROFESSIONS.GUARD }, { name: 'Hogberries', type: PROFESSIONS.GATHERER }, { name: 'Potato', type: PROFESSIONS.GATHERER }, { name: 'Monument Piece', type: PROFESSIONS.GATHERER }, { name: 'Fallen Monument', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Rubble Road',
        location: [671.53, 2115.84],
        actions: [{ name: 'Hairbeast', type: PROFESSIONS.GUARD }, { name: 'Bellplant', type: PROFESSIONS.GATHERER }, { name: 'Water lilly', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Overgrown Pond',
        location: [854.15, 2055.69],
        actions: [{ name: 'Bugman', type: PROFESSIONS.GUARD }, { name: 'Nettle', type: PROFESSIONS.GATHERER }, { name: 'Pond Weed', type: PROFESSIONS.GATHERER }]
    },

    {
        name: 'Overgrown Field',
        location: [664.28, 1928.15],
        actions: [{ name: 'Carnivorous Plant', type: PROFESSIONS.GUARD }, { name: 'Bellplant', type: PROFESSIONS.GATHERER }, { name: 'Potato', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Seashells Seashore',
        location: [680.23, 1686.84],
        actions: [{ name: 'Bass (any)', type: PROFESSIONS.FISHER }, { name: 'Shell', type: PROFESSIONS.GATHERER }, { name: 'Anemone', type: PROFESSIONS.GATHERER }, { name: 'Sea Potato', type: PROFESSIONS.GATHERER }, { name: 'Sea Slug (any)', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'East Beach',
        location: [872.99, 1664.86],
        actions: [{ name: 'Crab', type: PROFESSIONS.GUARD }, { name: 'Flounder (any)', type: PROFESSIONS.FISHER }, { name: 'Kelp', type: PROFESSIONS.GATHERER }, { name: 'Shell', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Sea Road',
        location: [916.04, 1812.92],
        actions: [{ name: 'The seaside Rock Shop', type: PROFESSIONS.SELLER }, { name: 'Storage Rift', type: PROFESSIONS.STORAGE }]
    },
    {
        name: 'Scrapyard',
        location: [1067.36, 1959.68],
        actions: [{ name: 'Scrap Merchant', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'West Waterfront',
        location: [1152.81, 1735.30],
        actions: [{ name: 'Lobster (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Little Lucy',
        location: [1182.10, 1560.23],
        actions: [{ name: 'Wraddock (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Central Waterfront',
        location: [1383.40, 1733.76],
        actions: [{ name: 'Bream (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Boardwalk',
        location: [1613.64, 1744.44],
        actions: [{ name: 'Herring (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'East Waterfront',
        location: [1851.72, 1743.14],
        actions: [{ name: 'Oyster (any)', type: PROFESSIONS.FISHER }, { name: 'Scrap Metal', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Vacant Pier',
        location: [1797.58, 1568.98],
        actions: [{ name: 'Dab (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Vincible',
        location: [1967.83, 1524.63],
        actions: [{ name: 'Sturlet (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Eel Street',
        location: [1443.22, 1910.14],
        actions: [{ name: 'The frequently fresh fish stall', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Eel street Bridge',
        location: [1441.02, 2078.17],
        actions: [{ name: 'Eel (any)', type: PROFESSIONS.FISHER }]
    },
    {
        name: 'Hopeport Obelisk',
        location: [1252.60, 2082.58],
        actions: [{ name: 'Obelist', type: PROFESSIONS.OBELISK }]
    },
    {
        name: 'Brannof Boulevard',
        location: [1232.93, 2233.79],
        actions: [{ name: 'Periwinkle', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Town Square',
        location: [1441.92, 2228.41],
        actions: [{ name: 'Potion Reagents', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Stone Street',
        location: [1465.91, 2441.73],
        actions: [{ name: 'Kevin\'s Ingredients', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Apothecary',
        location: [1623.94, 2408.87],
        actions: [{ name: 'Potion Stations', type: PROFESSIONS.ALCHEMIST }, { name: 'Passive Potion Stations', type: PROFESSIONS.ALCHEMIST }, { name: 'Work for Ebsworth', type: PROFESSIONS.ALCHEMIST }, { name: 'Potion Reagents', type: PROFESSIONS.STORAGE }, { name: 'Potions', type: PROFESSIONS.STORAGE }, { name: 'The Apothecary Shop', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Melv\s Fishing Supplies',
        location: [1589.19, 2280.69],
        actions: [{ name: 'Fishing Bait', type: PROFESSIONS.STORAGE }, { name: 'Fishing Supplies', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Hairdresser',
        location: [1712.80, 2281.21],
        actions: [{ name: 'Hairdresser', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Old Street West',
        location: [1645.52, 2192.03],
        actions: [{ name: 'Wallplant', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Wilhope Passage',
        location: [1582.93, 1960.98],
        actions: [{ name: 'Street Louse', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'Tim\'s Alley',
        location: [1834.32, 2078.33],
        actions: [{ name: 'Thief', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'Limpet Lane',
        location: [1835.36, 1861.36],
        actions: [{ name: 'Thief', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'Little Square',
        location: [1831.19, 1966.71],
        actions: [{ name: 'Louse', type: PROFESSIONS.GATHERER }, { name: 'Shimmerbean', type: PROFESSIONS.GATHERER }, { name: 'Spinseed', type: PROFESSIONS.GATHERER }, { name: 'Sprey', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Nook Alley',
        location: [1919.34, 1873.88],
        actions: [{ name: 'Scrap Metal', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'Murk Close',
        location: [2006.96, 1968.28],
        actions: [{ name: 'Thug', type: PROFESSIONS.GUARD }, { name: 'Storage Rift', type: PROFESSIONS.STORAGE }]
    },
    {
        name: 'Hopeport Portal Stone',
        location: [1201.50, 2827.37],
        actions: [{ name: 'Portal Stone', type: PROFESSIONS.PORTALSTONE }]
    },
    {
        name: 'Sparring Area',
        location: [1122.85, 2628.53],
        actions: [{ name: 'Sparring Guard', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'Quartermaster',
        location: [1568.77, 2573.77],
        actions: [{ name: 'Quartermaster', type: PROFESSIONS.STORAGE }, { name: 'Quartermaster Shop', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Old Street East',
        location: [1878.13, 2200.17],
        actions: [{ name: 'Deathcrow', type: PROFESSIONS.GUARD }, { name: 'Wallplant', type: PROFESSIONS.GATHERER }]
    },
    {
        name: 'The Cloakroom',
        location: [1805.11, 2286.88],
        actions: [{ name: 'Capes', type: PROFESSIONS.STORAGE }, { name: 'Cape Shop', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'The Forager\'s Warehouse',
        location: [1956.36, 2304.48],
        actions: [{ name: 'The Forager\'s Warehouse', type: PROFESSIONS.SELLER }]
    },

    {
        name: 'Enchantress Shop',
        location: [1897.03, 2087.39],
        actions: [{ name: 'Enchantress', type: PROFESSIONS.SELLER }]
    },
    {
        name: 'Town Gates',
        location: [2119.34, 2193.00],
        actions: [{ name: 'Deathcrow', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'South Walls',
        location: [2175.41, 2037.41],
        actions: [{ name: 'Goblin Chief', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'North Walls',
        location: [2176.71, 2368.86],
        actions: [{ name: 'Goblin Soldier', type: PROFESSIONS.GUARD }]
    },
    {
        name: 'Kevin\'s Ingredients ',
        location: [1442.33, 2481.69],
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
        location: [1613.31, 2416.14],
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
        location: [1592.54, 2281.33],
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
        location: [1412.73, 1938.52],
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
        location: [1953.54, 2292.21],
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
        location: [1488.91, 2184.51],
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
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    }, {
        name: '',
        location: [],
        actions: []
    },

    // More rooms as needed
];
