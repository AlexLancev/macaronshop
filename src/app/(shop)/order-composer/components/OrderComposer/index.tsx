"use client";

import { useParams } from "next/navigation";
import useOrderComposerStore from "../../store";

export default function OrderComposer() {
	const { flavors, totalQuantity } = useOrderComposerStore();

	console.log(flavors, totalQuantity);
	return <div></div>;
}
