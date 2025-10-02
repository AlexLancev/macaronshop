export interface BaseDessert {
	id: number;
	name: string;
	price: number;
	image: string;
	description: string;
	inStock: boolean;
	ingredients: string[];
	flavor: Flavor;
	filling: Filling;
	color: string;
	isSeasonal: boolean;
	popularity: number;
	calories: number;
	allergens: string[];
	tags: string[];
}

export interface BaseFilters {
	minPrice?: number;
	maxPrice?: number;
	inStock?: boolean;
	isSeasonal?: boolean;
	tags?: string[];
	allergens?: string[];
}

export type EntityId = number;

export interface SearchResult<TItem> {
	items: TItem[];
	total: number;
	hasMore: boolean;
}

export interface CreateMacaronData {
	name: string;
	price: number;
	flavor: Flavor;
	filling: Filling;
	color: string;
	description: string;
	ingredients: string[];
	calories: number;
	allergens: string[];
}

export interface UpdateMacaronData extends Partial<CreateMacaronData> {
	id: EntityId;
}

export interface MacaronFilters extends BaseFilters {
	flavor?: Flavor;
	filling?: Filling;
}

export type Flavor =
| "blackCurrant"
| "bubblegum"
| "cappuccino"
| "caramel"
| "chocolate"
| "chocolateOrange"
| "coconut"
| "coffee"
| "creamyCappuccino"
| "eclairs"
| "forestNut"
| "lavender"
| "lavenderProvence"
| "lemon"
| "mangoMango"
| "matcha"
| "mint"
| "pistachio"
| "pineapple"
| "potato"
| "raspberry"
| "saltedCaramel"
| "strawberry"
| "tartCherry"
| "vanilla"
| "vanillaPlum"
| "blueberry"


export type Filling =
	| "ganache"
	| "buttercream"
	| "jam"
	| "caramel"
	| "fruit_curd"
	| "cream_cheese";
