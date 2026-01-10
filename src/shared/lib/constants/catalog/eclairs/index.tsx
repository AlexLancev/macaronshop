import { prodDetailsData } from "../shared/data";

export const eclairsData = {
	rainbow: {
		slug: 'rainbow',
		typeProduct: 'eclair',
		id: 1,
		title: 'Набор десертов «Радуга»',
		description: '64 десерта в коробке, вкусы макарони: фисташка, лесной орех, смородина, вишня, малина, апельсин-шоколад, карамель',
		price: 7450,
		gallery: ['/images/eclairs/img-1.png',],
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
		typeHoliday: 'mothersDay',
	},
	sweetSoul: {
		slug: 'sweet-soul',
		typeProduct: 'eclair',
		id: 2,
		title: 'Набор эклеров «Сладкая душа»',
		description: '5 вкусов в наборе: карамель, ваниль, манго, смородина, вишня',
		price: 910,
		gallery: ['/images/eclairs/img-2.png',],
		flavor: [
			{
				flavorName: 'Вишня',
				quantity: 1,
			},
			{
				flavorName: 'Карамель',
				quantity: 1,
			},
			{
				flavorName: 'Смородина',
				quantity: 1,
			},
			{
				flavorName: 'Манго',
				quantity: 1,
			},
			{
				flavorName: 'Ваниль',
				quantity: 1,
			},
		],
		typeHoliday: 'newYear',
	},
	paradise: {
		slug: 'paradise',
		typeProduct: 'eclair',
		id: 3,
		title: 'Набор с эклерами «Райский»',
		description: '12 макаронc (лесной орех, лимон, вишня, малина) + 3 эклера (смородина, манго, ваниль) в коробке.',
		price: 1390,
		gallery: ['/images/eclairs/img-3.png',],
		flavor: [
			{
				flavorName: 'Макарони Лесной орех',
				quantity: 3,
			},
			{
				flavorName: 'Макарони Пряная вишня',
				quantity: 3,
			},
			{
				flavorName: 'Макарони Малина',
				quantity: 3,
			},
			{
				flavorName: 'Макарони Лимон',
				quantity: 3,
			},
			{
				flavorName: 'Эклер Смородина',
				quantity: 1,
			},
			{
				flavorName: 'Эклер Манго',
				quantity: 1,
			},
			{
				flavorName: 'Эклер Ваниль',
				quantity: 1,
			},
		],
		typeHoliday: 'valentinesDay',
	},
	sonata: {
		slug: 'sonata',
		typeProduct: 'eclair',
		id: 4,
		title: 'Набор эклеров Соната',
		description: '5 вкусов в наборе: Ванильный, Шоколадный, Вишневый, Карамельный и Фундучное пралине.',
		price: 910,
		gallery: ['/images/eclairs/img-4.png',],
		flavor: [
			{
				flavorName: 'Фундучное пралине',
				quantity: 1,
			},
			{
				flavorName: 'Ваниль',
				quantity: 1,
			},
			{
				flavorName: 'Шоколад',
				quantity: 1,
			},
			{
				flavorName: 'Вишня',
				quantity: 1,
			},
			{
				flavorName: 'Карамель',
				quantity: 1,
			},
		],
		typeHoliday: 'fatherlandDay',
	},
	izuminka: {
		slug: 'izuminka',
		typeProduct: 'eclair',
		id: 5,
		title: 'Набор с эклерами «Изюминка»',
		description: '10 макаронc (кокосовый рай, фисташка, пломбир, соленая карамель, лесной орех) + 3 эклера (сицилийская фисташка, фундучное пралине) в коробке.',
		price: 1390,
		gallery: ['/images/eclairs/img-5.png',],
		flavor: [
			{
				flavorName: 'Эклер Сицилийская Фисташка',
				quantity: 2,
			},
			{
				flavorName: 'Эклер Фундучное Пралине',
				quantity: 1,
			},
			{
				flavorName: 'Макарони Фисташка',
				quantity: 2,
			},
			{
				flavorName: 'Макарони Ванильный пломбир',
				quantity: 2,
			},
			{
				flavorName: 'Макарони Лесной орех',
				quantity: 2,
			},
			{
				flavorName: 'Макарони Соленая карамель',
				quantity: 2,
			},
			{
				flavorName: 'Макарони Кокосовый рай',
				quantity: 2,
			},
		],
		typeHoliday: 'womensDay',
	},
	confetti: {
		slug: 'confetti',
		typeProduct: 'eclair',
		id: 6,
		title: 'Набор с эклерами «Конфетти»',
		description: '10 макаронc (пломбир, кокосовый рай, смородина, лаванда, бабл-гам) + 3 эклера (манго, карамель, смородина) в коробке.',
		price: 1390,
		gallery: ['/images/eclairs/img-6.png',],
		flavor: [
			{
				flavorName: 'Эклер Смородиновый',
				quantity: 1,
			},
			{
				flavorName: 'Эклер Манго',
				quantity: 1,
			},
			{
				flavorName: 'Эклер Карамельный',
				quantity: 1,
			},
			{
				flavorName: 'Макарони Кокосовый рай',
				quantity: 2,
			},
			{
				flavorName: 'Макарони Ванильный пломбир',
				quantity: 2,
			},
			{
				flavorName: 'Макарони Смородина',
				quantity: 2,
			},
			{
				flavorName: 'Макарони Бабл-гам',
				quantity: 2,
			},
			{
				flavorName: 'Макарони Лаванда',
				quantity: 2,
			},
		],
		typeHoliday: 'laborDay',
	},
	brightness: {
		slug: 'brightness',
		typeProduct: 'eclair',
		id: 7,
		title: 'Набор эклеров «Яркий»',
		description: '5 вкусов в наборе: Ягодный восторг, Кокосовый рай, Апельсиновый брауни, Лавандовая черника и Фундучное пралине.',
		price: 910,
		gallery: ['/images/eclairs/img-7.png',],
		flavor: [
			{
				flavorName: 'Ягодный восторг',
				quantity: 1,
			},
			{
				flavorName: 'Кокосовый рай',
				quantity: 1,
			},
			{
				flavorName: 'Апельсиновый брауни',
				quantity: 1,
			},
			{
				flavorName: 'Лавандовая черника',
				quantity: 1,
			},
			{
				flavorName: 'Фундучное пралине',
				quantity: 1,
			},
		],
		typeHoliday: 'victoryDay',
	},
	forMost: {
		slug: 'for-most',
		typeProduct: 'eclair',
		id: 8,
		title: 'Подарок «Для Самой-Самой»',
		description: '',
		price: 910,
		gallery: ['/images/eclairs/img-8.png',],
		flavor: [
			{
				flavorName: 'Шоколад',
				quantity: 3,
			},
			{
				flavorName: 'Эклер Шоколад',
				quantity: 1,
			},
			{
				flavorName: 'Эклер Ваниль',
				quantity: 1,
			},
			{
				flavorName: 'Эклер Смородина',
				quantity: 1,
			},
			{
				flavorName: 'Эклер Карамель',
				quantity: 1,
			},
		],
		typeHoliday: 'childrensDay',
	},
} as const;