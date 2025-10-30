import { PATHS } from "@/shared/lib/paths";
import React from "react";
import { keyof } from "zod";

type CategoryLinksKeys = keyof typeof categoryLinksData;

const categoryLinksData = {
	giftSets: {
		id: 1,
		path: PATHS.mainMenu.giftSets,
		cardColor: 'rgb(244, 151, 110)',
		title: 'Подарочные наборы',
		description: 'Подарочные наборы со скидкой. Вы можете подобрать набор на подходящий случай',
		icon: 'giftSets',
	},
	assembleSet: {
		id: 2,
		path: PATHS.mainMenu.assembleSet,
		cardColor: 'rgb(230, 114, 133)',
		title: 'Собрать свой набор',
		description: 'Выбрать количество макаронс, и выбрать вкусы',
		icon: 'assembleSet',
	},
	createDesign: {
		id: 3,
		path: PATHS.mainMenu.createDesign,
		cardColor: 'rgb(159, 206, 158)',
		title: 'Индивидуальная печать',
		description: 'Создать набор со своим дизайном',
		icon: 'createDesign',
	},
	weddingProposals: {
		id: 4,
		path: PATHS.mainMenu.weddingProposals,
		cardColor: 'rgb(229, 131, 131)',
		title: 'Свадебные предложения',
		description: 'Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества',
		icon: 'weddingProposals',
	},
	corporateGifts: {
		id: 5,
		path: PATHS.mainMenu.corporateGifts,
		cardColor: 'rgb(87, 182, 187)',
		title: 'Корпоративные подарки',
		description: 'От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнёров',
		icon: 'corporateGifts',
	},
	wholesaleSupplies: {
		id: 6,
		path: PATHS.mainMenu.wholesaleSupplies,
		cardColor: 'rgb(138, 140, 220)',
		title: 'Пирожные оптом',
		description: 'Предложение для кофеен, кафе, отелей и т.д. Посмотрите условия сотрудничества и отзывы',
		icon: 'wholesaleSupplies',
	},
} as const;

export default function CategoryLinks() {
	return <div>CategoryLinks</div>;
}
