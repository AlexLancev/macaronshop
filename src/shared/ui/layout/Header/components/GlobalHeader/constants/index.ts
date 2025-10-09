export const menuSaleData = [
	{
		keyMenu: "sweetDays",
	},
	{
		keyMenu: "giftSets",
		submenu: [
			"teachesDay",
			"allSets",
			"birthDay",
			"classicMacarons",
			"weddingProposals",
			"candyBars",
			"corporateGifts",
		],
	},
	{
		keyMenu: "assembleSet",
	},
] as const;

export const menuServiceData = [
	{
		keyMenu: "freshness",
	},
	{
		keyMenu: "delivery",
	},
	{
		keyMenu: "wholesale",
	},
	{
		keyMenu: "contacts",
	},
] as const;

export const menuInfoData = [
	{
		keyMenu: "createDesign",
	},
	{
		keyMenu: "companies",
	},
	{
		keyMenu: "entireСatalog",
		submenu: [
			"dessertCatalog",
			"macarons",
			"eclairs",
			"waffleCones",
			"cakePops",
			"potatoDessert",
			"comboSets",
		],
	},
] as const;
