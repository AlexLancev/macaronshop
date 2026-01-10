import { getAllProductsByType } from "@/shared/lib/api/products";

export default async function Eclairs() {
	const eclairs = await getAllProductsByType("eclairs");

	return (
		<div>
			<h1>Каталог эклеров</h1>
			{eclairs.length === 0 ? (
				<p>Эклеры не найдены</p>
			) : (
				<ul>
					{eclairs.map((eclair) => (
						<li key={eclair.id || eclair.slug}>
							<h2>{eclair.title}</h2>
							{eclair.price && <p>Цена: {eclair.price} ₽</p>}
							{eclair.description && <p>{eclair.description}</p>}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}