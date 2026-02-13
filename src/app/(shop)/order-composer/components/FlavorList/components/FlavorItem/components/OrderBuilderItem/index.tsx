"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useParams } from "next/navigation";

import useOrderComposerStore, {
	type Flavor,
} from "@/app/(shop)/order-composer/store";
import { Button } from "@/shared/ui/components/Button";
import Quantity from "../quantity";

interface OrderBuilderItemProps {
	orderBuilderData: Flavor;
}

interface isElementInArrayProps<T> {
	elem: T;
	array: T[];
}

interface isMaxQuantityReachedProps {
	flavors: Flavor[];
	id: number;
	isMaxQuantity: number;
	totalQuantity: number;
}

interface getQuantityProps {
	flavors: Flavor[];
	id: number;
	quantity: number;
}

const isElementInArray: <T>(props: isElementInArrayProps<T>) => boolean = ({
	elem,
	array,
}) => array.some((item) => item === elem);

const isMaxQuantityReached: (props: isMaxQuantityReachedProps) => boolean = ({
	flavors,
	id,
	isMaxQuantity,
	totalQuantity,
}) => flavors.some(({ id: flavorId, quantity }: Flavor) => flavorId === id && quantity > isMaxQuantity,)
	|| totalQuantity === isMaxQuantity;

const getQuantity: (props: getQuantityProps) => number = ({
	flavors,
	id,
	quantity,
}) => flavors.find(({ id: flavorId }: Flavor) => flavorId === id)?.quantity ?? quantity;

export default function OrderBuilderItem({
	orderBuilderData: { quantity, id, flavor },
}: OrderBuilderItemProps) {
	const {
		flavors,
		totalQuantity,
		addFlavor,
		removeFlavor,
		setTotalQuantity,
		handleIncrementQuantity,
		handleDecrementQuantity,
	} = useOrderComposerStore();
	const { id: maxQuantity } = useParams();
	const isMaxQuantity = Number(maxQuantity);

	console.log(totalQuantity)

	const handleIncrement = () => {
		if (isMaxQuantityReached({ flavors, id, isMaxQuantity, totalQuantity })) return;
		if (isElementInArray({ elem: id, array: flavors.map(({ id }) => id) })) {
			setTotalQuantity(totalQuantity);
			return handleIncrementQuantity(id, quantity + 1);
		}
		setTotalQuantity(totalQuantity + 1);
		addFlavor({ id, quantity: quantity + 1, flavor });
	};

	const handleDecrement = () => {
		if (isMaxQuantityReached({ flavors, id, isMaxQuantity: 1, totalQuantity })) {
			setTotalQuantity(totalQuantity - 1);
			return handleDecrementQuantity(id, quantity - 1);
		}
		removeFlavor(id);
	};
	console.log(flavors);

	return (
		<>
			<Button
				variant="outline"
				onClick={handleDecrement}
			>
				<MinusIcon />
			</Button>
			<Quantity quantity={getQuantity({ flavors, id, quantity })} />
			<Button
				variant="outline"
				onClick={handleIncrement}
			>
				<PlusIcon />
			</Button>
		</>
	);
}
