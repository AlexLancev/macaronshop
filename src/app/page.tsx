// const initialMacarons = await macaronsApi.getAllMacarons();

import Category from "@/shared/features/home/components/category";
import { categoryKeys } from "@/shared/features/home/components/category/constants";
import Hero from "@/shared/features/home/components/hero";

export default async function Home() {
	return (
		<>
			<Hero />
			<Category data={categoryKeys} />
		</>
	);
}
