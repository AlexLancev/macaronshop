import type { Flavor } from "../../../store";

import FlavorsItem from "./FlavorsItem";

interface FlavorsListProps {
	flavors: Flavor[];
}

export default function FlavorsList({ flavors }: FlavorsListProps) {
	return (
		<ul>
			{flavors.map((flavor) => (
				<FlavorsItem
					key={flavor.id}
					flavor={flavor}
				/>
			))}
		</ul>
	);
}
