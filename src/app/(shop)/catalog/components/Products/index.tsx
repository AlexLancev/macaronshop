import React from "react";

import type { TypeProductKeys } from "@/shared/lib/constants/catalog/shared/types";

import { getAllProductsByType } from "@/shared/lib/api/products";
import ProductCard from "@/shared/ui/components/ProductCard";
import { Title } from "@/shared/ui/components/Title";
import { Container } from "@/shared/ui/components/Container";

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
		<section className="py-10">
			<Container>
				<Title headingType="xl" className="font-semibold text-4xl">
					{typeProduct}
				</Title>
				<ul className="grid grid-cols-3 gap-4">
					{products.map((product) => (
						<ProductCard
							key={product.id}
							data={product}
						/>
					))}
				</ul>
			</Container>
		</section>
	);
}
