import { PATHS } from "@/shared/lib/paths";

export const mainMenuDataCurrent = {
	sweetDays: {
		path: PATHS.mainMenu.sweetDays,
		linkName: "Сладкие дни",
	},
	giftSets: {
		path: PATHS.mainMenu.giftSets,
		linkName: "Подарочные наборы",
	},
	teachesDay: {
		path: PATHS.mainMenu.teachesDay,
		linkName: "День учителя",
	},
	allSets: {
		path: PATHS.mainMenu.allSets,
		linkName: "Все наборы",
	},
	birthDay: {
		path: PATHS.mainMenu.birthDay,
		linkName: "День рождения",
	},
	classicMacarons: {
		path: PATHS.mainMenu.classicMacarons,
		linkName: "Макаронс классические",
	},
	weddingProposals: {
		path: PATHS.mainMenu.weddingProposals,
		linkName: "Свадебные предложения",
	},
	candyBars: {
		path: PATHS.mainMenu.candyBars,
		linkName: "Кенди-бары",
	},
	corporateGifts: {
		path: PATHS.mainMenu.corporateGifts,
		linkName: "Корпоративные подарки",
	},
	assembleSet: {
		path: PATHS.mainMenu.assembleSet,
		linkName: "Собрать набор",
	},
	createDesign: {
		path: PATHS.mainMenu.createDesign,
		linkName: "Создать дизайн",
	},
	companies: {
		path: PATHS.mainMenu.companies,
		linkName: "Компаниям",
	},
	wholesaleSupplies: {
		path: PATHS.mainMenu.wholesaleSupplies,
		linkName: "Оптовые поставки",
	},
	eclairsWholesale: {
		path: PATHS.mainMenu.eclairsWholesale,
		linkName: "Эклеры оптом",
	},
	entireСatalog: {
		path: PATHS.mainMenu.entireСatalog,
		linkName: "Весь каталог",
	},
	macarons: {
		path: PATHS.mainMenu.macarons,
		linkName: "Макарон",
	},
	eclairs: {
		path: PATHS.mainMenu.eclairs,
		linkName: "Эклеры",
	},
	waffleCones: {
		path: PATHS.mainMenu.waffleCones,
		linkName: "Вафельные трубочки",
	},
	potatoDessert: {
		path: PATHS.mainMenu.potatoDessert,
		linkName: "Десерт картошка",
	},
	freshness: {
		path: PATHS.servicePages.freshness,
		linkName: "Гарантия свежести",
	},
	delivery: {
		path: PATHS.servicePages.delivery,
		linkName: "Доставка и оплата",
	},
	wholesale: {
		path: PATHS.servicePages.wholesale,
		linkName: "Оптовые поставки",
	},
	contacts: {
		path: PATHS.servicePages.contacts,
		linkName: "Контакты",
	},
	newYear: {
		path: PATHS.mainMenu.newYear,
		linkName: "Подарки на Новый год",
	},
	dayKnowledge: {
		path: PATHS.mainMenu.dayKnowledge,
		linkName: "Подарочные наборы на День знаний",
	},
	childrensDay: {
		path: PATHS.mainMenu.childrensDay,
		linkName: "Подарки на День защиты детей",
	},
	valentinesDay: {
		path: PATHS.mainMenu.valentinesDay,
		linkName: "Подарки на День святого Валентина",
	},
	fatherlandDay: {
		path: PATHS.mainMenu.fatherlandDay,
		linkName: "Подарки на День Защитника Отечества",
	},
	womensDay: {
		path: PATHS.mainMenu.womensDay,
		linkName: "Подарки на Международный Женский День",
	},
} as const;

export type MenuKeysType = keyof typeof mainMenuDataCurrent;
