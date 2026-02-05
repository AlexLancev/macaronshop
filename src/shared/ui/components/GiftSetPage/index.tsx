import { HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";
import { getAllProductsByHoliday } from "@/shared/lib/api/products";
import ProductCard from "../ProductCard";
import { cn } from "@/shared/lib/utils/cn";

interface GiftSetPageProps {
	title: string;
	subtitle: string;
	className?: string;
	typeHoliday?: HolidaysDataKeys;
}

export default async function GiftSetPage({
	title,
	subtitle,
	className,
	typeHoliday,
}: GiftSetPageProps) {
	const allProducts = await getAllProductsByHoliday(typeHoliday);

	return (
		<section className={cn("py-10", className)}>
			<div className="container">
				<h1 className="text-4xl font-semibold text-center mb-2">{title}</h1>
				<h2 className="text-xl font-medium text-center mb-10">{subtitle}</h2>
				<ul className="grid grid-cols-3 gap-4">
					{allProducts.map((product, idx) => (
						<ProductCard
							key={idx}
							data={product}
						/>
					))}
				</ul>
			</div>
		</section>
	);
}
