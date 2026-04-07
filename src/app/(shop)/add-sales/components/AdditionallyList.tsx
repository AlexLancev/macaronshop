import AdditionallyItem from "./AdditionallyItem";
import { addSalesData } from "../constants";

export default function AdditionallyList() {
	return (
		<ul>
			{addSalesData.map((additionally) => (
				<AdditionallyItem
					key={additionally.id}
					item={additionally}
				/>
			))}
		</ul>
	);
}
