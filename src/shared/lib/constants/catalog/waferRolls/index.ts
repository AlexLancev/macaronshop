import { prodDetailsData } from "../shared/data";

export const waferRollsData = {
	chocolate: {
		id: 1,
		title: 'Трубочка с шоколадной начинкой',
		description: 'Вафельная трубочка с шоколадной начинкой навевает теплые воспоминания о беззаботных моментах угощения сладостями. Вкус такой трубочки – это гармоничное сочетание сладкой, немного карамельной вафельной оболочки с богатым и густым шоколадным кремом внутри. Хрустящая вафля с легкими масляными нотками создает идеальный контраст с мягкой, тающей во рту шоколадной начинкой, которая обволакивает вкусовые рецепторы насыщенным шоколадным вкусом с легкими оттенками фундука. Это стоит попробовать!',
		price: 100,
		gallery: ['/images/waferRolls/',],
		typeHoliday: 'dayKnowledge',
		prodDetails: prodDetailsData['waferRolls'],
	},
	condensedMilk: {
		id: 2,
		title: 'Набор трубочек со сгущёнкой',
		description: '10 штук в наборе',
		price: 995,
		gallery: ['/images/waferRolls/',],
		flavor: [
			{
				flavorName: 'Трубочки со сгущёнкой',
				quantity: 10,
			},
		],
		typeHoliday: 'nationalUnityDay',
		prodDetails: prodDetailsData['waferRolls'],
	},
	oneCondensedMilk: {
		id: 3,
		title: 'Трубочка со сгущёнкой',
		description: 'В составе наших вафель — натуральное масло и яйца. Мы не используем яичный желток и сухие порошки, не используем консерванты, разрыхлители и загустители. В составе начинки: натуральная сгущёнка, масло и молоко. То есть наши трубочки приготовлены так, как если бы готовила их ваша бабушка)',
		price: 100,
		gallery: ['/images/waferRolls/',],
		typeHoliday: 'victoryDay',
		prodDetails: prodDetailsData['waferRolls'],
	},
} as const;