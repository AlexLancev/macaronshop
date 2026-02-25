import type { Flavor } from "../../../store";

import OrderBuilderItem from "../../FlavorList/components/FlavorItem/components/OrderBuilderItem";

interface FlavorsItemProps {
	flavor: Flavor;
}

export default function FlavorsItem({
	flavor: { quantity, id, flavor },
}: FlavorsItemProps) {
	return (
		<li>
			{flavor}
			<OrderBuilderItem
				isRemoveItem
				orderBuilderData={{
					id,
					flavor,
					quantity,
				}}
			/>
		</li>
	);
}
