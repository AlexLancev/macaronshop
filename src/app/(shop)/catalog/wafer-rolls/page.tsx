import { getAllProductsByType } from "@/shared/lib/api/products";

export default async function WaferRolls() {
	const waferRolls = await getAllProductsByType("waferRolls");

	return (
		<div>
			<h1>Каталог вафельных трубочек</h1>
			{waferRolls.length === 0 ? (
				<p>Вафельные трубочки не найдены</p>
			) : (
				<ul>
					{waferRolls.map((waferRoll) => (
						<li key={waferRoll.id || waferRoll.slug}>
							<h2>{waferRoll.title}</h2>
							{waferRoll.price && <p>Цена: {waferRoll.price} ₽</p>}
							{waferRoll.description && <p>{waferRoll.description}</p>}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}