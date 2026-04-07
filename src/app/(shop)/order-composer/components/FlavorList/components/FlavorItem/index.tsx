import Image from "next/image";

import type { AssembleSetItem } from "@/app/(shop)/assemble-set/types";

import OrderBuilderItem from "./components/OrderBuilderItem";
import { Title } from "@/shared/ui/components/Title";

interface FlavorItemProps {
	flavor: AssembleSetItem;
}

export default function FlavorItem({
	flavor: { id, image, flavor, description, quantity },
}: FlavorItemProps) {
	return (
		<li>
			<Image
				src={image}
				alt={flavor}
				width={100}
				height={100}
			/>
			<Title headingType="md">{flavor}</Title>
			<p>{description}</p>
			<OrderBuilderItem orderBuilderData={{ quantity, id, flavor }} />
		</li>
	);
}
