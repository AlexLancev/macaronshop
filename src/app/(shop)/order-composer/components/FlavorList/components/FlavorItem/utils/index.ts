import { Flavor } from "@/app/(shop)/order-composer/store";
import { getQuantityProps, isElementInArrayProps, isMaxQuantityReachedProps } from "../types";

export const isElementInArray: <T>(props: isElementInArrayProps<T>) => boolean = ({
	elemId,
	array,
}) => array.some(({ id: flavorId }) => flavorId === elemId);

export const isMaxQuantityReached: (props: isMaxQuantityReachedProps) => boolean = ({
	flavors,
	id,
	isMaxQuantity,
	totalQuantity,
}) => flavors.some(({ id: flavorId, quantity }: Flavor) => flavorId === id && quantity > isMaxQuantity,)
	|| totalQuantity === isMaxQuantity;

export const getQuantity: (props: getQuantityProps) => number = ({
	flavors,
	id,
	quantity,
}) => flavors.find(({ id: flavorId }: Flavor) => flavorId === id)?.quantity ?? quantity;
