import type { OurAdvantagesType } from "../types";

export const ourAdvantagesData: OurAdvantagesType = {
	almond: {
		description: "Оптовые поставки от производителя",
		iconUrl: "/images/ourAdvantages/almond.svg",
		sizeIcon: {
			width: 60,
			height: 32,
		},
	},
	cake: {
		description: "Всегла свежее",
		iconUrl: "/images/ourAdvantages/cake.svg",
		sizeIcon: {
			width: 42,
			height: 40,
		},
	},
	delivery: {
		description: "Миндальная мука и натуральные ингредиенты",
		iconUrl: "/images/ourAdvantages/delivery.svg",
		sizeIcon: {
			width: 45,
			height: 35,
		},
	},
	truckDelivery: {
		description: "Бережная доставка",
		iconUrl: "/images/ourAdvantages/truckDelivery.svg",
		sizeIcon: {
			width: 45,
			height: 31,
		},
	},
};

export const ourAdvantagesDefault = {
	description: "",
	iconUrl: "",
	sizeIcon: {
		width: 24,
		height: 24,
	},
};
