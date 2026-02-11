import type { ProductTypeKeys } from "@/shared/lib/api/products";

export const FLAVOR_VARIANTS = [
	"Чёрная смородина",
	"Маракуйя-манго-маракуйя",
	"Шоколадный шоколад",
	"Соленая карамель",
	"Фисташка",
	"Лавандовая черника",
	"Мята",
	"Карамель",
	"Красный бархат",
	"Лимон",
	"Шоколад апельсин",
	"Бабл гам",
	"Грецкий орех",
	"Ореховый сорбет",
	"Абрикос",
	"Клубника",
] as const;

export type FlavorVariant = (typeof FLAVOR_VARIANTS)[number];

export type AssembleSetItem = {
	id: number;
	quantity: number;
	flavor: FlavorVariant;
	description: string;
	image: string;
};

export type AssemblePromoItem = {
	id: number;
	type: ProductTypeKeys;
	title: string;
	price: number;
	quantity: number;
	image: string;
};
