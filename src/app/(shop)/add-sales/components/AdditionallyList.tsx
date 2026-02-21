import { addSalesData } from "../constants";
import AdditionallyItem from "./AdditionallyItem";

export default function AdditionallyList() {
	return (
		<ul>
			{addSalesData.map((additionally) => (
				<AdditionallyItem key={additionally.id} item={additionally} />
			))}
		</ul>
	)
}