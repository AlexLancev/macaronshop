import type { Flavor } from "@/app/(shop)/order-composer/store";

export interface OrderBuilderItemProps {
	orderBuilderData: Flavor;
	isRemoveItem?: boolean;
}

export interface isElementInArrayProps<T> {
	elemId: T;
	array: Array<{ id: T }>;
}

export interface isMaxQuantityReachedProps {
	flavors: Flavor[];
	id: number;
	isMaxQuantity: number;
	totalQuantity: number;
}

export interface getQuantityProps {
	flavors: Flavor[];
	id: number;
	quantity: number;
}
