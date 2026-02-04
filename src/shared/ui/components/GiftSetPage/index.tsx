import { HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";
import { getAllProductsByHoliday } from "@/shared/lib/api/products";
import ProductCard from "../ProductCard";
import { discountedPrice } from "../PriceCard/utils/discountedPrice";

interface GiftSetPageProps {
	title: string;
	subtitle: string;
	typeHoliday: HolidaysDataKeys;
}

export default async function GiftSetPage({ title, subtitle, typeHoliday }: GiftSetPageProps) {
	const allProducts = await getAllProductsByHoliday(typeHoliday);
	const products = allProducts.sort((a, b) => b.price - a.price);

	return (
		<section className="py-10">
			<div className="container">
				<h1 className="text-4xl font-semibold text-center mb-2">{title}</h1>
				<h2 className="text-xl font-medium text-center mb-10">{subtitle}</h2>
				<ul className="grid grid-cols-3 gap-4">
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