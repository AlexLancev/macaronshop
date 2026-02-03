import Image from "next/image";
import Link from "next/link";

import type { ProductCardType } from "@/shared/lib/constants/catalog/shared/types";

import {
	CATEGORY_PATHS,
	type CategoryPathKey,
} from "@/shared/lib/constants/catalog/categoryPaths";
import PriceCard from "../PriceCard";

interface ProductCardProps {
	data: ProductCardType;
}

export default function ProductCard({ data }: ProductCardProps) {
	const {
		title,
		description,
		price,
		typeProduct,
		slug,
		gallery,
		flavor,
		typeHoliday,
		productDetails,
	} = data;

	console.log("data", data);

	return (
		<li className="flex h-full flex-col shadow-md transition-shadow duration-300 hover:shadow-lg">
			<Link
				className="stretch block flex-grow bg-white py-4"
				href={`${CATEGORY_PATHS[typeProduct as CategoryPathKey]}/${slug}`}
			>
				<Image
					className="h-auto max-h-[400px] w-full object-cover"
					src={gallery[0]}
					width={300}
					height={200}
					loading="lazy"
					alt={title}
				/>
				<div className="p-4">
					<h3 className="mb-2 font-medium text-xl">{title}</h3>
					<p className="text-gray-500">{description}</p>
				</div>
			</Link>
			<PriceCard price={price} typeHoliday={typeHoliday} />
		</li>
	);
}
