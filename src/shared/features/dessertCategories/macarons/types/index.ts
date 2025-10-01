import { BaseDessert } from "../../shared/types";

export interface Macaron extends BaseDessert {
	category: 'macaron';
	flavor: MacaronFlavor;
	filling: MacaronFilling;
	color: string;
	isSeasonal: boolean;
	popularity: number;
	calories: number;
	allergens: string[];
	tags: string[];
}

export type MacaronFlavor =
	| 'vanilla' | 'chocolate' | 'strawberry'
	| 'pistachio' | 'lemon' | 'raspberry'
	| 'caramel' | 'coffee' | 'matcha'
	| 'blueberry' | 'coconut';

export type MacaronFilling =
	| 'ganache' | 'buttercream' | 'jam'
	| 'caramel' | 'fruit_curd' | 'cream_cheese';

export interface CreateMacaronData {
	name: string;
	price: number;
	flavor: MacaronFlavor;
	filling: MacaronFilling;
	color: string;
	description: string;
	ingredients: string[];
	calories: number;
	allergens: string[];
}

export interface UpdateMacaronData extends Partial<CreateMacaronData> {
	id: number;
}

export interface MacaronFilters {
	flavor?: MacaronFlavor;
	filling?: MacaronFilling;
	minPrice?: number;
	maxPrice?: number;
	inStock?: boolean;
	isSeasonal?: boolean;
	tags?: string[];
}