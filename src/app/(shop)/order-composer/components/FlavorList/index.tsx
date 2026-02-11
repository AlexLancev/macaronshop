import type { AssembleSetItem } from "@/app/(shop)/assemble-set/types";

import FlavorItem from "./components/FlavorItem";

interface FlavorListProps {
	flavors: AssembleSetItem[];
}

export default function FlavorList({ flavors }: FlavorListProps) {
	return (
		<ul>
			{flavors.map((flavor) => (
				<FlavorItem
					key={flavor.id}
					flavor={flavor}
				/>
			))}
		</ul>
	);
}
