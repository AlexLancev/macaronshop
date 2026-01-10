import { prodDetailsData } from "../shared/data";

export const potatoDessertData = {
	rainbowSet: {
		slug: 'rainbow-set',
		typeProduct: 'potato',
		id: 1,
		title: 'Набор десертов «Радуга»',
		description: '64 десерта в коробке, вкусы макарони: фисташка, лесной орех, смородина, вишня, малина, апельсин-шоколад, карамель',
		price: 7450,
		gallery: ['/images/potato/img-1.png',],
		flavor: [
			{
				flavorName: 'Лесной орех',
				quantity: 6,
			},
			{
				flavorName: 'Фисташка',
				quantity: 6,
			},
			{
				flavorName: 'Капучино',
				quantity: 6,
			},
			{
				flavorName: 'Шоколад-апельсин',
				quantity: 6,
			},
			{
				flavorName: 'Лимон',
				quantity: 6,
			},
			{
				flavorName: 'Ананас',
				quantity: 6,
			},
			{
				flavorName: 'Малина',
				quantity: 6,
			},
			{
				flavorName: 'Лаванда',
				quantity: 6,
			},
			{
				flavorName: 'Эклеры',
				quantity: 8,
			},
			{
				flavorName: 'Картошка',
				quantity: 7,
			},
		],
		typeHoliday: 'laborDay',
	},
	congratulationsSet: {
		slug: 'congratulations-set',
		typeProduct: 'potato',
		id: 2,
		title: 'Набор десертов «Поздравляю»',
		description: '33 десерта в коробке, вкусы макаронс: фисташка, малина, смородина, ананас, шоколад, солёная карамель.',
		price: 5770,
		gallery: ['/images/potato/img-2.png',],
		flavor: [
			{
				flavorName: 'Малина',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Солёная карамель',
				quantity: 3,
			},
			{
				flavorName: 'Ананас',
				quantity: 3,
			},
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Шоколад',
				quantity: 8,
			},
			{
				flavorName: 'Пирожное Картошка',
				quantity: 10,
			},
		],
		typeHoliday: 'victoryDay',
	},
	potatoSet: {
		slug: 'potato-set',
		typeProduct: 'potato',
		id: 3,
		title: 'Набор пирожных картошка',
		description: 'Ароматные и нежные пирожные в наборе, 12 штук',
		price: 790,
		gallery: ['/images/potato/img-3.jpg',],
		flavor: [
			{
				flavorName: 'Клубника',
				quantity: 12,
			},
		],
		typeHoliday: 'mothersDay',
	},
	miniPotatoSet: {
		slug: 'mini-potato-set',
		typeProduct: 'potato',
		id: 4,
		title: 'MINI набор пирожных картошка',
		description: '3 штуки в корексе, вкус клубника',
		price: 590,
		gallery: ['/images/potato/img-4.png',],
		flavor: [
			{
				flavorName: 'Клубника',
				quantity: 3,
			},
		],
		typeHoliday: 'newYear',
	},
} as const