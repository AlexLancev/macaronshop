import Link from "next/link";

import type { OurRatingKeyType } from "./types";

import { ourRatingData, ourRatingDefault } from "./constants";

const OurRating = ({ ourRatingKey }: { ourRatingKey: OurRatingKeyType }) => {
	const { path, name, grade, quantity } =
		ourRatingData[ourRatingKey] ?? ourRatingDefault;

	return (
		<div className="flex items-center gap-x-2">
			Наш рейтинг в
			<Link
				className="text-[rgb(0,0,255)] text-lg"
				href={path}
			>
				{name}
			</Link>
			<span className="font-bold">{grade}</span>
			на основании
			<span className="font-medium">{quantity}+</span>
			отзывов
		</div>
	);
};

export default OurRating;
