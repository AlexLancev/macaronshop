import { getAllProductsByType } from "@/shared/lib/api/products";
import { TypeProductKeys } from "@/shared/lib/constants/catalog/shared/types";
import ProductCard from "@/shared/ui/components/ProductCard";
import React from "react";

interface ProductsProps {
	typeProduct: string;
	product: TypeProductKeys;
}

export default async function Products({
	typeProduct,
	product,
}: ProductsProps) {
	const products = await getAllProductsByType(product);

	return (
		<section>
			<div className="container">
				<h1>{typeProduct}</h1>
				<ul className="grid grid-cols-3 gap-3">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							data={product}
						/>
					))}
				</ul>
			</div>
		</section>
	);
}
