import { benefitsData } from "../../constants";
import BenefitItem from "../BenefitItem";

export default function BenefitsList() {
	return (
		<ul>
			{benefitsData.map((benefit) => (
				<BenefitItem
					key={benefit.id}
					benefit={benefit}
				/>
			))}
		</ul>
	);
}
