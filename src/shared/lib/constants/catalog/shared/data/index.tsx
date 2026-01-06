import { StorageDetails } from "../components/StorageDetails";
import { INFO_SECTIONS } from "../constants";

export const shelfLifeData = {
	macaron: <StorageDetails config={{ prodType: 'Макаруны' }} />,
	eclairs: <StorageDetails config={{ prodType: 'Эклеры' }} />,
	waferRolls: <StorageDetails config={{ prodType: 'Вафельные трубочки' }} />,
	potato: <StorageDetails config={{ prodType: 'Десерт картошка' }} />,
} as const;

export const prodDetailsData = {
	macaron: {
		description: {
			trigger: INFO_SECTIONS.DESCRIPTION,
			htmlContent: '<p>Макароншоп — это пирожные макарон, изготовленные вручную из натуральных ингредиентов.</p><br/> <p>Эффектная упаковка и оригинальная печать на макаронсах — лучшие презенты для любых праздников!</p><br/> <p>Цвета макаронс могут отличаться.</p><br/>',
		},
		nutriFacts: {
			trigger: INFO_SECTIONS.NUTRITION,
			htmlContent: '<p>Мука миндальная, сахар, яйцо куриное (белок), ганаш.</p><br/> <p>На 100 г: Белки 7.45 г, Жиры 16.84 г, Углеводы 53.03 г, 393 ккал.</p><br/>',
		},
		shelfLife: {
			trigger: INFO_SECTIONS.SHELF_LIFE,
			htmlContent: shelfLifeData['macaron']
		}
	},
	eclairs: {
		description: {
			trigger: INFO_SECTIONS.DESCRIPTION,
			htmlContent: '<p>Безумно вкусные эклеры изготовлены вручную только из натуральных ингредиентов, без химии и консервантов!</p><br/> <p>Эффектная упаковка и оригинальная печать на макаронсах — лучшие презенты для любых праздников!</p><br/> <p>Цвета макаронс могут отличаться.</p><br/>',
		},
		nutriFacts: {
			trigger: INFO_SECTIONS.NUTRITION,
			htmlContent: '<p>Мука пшеничная в/с, масло сливочное, сахар-песок, яйца куриные, молоко, соль, сливки 33-35%, белый шоколад, натуральный наполнитель.</p><br/> <p>На 100 г: Б 7.2 г, Ж 30.4 г, У 53.03 г, 405 ккал.</p><br/>',
		},
		shelfLife: {
			trigger: INFO_SECTIONS.SHELF_LIFE,
			htmlContent: shelfLifeData['eclairs']
		}
	},
	waferRolls: {
		description: {
			trigger: INFO_SECTIONS.DESCRIPTION,
			htmlContent: '<p>Вафельная трубочка с шоколадной начинкой навевает теплые воспоминания о беззаботных моментах угощения сладостями. Вкус такой трубочки – это гармоничное сочетание сладкой, немного карамельной вафельной оболочки с богатым и густым шоколадным кремом внутри.</p></br><p>Хрустящая вафля с легкими масляными нотками создает идеальный контраст с мягкой, тающей во рту шоколадной начинкой, которая обволакивает вкусовые рецепторы насыщенным шоколадным вкусом с легкими оттенками фундука. Это стоит попробовать!</p>',
		},
		nutriFacts: {
			trigger: INFO_SECTIONS.NUTRITION,
			htmlContent: '<p>Глазурь шоколадная молочная, молоко сгущенное с сахаром вареное, мука пшеничная высший сорт, соль, сахар песок, молоко 2,5%, паста ядер орехов фундука обжаренных, какао порошок.</p></br><p>Пищевая ценность на 100 г продукта: белки – 4,2 г, жиры – 27 г, углеводы – 49 г. Энергетическая ценность: 456 ккал</p>',
		},
		shelfLife: {
			trigger: INFO_SECTIONS.SHELF_LIFE,
			htmlContent: shelfLifeData['waferRolls']
		}
	},
	potato: {
		description: {
			trigger: INFO_SECTIONS.DESCRIPTION,
			htmlContent: '<p>Ароматные пирожные картошка изготовлены только из натуральных ингредиентов, без химии и консервантов!</p></br><p>Шоколадное пирожное на основе терпкого ароматного бисквита с алкализованным какао и добавлением мягкой солёной карамели — лучшие десерты на вашем празднике!</p>',
		},
		nutriFacts: {
			trigger: INFO_SECTIONS.NUTRITION,
			htmlContent: '<p>Сахар, молоко 2.5%, молоко цельное вареное сгущеное с сахаром 8.5%, мука пшеничная, какао, вода, масло подсолнечное, глазурь кондитерская темная, уксус 9%, клубника сублимированная, сода, соль, ароматизатор «Ром».</p></br><p>На 100 г: Б 5.89 г, Ж 13.09 г, У 45.91 г; 327 ккал</p>',
		},
		shelfLife: {
			trigger: INFO_SECTIONS.SHELF_LIFE,
			htmlContent: shelfLifeData['potato']
		}
	},
} as const;

