"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useParams } from "next/navigation";

import useOrderComposerStore, {
} from "@/app/(shop)/order-composer/store";
import { Button } from "@/shared/ui/components/Button";
import Quantity from "../quantity";
import { OrderBuilderItemProps } from "../../types";
import { getQuantity, isElementInArray, isMaxQuantityReached } from "../../utils";

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

	const handleIncrement = () => {
		if (isMaxQuantityReached({ flavors, id, isMaxQuantity, totalQuantity })) return;
		if (isElementInArray({ elemId: id, array: flavors })) {
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
		if (flavors.length > 1 && isElementInArray({ elemId: id, array: flavors })) {
			setTotalQuantity(totalQuantity - 1);
			return removeFlavor(id);
		}
	};

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
