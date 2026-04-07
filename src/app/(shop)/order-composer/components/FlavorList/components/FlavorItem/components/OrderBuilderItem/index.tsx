"use client";

import { useParams } from "next/navigation";

import type { OrderBuilderItemProps } from "../../types";

import DeleteFlavorButton from "./components/DeleteFlavorButton";
import HandleDecrement from "./components/HandleDecrement";
import HandleIncrement from "./components/HandleIncrement";
import useOrderComposerStore, {} from "@/app/(shop)/order-composer/store";
import {
	getQuantity,
	isElementInArray,
	isMaxQuantityReached,
} from "../../utils";
import Quantity from "../quantity";

export default function OrderBuilderItem({
	orderBuilderData: { quantity, id, flavor },
	isRemoveItem = false,
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

	const handleIncrement = () => {
		if (isMaxQuantityReached({ flavors, id, isMaxQuantity, totalQuantity }))
			return;
		if (isElementInArray({ elemId: id, array: flavors })) {
			setTotalQuantity(totalQuantity);
			return handleIncrementQuantity(id, quantity + 1);
		}
		setTotalQuantity(totalQuantity + 1);
		addFlavor({ id, quantity: quantity + 1, flavor });
	};

	const handleDecrement = () => {
		if (
			isMaxQuantityReached({ flavors, id, isMaxQuantity: 1, totalQuantity })
		) {
			setTotalQuantity(totalQuantity - 1);
			return handleDecrementQuantity(id, quantity - 1);
		}
		if (
			flavors.length > 1 &&
			isElementInArray({ elemId: id, array: flavors })
		) {
			setTotalQuantity(totalQuantity - 1);
			return removeFlavor(id);
		}
	};

	const handleRemove = () => {
		setTotalQuantity(totalQuantity - quantity);
		removeFlavor(id);
	};

	return (
		<>
			<HandleDecrement handleDecrement={handleDecrement} />
			<Quantity quantity={getQuantity({ flavors, id, quantity })} />
			<HandleIncrement handleIncrement={handleIncrement} />
			{isRemoveItem && <DeleteFlavorButton handleDelete={handleRemove} />}
		</>
	);
}
