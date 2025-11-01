import React from "react";

import CategoryItem from "./components/categoryItem";

const categoryKeys = [
	"giftSets",
	"assembleSet",
	"createDesign",
	"weddingProposals",
	"corporateGifts",
	"wholesaleSupplies",
] as const;

export default function Category() {
	return (
		<div className="container">
			<ul className="grid grid-cols-2 gap-4">
				{categoryKeys.map((categoryKey, idx) => (
					<CategoryItem
						key={idx}
						data={categoryKey}
					/>
				))}
			</ul>
		</div>
	);
}
