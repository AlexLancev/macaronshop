"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "@/shared/ui/components/Button";
import Quantity from "../quantity";
import useOrderComposerStore, { Flavor } from "@/app/(shop)/order-composer/store";
import { useParams } from "next/navigation";

interface OrderBuilderItemProps {
	orderBuilderData: Flavor;
}

const isElementInArray: <T>(elem: T, array: T[]) => boolean = (elem, array) => array.some((item) => item === elem);

export default function OrderBuilderItem({ orderBuilderData: { quantity, id, flavor } }: OrderBuilderItemProps) {
	const { addFlavor, removeFlavor, flavors, handleIncrementQuantity, handleDecrementQuantity } = useOrderComposerStore();
	const { id: maxQuantity } = useParams();
	const isMaxQuantity = Number(maxQuantity);
	
	const handleIncrement = () => {
		if (flavors.some((flavor: Flavor) => flavor.id === id && flavor.quantity >= isMaxQuantity), flavors.reduce((acc, flavor) => acc + flavor.quantity, 0) === isMaxQuantity) return;
		if (isElementInArray(id, flavors.map((flavor) => flavor.id))) {
			console.log(flavors.find((flavor: Flavor) => flavor.id === id)?.quantity)
			return handleIncrementQuantity(id, quantity + 1);
		};
		addFlavor({ id, quantity: quantity + 1, flavor });
	}

	const handleDecrement = () => {
		if (flavors.some((flavor: Flavor) => flavor.id === id && flavor.quantity > 1)) {
			return handleDecrementQuantity(id, quantity - 1);
		}
		removeFlavor(id);
	}
	// console.log(flavors);

	return (
		<>
			<Button
				variant="outline"
				onClick={handleDecrement}
			>
				<MinusIcon />
			</Button>
			<Quantity
				quantity={
					flavors.find((flavor: Flavor) => flavor.id === id)?.quantity ?? quantity
				}
			/>
			<Button
				variant="outline"
				onClick={handleIncrement}
			>
				<PlusIcon />
			</Button>
		</>
	);
}
