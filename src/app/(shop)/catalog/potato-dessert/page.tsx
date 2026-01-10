import { getAllProductsByType } from "@/shared/lib/api/products";

export default async function PotatoDessert() {
	const potatoDesserts = await getAllProductsByType("potato");

	return (
		<div>
			<h1>Каталог картошки</h1>
			{potatoDesserts.length === 0 ? (
				<p>Картошка не найдена</p>
			) : (
				<ul>
					{potatoDesserts.map((potato) => (
						<li key={potato.id || potato.slug}>
							<h2>{potato.title}</h2>
							{potato.price && <p>Цена: {potato.price} ₽</p>}
							{potato.description && <p>{potato.description}</p>}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
