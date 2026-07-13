import type { HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";

import { getAllProductsByHoliday } from "@/shared/lib/api/products";
import { cn } from "@/shared/lib/utils/cn";
import { Container } from "../Container";
import ProductCard from "../ProductCard";
import { Title } from "../Title";

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
			<Container>
				<Title
					headingType="xl"
					className="font-semibold text-4xl"
				>
					{title}
				</Title>
				<Title className="mb-10 text-center font-medium text-xl">
					{subtitle}
				</Title>
				<ul className="grid grid-cols-3 gap-4">
					{allProducts.map((product, idx) => (
						<ProductCard
							key={idx}
							data={product}
						/>
					))}
				</ul>
			</Container>
		</section>
	);
}
