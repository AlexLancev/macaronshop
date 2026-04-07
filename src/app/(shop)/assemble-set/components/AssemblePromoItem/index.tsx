import Image from "next/image";
import Link from "next/link";

import type { AssemblePromoItem } from "../../types";
import { Title } from "@/shared/ui/components/Title";

interface AssemblePromoItemProps {
	data: AssemblePromoItem;
}

const RUB_SYMBOL = "₽";

export default function AssembleItem({
	data: { type, title, price, image, quantity },
}: AssemblePromoItemProps) {
	return (
		<li className="text-center">
			<Link
				href={`/order-composer/${type}/${quantity}`}
				className="mb-1 bg-transparent shadow-none hover:bg-transparent"
			>
				<Image
					className="h-[240px] w-full object-cover"
					src={image}
					alt={title}
					width={100}
					height={100}
				/>
			</Link>
			<Title headingType="md" className="mb-1">{title}</Title>
			<span className="font-medium text-customPinkDark">
				{price} {RUB_SYMBOL}
			</span>
		</li>
	);
}
