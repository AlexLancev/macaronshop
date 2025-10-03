import { macaronsApi } from "@/shared/features/dessertCategories/macarons/model/api";

export default async function Home() {
	const initialMacarons = await macaronsApi.getAllMacarons();

	console.log(initialMacarons);

	return;
}
