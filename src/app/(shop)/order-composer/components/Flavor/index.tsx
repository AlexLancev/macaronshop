"use client";

import { useParams } from "next/navigation";

import type { ProductTypeKeys } from "@/shared/lib/api/products";

import { orderComposerData } from "../../constants";
import FlavorList from "../FlavorList";

export default function Flavor() {
	const { category } = useParams<{ category: ProductTypeKeys }>();
	const flavors = orderComposerData[category];

	return <FlavorList flavors={flavors} />;
}
