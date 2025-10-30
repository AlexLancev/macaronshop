// const initialMacarons = await macaronsApi.getAllMacarons();

// console.log(initialMacarons);

import CategoryLinks from "@/shared/features/home/components/categoryLinks";
import Hero from "@/shared/features/home/components/hero";

export default async function Home() {
	return (
		<>
			<Hero />
			<CategoryLinks />
		</>
	);
}
