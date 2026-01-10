import { HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";
import { macaronsData } from "../../macaron";
import { prodDetailsData, shelfLifeData } from "../data";
import { JSX } from "react";

export type ProductType = 'Макаруны' | 'Эклеры' | 'Вафельные трубочки' | 'Десерт картошка';

export interface StorageConfig {
	bestBeforeHours?: number;
	fridge?: number;
	freezer?: number;
	prodType?: ProductType;
}

export interface StorageDetailsProps {
	config?: StorageConfig;
}

export type MacaronsDataKeys = keyof typeof macaronsData;

export type ProdDetailsDataKeys = keyof typeof prodDetailsData;

export type ShelfLifeDataKeys = keyof typeof shelfLifeData;

export interface ProductDetailsType {
	description: {
		trigger: string,
		htmlContent: string,
	},
	nutriFacts: {
		trigger: string,
		htmlContent: string,
	},
	shelfLife: {
		trigger: string,
		htmlContent: JSX.Element
	}
}

export interface ProductFlavor {
	flavorName: string,
	quantity: number,
}

export interface ProductCardType {
	id: number,
	typeProduct: 'macaron' | 'eclairs' | 'waferRolls' | 'potato',
	slug: string;
	title: string,
	description: string,
	price: number,
	gallery: readonly string[],
	flavor?: readonly ProductFlavor[],
	typeHoliday: HolidaysDataKeys,
	productDetails: ProductDetailsType
}