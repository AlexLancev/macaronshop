import Image from "next/image";

import type { AddSalesItem } from "../types";

import { Title } from "@/shared/ui/components/Title";

interface AdditionallyItemProps {
	item: AddSalesItem;
}

const RUB_SYMBOL = "₽";

export default function AdditionallyItem({
	item: { id, title, price, quantity, image },
}: AdditionallyItemProps) {
	return (
		<li className="text-center">
			<Image
				className="h-[240px] w-full object-cover"
				src={image}
				alt={title}
				width={100}
				height={100}
			/>
			<Title
				headingType="md"
				className="mb-1"
			>
				{title}
			</Title>
			<span className="font-medium text-customPinkDark">
				{price} {RUB_SYMBOL}
			</span>
		</li>
	);
}
