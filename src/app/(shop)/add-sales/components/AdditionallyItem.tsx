import Link from "next/link";
import type { AddSalesItem } from "../types";
import Image from "next/image";

interface AdditionallyItemProps {
	item: AddSalesItem;
}

const RUB_SYMBOL = "₽";

export default function AdditionallyItem({ item: { id, title, price, quantity, image } }: AdditionallyItemProps) {
	return (
		<li className="text-center">
			<Image
				className="h-[240px] w-full object-cover"
				src={image}
				alt={title}
				width={100}
				height={100}
			/>
			<h3 className="mb-1">{title}</h3>
			<span className="font-medium text-customPinkDark">
				{price} {RUB_SYMBOL}
			</span>
		</li>
	)
}