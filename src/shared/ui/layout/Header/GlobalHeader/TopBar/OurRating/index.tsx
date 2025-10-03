import Link from "next/link";

type OurRatingKeyType = "google" | "yandex" | "2gis";

type OurRatingDataType = Record<
	OurRatingKeyType,
	{
		grade: number;
		path: string;
		name: string;
		quantity: string;
	}
>;

const ourRatingData: OurRatingDataType = {
	google: {
		grade: 4.7,
		path: "",
		name: "google",
		quantity: "17",
	},
	yandex: {
		grade: 4.5,
		path: "",
		name: "yandex",
		quantity: "99",
	},
	"2gis": {
		grade: 4.9,
		path: "",
		name: "2gis",
		quantity: "54",
	},
};

const OurRatingDefault = {
	grade: 0,
	path: "/",
	name: "",
	quantity: "",
};

const OurRating = ({ OurRatingKey }: { OurRatingKey: OurRatingKeyType }) => {
	const { path, name, grade, quantity } =
		ourRatingData[OurRatingKey] ?? OurRatingDefault;

	return (
		<div className="flex">
			Наш рейтинг в <Link href={path}>{name}</Link> {grade} {quantity} отзывов
		</div>
	);
};

export default OurRating;
