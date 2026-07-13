import { notFound } from "next/navigation";

import { getProductBySlug } from "@/shared/lib/api/products";
import { Title } from "@/shared/ui/components/Title";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function PotatoDessertProductPage({ params }: PageProps) {
	const { slug } = await params;
	const product = await getProductBySlug(slug, "potato");

	if (!product) {
		notFound();
	}

	return (
		<div>
			<Title
				headingType="xl"
				className="font-semibold text-4xl"
			>
				{product.title}
			</Title>
			<p>{product.description}</p>
			<p>Цена: {product.price} ₽</p>
			{/* Здесь можно добавить полную страницу продукта */}
		</div>
	);
}
