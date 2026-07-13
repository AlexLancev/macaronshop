"use client";

import { useParams } from "next/navigation";

import FlavorsList from "./components/FlavorsList";
import ProceedNotice from "./components/ProceedNotice";
import { Title } from "@/shared/ui/components/Title";
import useOrderComposerStore from "../../store";

export default function OrderComposer() {
	const { flavors, totalQuantity } = useOrderComposerStore();
	const { id: maxQuantity } = useParams<{ id: string }>();

	return (
		<div>
			<Title>
				Количество вкусов: {totalQuantity} из {maxQuantity}
			</Title>
			<FlavorsList flavors={flavors} />
			<ProceedNotice maxQuantity={maxQuantity} />
		</div>
	);
}
