import { ProductTypeKeys } from "@/shared/lib/api/products";
import { AssembleSetItem } from "../../assemble-set/types";

export const macaronFlavorData = [
	{
		id: 1,
		flavor: "Чёрная смородина",
		description: "Освежающий вкус спелой чёрной смородины с лёгкой кислинкой.",
		image: "/images/assemble-set/flavor-1.png",
	},
	{
		id: 2,
		flavor: "Маракуйя-манго-маракуйя",
		description: "Яркий микс маракуйи и манго с экзотической сладостью.",
		image: "/images/assemble-set/flavor-2.png",
	},
	{
		id: 3,
		flavor: "Шоколадный шоколад",
		description: "Плотная начинка с насыщенным вкусом бельгийского шоколада.",
		image: "/images/assemble-set/flavor-3.png",
	},
	{
		id: 4,
		flavor: "Соленая карамель",
		description:
			"Нежная карамель с морской солью — баланс сладкого и солёного.",
		image: "/images/assemble-set/flavor-4.png",
	},
	{
		id: 5,
		flavor: "Фисташка",
		description: "Изящный сливочный вкус фисташки для настоящих гурманов.",
		image: "/images/assemble-set/flavor-5.png",
	},
	{
		id: 6,
		flavor: "Лавандовая черника",
		description: "Черника и нотки лаванды создают уникальный деликатес.",
		image: "/images/assemble-set/flavor-6.png",
	},
	{
		id: 7,
		flavor: "Мята",
		description: "Нежная мятная свежесть с молочным послевкусием.",
		image: "/images/assemble-set/flavor-7.png",
	},
	{
		id: 8,
		flavor: "Карамель",
		description: "Традиционный молочно-карамельный вкус с лёгкой сладостью.",
		image: "/images/assemble-set/flavor-8.png",
	},
	{
		id: 9,
		flavor: "Красный бархат",
		description: "Богатый кремово-какао вкус знаменитого красного бархата.",
		image: "/images/assemble-set/flavor-9.png",
	},
	{
		id: 10,
		flavor: "Лимон",
		description: "Яркая кислинка и сладость свежего лимона.",
		image: "/images/assemble-set/flavor-10.png",
	},
	{
		id: 11,
		flavor: "Шоколад апельсин",
		description: "Свежий дуэт шоколада и оранжевой цедры.",
		image: "/images/assemble-set/flavor-11.png",
	},
	{
		id: 12,
		flavor: "Бабл гам",
		description: "Необычайно нежный вкус с нотками жвачки.",
		image: "/images/assemble-set/flavor-12.png",
	},
	{
		id: 13,
		flavor: "Грецкий орех",
		description: "Рубленый грецкий орех в нежной начинке.",
		image: "/images/assemble-set/flavor-13.png",
	},
	{
		id: 14,
		flavor: "Ореховый сорбет",
		description: "Сливочное пралине с ореховой крошкой.",
		image: "/images/assemble-set/flavor-14.png",
	},
	{
		id: 15,
		flavor: "Абрикос",
		description: "Вкус спелого сочного абрикоса с лёгкой кислинкой.",
		image: "/images/assemble-set/flavor-15.png",
	},
	{
		id: 16,
		flavor: "Клубника",
		description: "Классический ягодный вкус, любимый взрослыми и детьми.",
		image: "/images/assemble-set/flavor-16.png",
	},
] as const satisfies ReadonlyArray<AssembleSetItem>;

export const orderComposerData = {
	macaron: [...macaronFlavorData],
	eclairs: [],
	waferRolls: [],
	potato: [],
} as const satisfies Record<ProductTypeKeys, AssembleSetItem[]>;
