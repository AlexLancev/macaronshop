export const menuSaleData = [
	{
		keyMenu: "sweetDays",
		isIcon: "discount",
	},
	{
		keyMenu: "giftSets",
		submenu: ["weddingProposals", "candyBars", "corporateGifts"],
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
		submenu: ["corporateGifts", "wholesaleSupplies", "eclairsWholesale"],
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
