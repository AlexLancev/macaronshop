import type { JSX } from "react";

import type { HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";
import type { prodDetailsData } from "../data";

export type ProductType =
	| "Макаруны"
	| "Эклеры"
	| "Вафельные трубочки"
	| "Десерт картошка";

export type TypeProductKeys = keyof typeof prodDetailsData;

export interface StorageConfig {
	bestBeforeHours?: number;
	fridge?: number;
	freezer?: number;
	prodType?: ProductType;
}

export interface StorageDetailsProps {
	config?: StorageConfig;
}

export interface ProductDetailsType {
	description: {
		trigger: string;
		htmlContent: string;
	};
	nutriFacts: {
		trigger: string;
		htmlContent: string;
	};
	shelfLife: {
		trigger: string;
		htmlContent: JSX.Element;
	};
}

export interface ProductFlavor {
	flavorName: string;
	quantity: number;
}

export interface ProductCardType {
	id: number;
	slug: string;
	title: string;
	description: string;
	price: number;
	gallery: readonly string[];
	flavor?: readonly ProductFlavor[];
	typeProduct: TypeProductKeys;
	typeHoliday: HolidaysDataKeys;
	productDetails: ProductDetailsType;
}
