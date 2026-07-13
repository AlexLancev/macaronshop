"use client";

import { useProducts } from "./hooks/useProducts";
import ProductCard from "@/shared/ui/components/ProductCard";

export default function PromoProducts() {
	const allPromoProducts = useProducts();

	return (
		<ul className="grid grid-cols-3 gap-3">
			{allPromoProducts.map((product, idx) => (
				<ProductCard
					key={idx}
					data={product}
				/>
			))}
		</ul>
	);
}
