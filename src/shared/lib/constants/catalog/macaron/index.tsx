import { prodDetailsData } from "../shared/data";

export const macaronsData = {
	happiness: {
		id: 1,
		title: 'Подарочный набор макаронс «Счастье»',
		description: '21 макаронс в коробке. Вкусы фисташка, ванильный пломбир, шоколад',
		price: 2050,
		gallery: [
			'/images/macarons/',
		],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 7,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 7,
			},
			{
				flavorName: 'Шоколад',
				quantity: 7,
			},
		],
		typeHoliday: 'newYear',
		productDetails: prodDetailsData['macaron'],
	},
	yearHorse: {
		id: 2,
		title: 'Подарочный набор макарони «В Год Лошади 2026»',
		description: '9 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 890,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'newYear',
		productDetails: prodDetailsData['macaron'],
	},
	forNewYear: {
		id: 3,
		title: 'Подарочный набор макаронс «К Новому Году»',
		description: '21 макаронс в коробке. Вкусы ассорти',
		price: 2050,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Ассорти',
				quantity: 21,
			},
		],
		typeHoliday: 'newYear',
		prodDetails: prodDetailsData['macaron'],
	},
	snowflakes: {
		id: 4,
		title: 'Подарочный набор макаронс «Снежинки на Новый год»',
		description: '21 макаронс в коробке. Вкусы ассорти',
		price: 2050,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Ассорти',
				quantity: 21,
			},
		],
		typeHoliday: 'newYear',
	},
	bullfinches: {
		id: 5,
		title: 'Подарочный набор на Новый год “Снегири”',
		description: '40 макаронс в коробке. Вкусы: фисташка, шоколад- апельсин, вишня, смородина',
		price: 5900,
		gallery: ['/images/macarons/', '/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 10,
			},
			{
				flavorName: 'Шоколад-апельсин',
				quantity: 10,
			},
			{
				flavorName: '(без печати) Смородина',
				quantity: 10,
			},
			{
				flavorName: '(без печати) Вишня',
				quantity: 10,
			},
		],
		typeHoliday: 'newYear',
		prodDetails: prodDetailsData['macaron'],
	},
	forThoseLove: {
		id: 6,
		title: 'Подарочный набор макаронс «Для тех, кто влюблен»',
		description: '9 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 1100,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'valentinesDay',
		prodDetails: prodDetailsData['macaron'],
	},
	excellent: {
		id: 7,
		title: 'Набор «Превосходный»',
		description: '24 штуки в коробке. Вкусы: малина, ваниль, банановый милкшейк, кокосовый рай, бабл-гам, апельсин-шоколад, фисташка, ананас.',
		price: 1790,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Малина',
				quantity: 4,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 4,
			},
			{
				flavorName: 'Бабл-гам',
				quantity: 2,
			},
			{
				flavorName: 'Фисташка',
				quantity: 6,
			},
			{
				flavorName: 'Кокосовый рай',
				quantity: 2,
			},
			{
				flavorName: 'Банановый милкшейк',
				quantity: 2,
			},
			{
				flavorName: 'Ананас',
				quantity: 2,
			},
			{
				flavorName: 'Апельсин-шоколад',
				quantity: 2,
			},
		],
		typeHoliday: 'valentinesDay',
		prodDetails: prodDetailsData['macaron'],
	},
	loveYou: {
		id: 8,
		title: 'Подарок на 14 февраля «I Love You»',
		description: '9 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 1100,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'valentinesDay',
		prodDetails: prodDetailsData['macaron'],
	},
	withoutYou: {
		id: 9,
		title: 'Набор «Без тебя нет меня»',
		description: '9 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 1100,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'valentinesDay',
		prodDetails: prodDetailsData['macaron'],
	},
	giftSetValDay: {
		id: 10,
		title: 'Подарочный набор на 14 февраля',
		description: '40 макаронс в коробке. Вкусы: малина, мята, ваниль, фисташка, смородина.',
		price: 7000,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Малина',
				quantity: 9,
			},
			{
				flavorName: 'Мята',
				quantity: 9,
			},
			{
				flavorName: 'Ваниль',
				quantity: 8,
			},
			{
				flavorName: 'Макарони (с печатью) Смородина',
				quantity: 5,
			},
			{
				flavorName: 'Макарони (с печатью) Фисташка',
				quantity: 5,
			},
			{
				flavorName: 'Макарони (с печатью) Ванильный пломбир',
				quantity: 4,
			},
		],
		typeHoliday: 'valentinesDay',
		prodDetails: prodDetailsData['macaron'],
	},
	truDefender: {
		id: 11,
		title: 'Подарок на 23 февраля «Настоящему защитнику!»',
		description: '9 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 1100,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'fatherlandDay',
		prodDetails: prodDetailsData['macaron'],
	},
	myHero: {
		id: 12,
		title: 'Подарок на 23 февраля “Ты мой герой”',
		description: '12 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир, шоколад.',
		price: 1490,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Шоколад',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'fatherlandDay',
		prodDetails: prodDetailsData['macaron'],
	},
	belovedDefender: {
		id: 13,
		title: 'Подарок на 23 февраля «Любимому защитнику»',
		description: '9 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 1100,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'fatherlandDay',
		prodDetails: prodDetailsData['macaron'],
	},
	heartDefender: {
		id: 14,
		title: 'Подарок на 23 февраля «Сердце»',
		description: '22 макаронс, вкусы: фисташка, смородина, ванильный пломбир, шоколад, тропический манго-маракуйя',
		price: 3500,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 5,
			},
			{
				flavorName: 'Смородина',
				quantity: 5,
			},
			{
				flavorName: 'Шоколад',
				quantity: 4,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 4,
			},
			{
				flavorName: 'Тропический манго-маракуйя',
				quantity: 4,
			},
		],
		typeHoliday: 'fatherlandDay',
		prodDetails: prodDetailsData['macaron'],
	},
	armyFebruary: {
		id: 15,
		title: 'Подарочный набор «С 23 февраля»',
		description: '20 макаронс в коробке. Вкусы: фисташка, шоколад, соленая карамель, смородина, ваниль.',
		price: 1490,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Соленая карамель',
				quantity: 4,
			},
			{
				flavorName: 'Шоколад',
				quantity: 4,
			},
			{
				flavorName: 'Смородина',
				quantity: 8,
			},
			{
				flavorName: 'Фисташка (с печатью)',
				quantity: 2,
			},
			{
				flavorName: 'Ваниль (с печатью)',
				quantity: 2,
			},
		],
		typeHoliday: 'fatherlandDay',
		prodDetails: prodDetailsData['macaron'],
	},
	flowers: {
		id: 16,
		title: 'Набор макарон на 8 марта «Цветы»',
		description: '9 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 1100,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'womensDay',
		prodDetails: prodDetailsData['macaron'],
	},
	beautyWorld: {
		id: 17,
		title: 'Подарок на 8 марта «Красота спасёт мир»',
		description: '12 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир, шоколад.',
		price: 1490,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Шоколад',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'womensDay',
		prodDetails: prodDetailsData['macaron'],
	},
	best: {
		id: 18,
		title: 'Набор макарон на 8 марта «Самая лучшая»',
		description: '9 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 1100,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'womensDay',
		prodDetails: prodDetailsData['macaron'],
	},
	sovietPostcards: {
		id: 19,
		title: 'Подарочный набор на 8 марта «Советские открытки»',
		description: '12 макаронс (фисташка, смородина, шоколад, ванильный пломбир), 3 эклера (вишня, шоколад, манго)',
		price: 1790,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Эклер Шоколадный',
				quantity: 1,
			},
			{
				flavorName: 'Эклер Вишня',
				quantity: 1,
			},
			{
				flavorName: 'Эклер Манго',
				quantity: 1,
			},
		],
		typeHoliday: 'womensDay',
		prodDetails: prodDetailsData['macaron'],
	},
	sweetLife: {
		id: 20,
		title: 'Подарочный набор на 8 марта «Сладкой жизни»',
		description: '40 макаронс в коробке. Вкусы: вишня, смородина, пломбир, шоколад, фисташка.',
		price: 4900,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Вишня',
				quantity: 10,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 8,
			},
			{
				flavorName: 'Смородина',
				quantity: 11,
			},
			{
				flavorName: 'Фисташка',
				quantity: 6,
			},
			{
				flavorName: 'Шоколад',
				quantity: 5,
			},
		],
		typeHoliday: 'womensDay',
		prodDetails: prodDetailsData['macaron'],
	},
	likeSpring: {
		id: 21,
		title: 'Подарочный набор макаронс «Ты как весна»',
		description: '9 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 1100,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'laborDay',
		prodDetails: prodDetailsData['macaron'],
	},
	springSet: {
		id: 22,
		title: 'Набор «Весенний»',
		description: '12 штук в коробке. Вкусы: мята, манго-маракуйя, ананас, банановый милкшейк.',
		price: 1290,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Ананас',
				quantity: 4,
			},
			{
				flavorName: 'Мята',
				quantity: 3,
			},
			{
				flavorName: 'Банановый милкшейк',
				quantity: 3,
			},
			{
				flavorName: 'Манго-маракуйя',
				quantity: 2,
			},
		],
		typeHoliday: 'laborDay',
		prodDetails: prodDetailsData['macaron'],
	},
	seaFlowers: {
		id: 23,
		title: 'Подарочный набор макаронс «Море цветов»',
		description: '9 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 1100,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'laborDay',
		prodDetails: prodDetailsData['macaron'],
	},
	setRound: {
		id: 24,
		title: 'Набор Круглый из 40 макарон',
		description: 'Собрать свой набор: вкусы на выбор',
		price: 5900,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Ассорти',
				quantity: 40,
			},
		],
		typeHoliday: 'victoryDay',
		prodDetails: prodDetailsData['macaron'],
	},
	babyMammoth: {
		id: 25,
		title: 'Подарочный набор «Мамонтёнок»',
		description: '40 макаронс в коробке. Вкусы: смородина, малина, фисташка, шоколад.',
		price: 5900,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Макарони Смородина',
				quantity: 21,
			},
			{
				flavorName: 'Макарони Малина',
				quantity: 8,
			},
			{
				flavorName: 'Макарони (с печатью) Фисташка',
				quantity: 5,
			},
			{
				flavorName: 'Макарони (с печатью) Шоколад',
				quantity: 6,
			},
		],
		typeHoliday: 'victoryDay',
		prodDetails: prodDetailsData['macaron'],
	},
	childrenSet: {
		id: 26,
		title: 'Детский набор макарон',
		description: '20 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир, бабл-гам, малина, банановый милкшейк, ананас.',
		price: 1490,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка (с печатью)',
				quantity: 2,
			},
			{
				flavorName: 'Смородина (с печатью)',
				quantity: 2,
			},
			{
				flavorName: 'Бабл-гам',
				quantity: 4,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 2,
			},
			{
				flavorName: 'Фисташка',
				quantity: 2,
			},
			{
				flavorName: 'Малина',
				quantity: 4,
			},
			{
				flavorName: 'Ананас',
				quantity: 2,
			},
			{
				flavorName: 'Банановый Милкшейк',
				quantity: 2,
			},
		],
		typeHoliday: 'childrensDay',
		prodDetails: prodDetailsData['macaron'],
	},
	summerSet: {
		id: 27,
		title: 'Набор «Лето»',
		description: '24 штуки в коробке. Вкусы: вишня, смородина, лаванда, шоколад, соленая карамель, малина.',
		price: 1790,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Пряная вишня',
				quantity: 4,
			},
			{
				flavorName: 'Черная смородина',
				quantity: 5,
			},
			{
				flavorName: 'Лавандовый прованс',
				quantity: 4,
			},
			{
				flavorName: 'Шоколад',
				quantity: 4,
			},
			{
				flavorName: 'Солёная карамель',
				quantity: 3,
			},
			{
				flavorName: 'Малина',
				quantity: 4,
			},
		],
		typeHoliday: 'childrensDay',
		prodDetails: prodDetailsData['macaron'],
	},
	excellentSet: {
		id: 28,
		title: 'Набор «Превосходный»',
		description: '24 штуки в коробке. Вкусы: малина, ваниль, банановый милкшейк, кокосовый рай, бабл-гам, апельсин-шоколад, фисташка, ананас.',
		price: 1790,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Малина',
				quantity: 4,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 4,
			},
			{
				flavorName: 'Бабл-гам',
				quantity: 2,
			},
			{
				flavorName: 'Фисташка',
				quantity: 6,
			},
			{
				flavorName: 'Кокосовый рай',
				quantity: 2,
			},
			{
				flavorName: 'Банановый милкшейк',
				quantity: 2,
			},
			{
				flavorName: 'Ананас',
				quantity: 2,
			},
			{
				flavorName: 'Апельсин-шоколад',
				quantity: 2,
			},
		],
		typeHoliday: 'childrensDay',
		prodDetails: prodDetailsData['macaron'],
	},
	septemberSet: {
		id: 29,
		title: 'Набор на 1 сентября',
		description: '9 штук в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 1100,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'dayKnowledge',
		prodDetails: prodDetailsData['macaron'],
	},
	goodLuckStudies: {
		id: 30,
		title: 'Набор «С 1 сентября! Успешной учёбы»',
		description: '9 штук в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 1100,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 3,
			},
			{
				flavorName: 'Смородина',
				quantity: 3,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 3,
			},
		],
		typeHoliday: 'dayKnowledge',
		prodDetails: prodDetailsData['macaron'],
	},
	giftSeptember: {
		id: 31,
		title: 'Подарок на 1 сентября',
		description: '12 макаронс (фисташка, смородина, шоколад, ванильный пломбир), 3 эклера (вишня, шоколад, манго)',
		price: 1890,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Ассорти',
				quantity: 12,
			},
		],
		typeHoliday: 'dayKnowledge',
		prodDetails: prodDetailsData['macaron'],
	},
	festiveTable: {
		id: 32,
		title: 'Набор макаронс «Для праздничного стола',
		description: '40 макаронс в коробке. Вкусы: вишня, ванильный пломбир, соленая карамель, лесной орех',
		price: 5900,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Вишня',
				quantity: 10,
			},
			{
				flavorName: 'Соленая карамель',
				quantity: 9,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 10,
			},
			{
				flavorName: 'Лесной орех',
				quantity: 11,
			},
		],
		typeHoliday: 'nationalUnityDay',
		prodDetails: prodDetailsData['macaron'],
	},
	rainbow: {
		id: 33,
		title: 'Набор десертов «Радуга»',
		description: '64 десерта в коробке, вкусы макарони: фисташка, лесной орех, смородина, вишня, малина, апельсин-шоколад, карамель.',
		price: 7450,
		gallery: ['/images/macarons/',],
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
		typeHoliday: 'nationalUnityDay',
		prodDetails: prodDetailsData['macaron'],
	},
	pyramid: {
		id: 34,
		title: 'Пирамидка из макаронс, 6 этажей',
		description: '80 макаронс в наборе. Вкусы ассорти на ваш выбор',
		price: 7560,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: 'Фисташка',
				quantity: 10,
			},
			{
				flavorName: 'Шоколад',
				quantity: 10,
			},
			{
				flavorName: 'Солёная карамель',
				quantity: 10,
			},
			{
				flavorName: 'Манго-маракуйя',
				quantity: 10,
			},
			{
				flavorName: 'Малина',
				quantity: 10,
			},
			{
				flavorName: 'Ананас',
				quantity: 10,
			},
			{
				flavorName: 'Ванильный пломбир',
				quantity: 10,
			},
			{
				flavorName: 'Вишня',
				quantity: 10,
			},
		],
		typeHoliday: 'nationalUnityDay',
		prodDetails: prodDetailsData['macaron'],
	},
} as const;