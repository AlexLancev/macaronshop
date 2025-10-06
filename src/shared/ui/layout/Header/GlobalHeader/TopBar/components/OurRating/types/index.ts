export type OurRatingKeyType = "google" | "yandex" | "2gis";

export type OurRatingDataType = Record<
	OurRatingKeyType,
	{
		grade: number;
		path: string;
		name: string;
		quantity: string;
	}
>;
