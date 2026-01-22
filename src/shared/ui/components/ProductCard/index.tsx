import {
	CATEGORY_PATHS,
	CategoryPathKey,
} from "@/shared/lib/constants/catalog/categoryPaths";
import { ProductCardType } from "@/shared/lib/constants/catalog/shared/types";
import Image from "next/image";
import Link from "next/link";
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

	return (
		<li className="h-full flex flex-col">
			<Link className="py-4 bg-white block flex-grow" href={`${CATEGORY_PATHS[typeProduct as CategoryPathKey]}/${slug}`}>
				<Image
					className="w-full h-auto max-h-[400px] object-cover"
					src={gallery[0]}
					width={300}
					height={200}
					loading="lazy"
					alt={title}
				/>
				<div className="p-4">
					<h3 className="text-xl font-medium mb-2">{title}</h3>
					<p className="text-gray-500">{description}</p>
				</div>
			</Link>
			<PriceCard price={price} />
		</li>
	);
}
