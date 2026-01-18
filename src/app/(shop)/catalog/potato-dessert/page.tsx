import { getAllProductsByType } from "@/shared/lib/api/products";
import Products from "../components/Products";

export default async function PotatoDessert() {
	return (
		<Products
			typeProduct="Десерт картошка"
			product="potato"
		/>
	);
}
