import type { AssemblePromoItem } from "../../types";

import AssembleItem from "../AssemblePromoItem";

interface AssembleSetListProps {
	assembleSetData: ReadonlyArray<AssemblePromoItem>;
}

export default function AssembleSetList({
	assembleSetData,
}: AssembleSetListProps) {
	return (
		<ul className="grid grid-cols-4 gap-4">
			{assembleSetData.map((setItem) => {
				const { id } = setItem;

				return (
					<AssembleItem
						key={id}
						data={setItem}
					/>
				);
			})}
		</ul>
	);
}
