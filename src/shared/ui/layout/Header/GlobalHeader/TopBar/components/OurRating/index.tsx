import Link from "next/link";

import type { OurRatingKeyType } from "./types";

import { ourRatingData, ourRatingDefault } from "./constants";

const OurRating = ({ ourRatingKey }: { ourRatingKey: OurRatingKeyType }) => {
	const { path, name, grade, quantity } =
		ourRatingData[ourRatingKey] ?? ourRatingDefault;

	return (
		<div
			flex="~ row"
			items="center"
			gap="x-2"
		>
			Наш рейтинг в
			<Link
				text="blue lg"
				href={path}
			>
				{name}
			</Link>
			<span font="500">{grade}</span>
			на основании
			<span font="500">{quantity}+</span>
			отзывов
		</div>
	);
};

export default OurRating;
