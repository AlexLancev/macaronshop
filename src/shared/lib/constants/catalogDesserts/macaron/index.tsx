// {
// 	id: 1,
// 	title: '',
// 	description: '',
// 	price: 0,
//  gallery: ['/images/macarons/',],
//  flavor: [
//  			{
// 				flavorName: '',
// 				quantity: ,
// 			},
// ],
// 	typeHolidays: '',
// }

// {
// 	flavorName: '',
// 	quantity: ,
// },

export const macaronsData = {
	happiness: {
		id: 1,
		title: 'Подарочный набор макаронс «Счастье»',
		description: '21 макаронс в коробке. Вкусы фисташка, ванильный пломбир, шоколад',
		price: 2050,
		gallery: [
			'/images/macarons/',
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
		typeHolidays: 'newYear',
	},
	yearHorse: {
		id: 2,
		title: 'Подарочный набор макарони «В Год Лошади 2026»',
		description: '9 макаронс в коробке. Вкусы: фисташка, смородина, ванильный пломбир',
		price: 890,
		gallery: ['/images/macarons/',],
		flavor: [
			{
				flavorName: '',
				quantity: 0,
			},
		],
		typeHolidays: 'newYear',
	}
}