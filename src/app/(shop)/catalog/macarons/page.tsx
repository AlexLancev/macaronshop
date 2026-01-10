import Link from "next/link";
import { getAllProductsByType } from "@/shared/lib/api/products";

export default async function Macarons() {
	const macarons = await getAllProductsByType("macaron");
	console.log(macarons)

	return (
		<div>
			<h1>Каталог макарунов</h1>
			{macarons.length === 0 ? (
				<p>Макаруны не найдены</p>
			) : (
				<ul>
					{macarons.map((macaron) => (
						<li key={macaron.id || macaron.slug}>
							<Link href={`/catalog/macarons/${macaron.slug}`}>
								<h2>{macaron.title}</h2>
								{macaron.price && <p>Цена: {macaron.price} ₽</p>}
								{macaron.description && <p>{macaron.description}</p>}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
