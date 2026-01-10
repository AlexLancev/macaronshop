import Category from "@/shared/features/home/components/category";
import { categoryKeys } from "@/shared/features/home/components/category/constants";
import Hero from "@/shared/features/home/components/hero";
import Holidays from "@/shared/features/home/components/holidays";
import Promo from "@/shared/features/home/components/promo";

export default async function Home() {
	return (
		<>
			<Hero />
			<Category data={categoryKeys} />
			<Holidays />
			<Promo />
		</>
	);
}
