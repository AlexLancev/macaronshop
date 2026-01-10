'use client';

import ProductCard from "@/shared/ui/components/ProductCard";
import { useProducts } from "./hooks/useProducts";

export default function PromoProducts() {
	const allPromoProducts = useProducts();
	console.log('allPromoProducts', allPromoProducts)

	return (
		<ul className="grid grid-cols-3 gap-3">
			{allPromoProducts.map((product, idx) => (
				<ProductCard key={idx} data={product} />
			))}
		</ul>
	);
}