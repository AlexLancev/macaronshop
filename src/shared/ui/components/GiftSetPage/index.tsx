import type { HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";

import { getAllProductsByHoliday } from "@/shared/lib/api/products";
import { cn } from "@/shared/lib/utils/cn";
import ProductCard from "../ProductCard";

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
				<h1 className="mb-2 text-center font-semibold text-4xl">{title}</h1>
				<h2 className="mb-10 text-center font-medium text-xl">{subtitle}</h2>
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
