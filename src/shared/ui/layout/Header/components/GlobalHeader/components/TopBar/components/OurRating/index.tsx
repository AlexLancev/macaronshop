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
				className="text-customBlue text-lg"
				href={path}
			>
				{name}
			</Link>
			<span className="font-medium">{grade}</span>
			на основании
			<span className="font-medium">{quantity}+</span>
			отзывов
		</div>
	);
};

export default OurRating;
