import { getProductBySlug } from "@/shared/lib/api/products";
import { notFound } from "next/navigation";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function MacaronProductPage({ params }: PageProps) {
	const { slug } = await params;
	const product = await getProductBySlug(slug, 'macaron');

	if (!product) {
		notFound();
	}

	return (
		<div>
			<h1>{product.title}</h1>
			<p>{product.description}</p>
			<p>Цена: {product.price} ₽</p>
			{/* Здесь можно добавить полную страницу продукта */}
		</div>
	);
}

