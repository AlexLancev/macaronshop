import { PATHS } from "@/shared/lib/paths";

export const categoryKeys = [
	"giftSets",
	"assembleSet",
	"createDesign",
	"weddingProposals",
	"corporateGifts",
	"wholesaleSupplies",
] as const;

export const categoryData = {
	giftSets: {
		id: 1,
		path: PATHS.mainMenu.giftSets,
		cardColor: "#ffdbc3",
		title: "Подарочные наборы",
		description:
			"Подарочные наборы со скидкой. Вы можете подобрать набор на подходящий случай",
		icon: "giftSets",
	},
	assembleSet: {
		id: 2,
		path: PATHS.mainMenu.assembleSet,
		cardColor: "#ffc2cc",
		title: "Собрать свой набор",
		description: "Выбрать количество макаронс, и выбрать вкусы",
		icon: "assembleSet",
	},
	createDesign: {
		id: 3,
		path: PATHS.mainMenu.createDesign,
		cardColor: "#b4eab3",
		title: "Индивидуальная печать",
		description: "Создать набор со своим дизайном",
		icon: "createDesign",
	},
	weddingProposals: {
		id: 4,
		path: PATHS.mainMenu.weddingProposals,
		cardColor: "#fdd5cd",
		title: "Свадебные предложения",
		description:
			"Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества",
		icon: "weddingProposals",
	},
	corporateGifts: {
		id: 5,
		path: PATHS.mainMenu.corporateGifts,
		cardColor: "#a8dcdf",
		title: "Корпоративные подарки",
		description:
			"От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнёров",
		icon: "corporateGifts",
	},
	wholesaleSupplies: {
		id: 6,
		path: PATHS.mainMenu.wholesaleSupplies,
		cardColor: "#c4c6ec",
		title: "Пирожные оптом",
		description:
			"Предложение для кофеен, кафе, отелей и т.д. Посмотрите условия сотрудничества и отзывы",
		icon: "wholesaleSupplies",
	},
} as const;

export const angles = [338, 22, 201, 159];
