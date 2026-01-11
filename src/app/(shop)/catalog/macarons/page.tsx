import Link from "next/link";
import { getAllProductsByType } from "@/shared/lib/api/products";
import ProductCard from "@/shared/ui/components/ProductCard";

export default async function Macarons() {
	const macarons = await getAllProductsByType("macaron");
	console.log(macarons)

	return (
		<section>
			<div className="container">
				<h1>Каталог макаронс</h1>
				<ul className="grid grid-cols-3 gap-3">
					{macarons.map((product, idx) => (
						<ProductCard key={idx} data={product} />
					))}
				</ul>
			</div>

		</section>
	);
}
