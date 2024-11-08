import { PROFESSIONS } from "./constants";

export const rooms = [
    //HOPEPORT
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
            { name: "Globeplant", "type": PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Forest Clearing",
        location: [2539.16, 2137.21],
        actions: [
            { name: "Outlaw", "type": PROFESSIONS.SCOUT },
            { name: "Globeplant", "type": PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Forest Path",
        location: [2805.40, 2190.46],
        actions: [
            { name: "Outlaw", "type": PROFESSIONS.SCOUT }
        ]
    },
    {
        name: "Goblin Camp",
        location: [2814.96, 2054.61],
        actions: [
            { name: "Goblin", "type": PROFESSIONS.SCOUT },
            { name: "Obelisk", "type": PROFESSIONS.OBELISK }
        ]
    },
    {
        name: "Mushroom Glade",
        location: [2396.49, 1904.42],
        actions: [
            { name: "Dandelion", "type": PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Huntsman's Clearing",
        location: [2604.70, 1924.90],
        actions: [
            { name: "Wild Boar", "type": PROFESSIONS.SCOUT },
            { name: "Dandelion", "type": PROFESSIONS.FORAGER }
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
            { name: "Ash Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Ash Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Timberwell Side Road",
        location: [2380.10, 1470.84],
        actions: [
            { name: "Apple", "type": PROFESSIONS.FORAGER },
            { name: "Ash Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Ash Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "The Color Wheel",
        location: [2178.74, 1468.99],
        actions: [
            { name: "Dyes", "type": PROFESSIONS.SELLER }
        ]
    },
    {
        name: "Mr McGrish's Garden",
        location: [2237.28, 1279.37],
        actions: [
            { name: "Apple", "type": PROFESSIONS.FORAGER },
            { name: "Ash Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Ash Branches", "type": PROFESSIONS.WOODCUTTER }
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
            { name: "Catkin", "type": PROFESSIONS.FORAGER },
            { name: "Ash Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Ash Branches", "type": PROFESSIONS.WOODCUTTER },
            { name: "Morauce\'s Pointy Implements", "type": PROFESSIONS.SELLER },
            { name: "Timber", "type": PROFESSIONS.STORAGE }
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
            { name: "Lumber", "type": PROFESSIONS.STORAGE },
            { name: "Sawmill", "type": PROFESSIONS.CARPENTER },
            { name: "Furniture Assembly Station", "type": PROFESSIONS.CARPENTER },
            { name: "Workbench", "type": PROFESSIONS.CARPENTER },
            { name: "Timber Merchant", "type": PROFESSIONS.SELLER }
        ]
    },
    {
        name: "Thin Trail",
        location: [2687.04, 2837.96],
        actions: [
            { name: "Leek", "type": PROFESSIONS.FORAGER },
            { name: "Yew Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Yew Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Narrow Path",
        location: [2684.77, 2689.04],
        actions: [
            { name: "Leek", "type": PROFESSIONS.GATHERER },
            { name: "Yew Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Yew Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Leafy Junction",
        location: [2490.49, 2587.74],
        actions: [
            { name: "Wildman", "type": PROFESSIONS.SCOUT },
            { name: "Yew Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Yew Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Leafy Lane",
        location: [2485.12,2391.76],
        actions: [
            { name: "Yew Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Yew Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Secluded Dead End",
        location: [2622.73,2487.20],
        actions: [
            { name: "Satyr", "type": PROFESSIONS.SCOUT },
            { name: "Hickory Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Hickory Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Secluded Path",
        location: [2758.13,2456.13],
        actions: [
            { name: "Tangfruit", "type": PROFESSIONS.FORAGER },
            { name: "Hickory Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Hickory Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Secluded Junction",
        location: [2915.71,2452.80],
        actions: [
            { name: "Orchid", "type": PROFESSIONS.FORAGER },
            { name: "Hickory Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Hickory Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Dryad Glade",
        location: [2702.64,2339.60],
        actions: [
            { name: "Tangfruit", "type": PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Luscious Glade",
        location: [2907.95,2346.26],
        actions: [
            { name: "Orchid", "type": PROFESSIONS.FORAGER },
            { name: "Hickory Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Hickory Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "North Central Path",
        location: [3036.68,2371.78],
        actions: [
            { name: "Hickory Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Hickory Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Wooded Clifftop",
        location: [2903.39,3258.93],
        actions: [
            { name: "Bramblelith", "type": PROFESSIONS.SCOUT }
        ]
    },
    {
        name: "Rising Trail",
        location: [2912.41,3119.57],
        actions: [
            { name: "Bramblelith", "type": PROFESSIONS.SCOUT }
        ]
    },
    {
        name: "North Peat Bog",
        location: [3036.19,3338.44],
        actions: [
            { name: "Dock Leaf", "type": PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Peat Bog",
        location: [3036.19,3235.97],
        actions: [
            { name: "Dock Leaf", "type": PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Hopeforest North Portal Stone",
        location: [3194.40,3104.00],
        actions: [
            { name: "Portal Stone", "type": PROFESSIONS.PORTALSTONE }
        ]
    },
    {
        name: "Treeway Clearing",
        location: [2978.81,2983.50],
        actions: [
            { name: "Oak Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Berry Glade",
        location: [3187.04,2951.50],
        actions: [
            { name: "Haleberries", "type": PROFESSIONS.FORAGER },
            { name: "Oak Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Tangled Path",
        location: [2849.92,2596.53],
        actions: [
            { name: "Storage Rift", "type": PROFESSIONS.STORAGE },
        ]
    },
    {
        name: "Canopy Junction",
        location: [2947.90,2833.41],
        actions: [
            { name: "Oak Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Treeway Junction",
        location: [3049.12,2828.03],
        actions: [
            { name: "Spriggan", "type": PROFESSIONS.SCOUT }
        ]
    },
    {
        name: "Canopy Lane",
        location: [2870.38,2738.66],
        actions: [
            { name: "Beetroot", "type": PROFESSIONS.FORAGER },
            { name: "Hazelnut", "type": PROFESSIONS.FORAGER },
            { name: "Worms", "type": PROFESSIONS.FORAGER },
            { name: "Oak Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Treeway Trail",
        location: [3219.01,2836.80],
        actions: [
            { name: "Spriggan", "type": PROFESSIONS.SCOUT },
            { name: "Haleberries", "type": PROFESSIONS.FORAGER },
            { name: "Oak Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Twisted Road",
        location: [3466.72,2799.17],
        actions: [
            { name: "Shade", "type": PROFESSIONS.SCOUT },
            { name: "Suave Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Stump Clearing",
        location: [3024.38,2640.08],
        actions: [
            { name: "Moss Monster", "type": PROFESSIONS.SCOUT },
            { name: "Oak Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Cutters Clearing",
        location: [3244.92,2724.74],
        actions: [
            { name: "Oak Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", "type": PROFESSIONS.WOODCUTTER },
            { name: "Split Wood for Murphy", "type": PROFESSIONS.WOODCUTTER },
            { name: "Bones", "type": PROFESSIONS.STORAGE }
        ]
    },
    {
        name: "Shortcut",
        location: [3400.68,2567.44],
        actions: [
            { name: "Brambles", "type": PROFESSIONS.WOODCUTTER },
            { name: "Suave Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Stumped Path",
        location: [3233.04,2566.44],
        actions: [
            { name: "Oak Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Oak Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Twisted Junction",
        location: [3531.39,2589.39],
        actions: [
            { name: "Shade", "type": PROFESSIONS.SCOUT }
        ]
    },
    {
        name: "Wolves' Den",
        location: [3743.64,2843.60],
        actions: [
            { name: "Wolf", "type": PROFESSIONS.SCOUT },
            { name: "Femur Shard", "type": PROFESSIONS.FORAGER },
            { name: "Suave Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Gnarled Path",
        location: [3671.84,2718.26],
        actions: [
            { name: "Femur Shard", "type": PROFESSIONS.FORAGER },
            { name: "Suave Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Overgrown Trail",
        location: [3698.61,2578.32],
        actions: [
            { name: "Bone Spike", "type": PROFESSIONS.FORAGER },
            { name: "Suave Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", "type": PROFESSIONS.WOODCUTTER },
            { name: "Storage Rift", "type": PROFESSIONS.STORAGE }
        ]
    },
    {
        name: "Crystal Clearing",
        location: [3909.13,2567.37],
        actions: [
            { name: "Bone Spike", "type": PROFESSIONS.FORAGER },
            { name: "Suave Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Bramble Path",
        location: [3705.91,2463.93],
        actions: [
            { name: "Brambles", "type": PROFESSIONS.WOODCUTTER },
            { name: "Suave Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Mushroom Grove",
        location: [3703.48,2355.63],
        actions: [
            { name: "Acorn", "type": PROFESSIONS.FORAGER },
            { name: "Ancient Coin", "type": PROFESSIONS.FORAGER },
            { name: "Sheep Rib", "type": PROFESSIONS.FORAGER },
            { name: "Suave Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Suave Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Logging Area",
        location: [3221.44,2355.77],
        actions: [
            { name: "Thistle", "type": PROFESSIONS.FORAGER },
            { name: "Poplar Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Poplar Branches", "type": PROFESSIONS.WOODCUTTER },
            { name: "Split Wood for Claude", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Snakes Path",
        location: [3402.12,2376.40],
        actions: [
            { name: "Viper", "type": PROFESSIONS.SCOUT },
            { name: "Snake Scale", "type": PROFESSIONS.FORAGER },
            { name: "Poplar Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Poplar Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Snakes Clearing",
        location:  [3372.42,2194.06],
        actions: [
            { name: "Viper", "type": PROFESSIONS.SCOUT },
            { name: "Chestnut", "type": PROFESSIONS.FORAGER },
            { name: "Snake Scale", "type": PROFESSIONS.FORAGER },
            { name: "Poplar Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Poplar Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Central Junction",
        location: [3171.94,2199.02],
        actions: [
            { name: "Chestnut", "type": PROFESSIONS.FORAGER },
            { name: "Poplar Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Poplar Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Central Crossroads",
        location: [3011.05,2198.19],
        actions: [
            { name: "Beetle", "type": PROFESSIONS.FORAGER },
            { name: "Bug", "type": PROFESSIONS.FORAGER },
            { name: "Lichen", "type": PROFESSIONS.FORAGER },
            { name: "Poplar Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Poplar Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Ivy Path",
        location: [ /* coordinates would go here if specified */ ],
        actions: []
    },
    {
        name: "Hopeforest Central Portal Stone",
        location: [3119.65,2013.34],
        actions: [
            { name: "Portal Stone", "type": PROFESSIONS.PORTALSTONE }
        ]
    },
    {
        name: "Cliffside Junction",
        location: [3327.17,1953.30],
        actions: [
            { name: "Tree Cat", "type": PROFESSIONS.SCOUT },
            { name: "Pine Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Cyclops Path",
        location: [3496.85,1966.35],
        actions: [
            { name: "Rams Horn", "type": PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Ivy Junction",
        location: [3007.40,1838.44],
        actions: [
            { name: "Wendigo", "type": PROFESSIONS.SCOUT },
            { name: "Pine Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Ivy Trail",
        location: [3179.69,1846.27],
        actions: [
            { name: "Wendigo", "type": PROFESSIONS.SCOUT },
            { name: "Pine Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Cliffside Shortcut",
        location: [3327.17,1818.86],
        actions: [
            { name: "Brambles", "type": PROFESSIONS.WOODCUTTER },
            { name: "Pine Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Quiet Grove",
        location: [3483.80,1871.07],
        actions: [
            { name: "Rams Horn", "type": PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Huntsman's Path",
        location: [2807.70,1838.44],
        actions: [
            { name: "Storage Rift", "type": PROFESSIONS.STORAGE }
        ]
    },
    {
        name: "Lumber Clearing",
        location: [2857.43,1660.44],
        actions: [
            { name: "Clover", "type": PROFESSIONS.FORAGER },
            { name: "Pine Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", "type": PROFESSIONS.WOODCUTTER },
            { name: "Split Wood for Hanna", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Fern Junction",
        location: [3024.20,1708.08],
        actions: [
            { name: "Clover", "type": PROFESSIONS.FORAGER },
            { name: "Pine Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Path of Good Intentions",
        location: [3207.99,1701.28],
        actions: [
            { name: "Bitterfruit", "type": PROFESSIONS.FORAGER },
            { name: "Pine Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Cliffside Path",
        location: [3274.93,1576.48],
        actions: [
            { name: "Bitterfruit", "type": PROFESSIONS.FORAGER },
            { name: "Pine Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Mine Road West",
        location: [2841.55,1489.13],
        actions: [
            { name: "Catkin", "type": PROFESSIONS.FORAGER },
            { name: "Aboreden Egg", "type": PROFESSIONS.FORAGER },
            { name: "Shoot", "type": PROFESSIONS.FORAGER },
            { name: "Stalks", "type": PROFESSIONS.FORAGER }
        ]
    },
    {
        name: "Mine Road East",
        location: [3083.20,1453.96],
        actions: [
            { name: "Giant Fly", "type": PROFESSIONS.SCOUT },
            { name: "Pine Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Barricades",
        location: [3294.21,1439.21],
        actions: [
            { name: "Pine Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Pine Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Tree Lined Trail",
        location: [2857.61,1305.41],
        actions: [
            { name: "Aboreden", "type": PROFESSIONS.SCOUT },
            { name: "Juniper Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Tree Lined Track",
        location:[2843.58,1059.75],
        actions: [
            { name: "Juniper Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Small Clearing",
        location: [3013.65,1369.65],
        actions: [
            { name: "Juniper Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Acidic Avenue",
        location: [3021.09,1202.20],
        actions: []
    },
    {
        name: "Pool of Rainbows",
        location: [3008.84,985.89],
        actions: [
            { name: "Juniper Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", "type": PROFESSIONS.WOODCUTTER },
            { name: "Storage Rift", "type": PROFESSIONS.STORAGE }
        ]
    },
    {
        name: "Hopeforest Ferry",
        location: [2790.13,855.25],
        actions: [
            { name: "Juniper Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Ferry South Shore",
        location: [2808.79,547.78],
        actions: [
            { name: "Sage", "type": PROFESSIONS.FORAGER },
            { name: "Juniper Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    },
    {
        name: "Himatik Ruins",
        location: [2822.50,376.37],
        actions: [
            { name: "Sage", "type": PROFESSIONS.FORAGER },
            { name: "Juniper Log", "type": PROFESSIONS.WOODCUTTER },
            { name: "Juniper Branches", "type": PROFESSIONS.WOODCUTTER }
        ]
    }
    // More rooms as needed
];
