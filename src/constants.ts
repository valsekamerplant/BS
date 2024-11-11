export const LAYERNAMES = ['base layer', 'areas', 'rooms']


export const PROFESSIONS = {
    GUARD:"Guard",
	CHEF:"Chef"	,
	FISHER:"Fisher",
	FORAGER:"Forager",	
	ALCHEMIST:"Alchemist",
    WOODCUTTER: "Woodcutter",
	SCOUT :"Scout",
	GATHERER:"Gatherer",
	CARPENTER:"Carpenter",
	MINER:"Miner",
	MINEFIGHTER:"Minefighter",
    BONEWRIGHT:"Bonewright",
    STONEMASON:"Stonemason",
    BLACKSMITH:"Blacksmith",
    MERCHANT:"Merchant",
	DETECTIVE:"Detective",
	LEATHERWORKER:"Leatherworker",
	WATCHPERSON:"Watchperson",
    SELLER: "Seller",
    STORAGE: "Storage",
    STORAGERIFT: "Storage Rift",
    OBELISK: "Obelisk",
    PORTALSTONE: "Portal Stone"
};

export const legendItems = [PROFESSIONS.STORAGE,PROFESSIONS.OBELISK,PROFESSIONS.PORTALSTONE, PROFESSIONS.STORAGERIFT] 


export const iconScale = 32 / 64;

export const iconSpriteInfo: { [key: string]: { x: number; y: number; width: number; height: number } } = {
	[PROFESSIONS.STORAGE]: { x: 330, y: 0, width: 66, height: 66 },
	[PROFESSIONS.OBELISK]: { x: 66 , y: 0, width: 66, height: 66 },
	[PROFESSIONS.PORTALSTONE]: { x: 128, y: 0, width: 73, height: 66 },
	[PROFESSIONS.STORAGERIFT]: { x: 264, y: 0, width: 66, height: 66 },
  };

  export const wikiUrl = "https://brightershoreswiki.org/"; 