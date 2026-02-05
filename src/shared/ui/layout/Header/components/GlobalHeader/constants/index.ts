export const menuSaleData = [
	{
		keyMenu: "sweetDays",
		isIcon: "discount",
	},
	{
		keyMenu: "giftSets",
		submenu: [
			"birthDay",
			"newYear",
			"dayKnowledge",
			"valentinesDay",
			"childrensDay",
			"fatherlandDay",
			"womensDay",
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
		submenu: ["corporateGifts", "wholesaleSupplies", "eclairsWholesale"],
	},
	{
		keyMenu: "entireСatalog",
		submenu: ["macarons", "eclairs", "waffleCones", "potatoDessert"],
	},
] as const;
