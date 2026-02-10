"use client";

import { useParams } from "next/navigation";
import { orderComposerData } from "../../constants";
import { ProductTypeKeys } from "@/shared/lib/api/products";

export default function OrderComposer() {
	const { type, quantity } = useParams();
	const flavors = orderComposerData[type as ProductTypeKeys];
	return (
		<div>
			
		</div>
	)
}
