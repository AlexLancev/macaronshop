import { CATEGORY_PATHS, CategoryPathKey } from "@/shared/lib/constants/catalog/categoryPaths";
import { ProductCardType } from "@/shared/lib/constants/catalog/shared/types";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
	data: ProductCardType;
}

export default function ProductCard({ data }: ProductCardProps) {
	const { title, description, price, typeProduct, slug, gallery, flavor, typeHoliday, productDetails } = data;

	return (
		<li className="border border-black">
			<Link href={`${CATEGORY_PATHS[typeProduct as CategoryPathKey]}/${slug}`}>
				<Image src={gallery[0]} alt={title} width={100} height={100} />
				<h3>{title}</h3>
				<p>{description}</p>
				<span>{typeHoliday}</span>
			</Link>
		</li>
	)
}
