import type { ReactNode } from "react";

import OurAdvantages from "../components/OurAdvantages";
import OurRating from "../components/OurRating";

export const topBarData = [
	"google",
	"almond",
	"yandex",
	"cake",
	"2gis",
	"delivery",
	"truckDelivery",
] as const;

export const carouselTopBarData: Record<
	(typeof topBarData)[number],
	{ component: ReactNode }
> = {
	google: {
		component: <OurRating ourRatingKey={"google"} />,
	},
	almond: {
		component: <OurAdvantages ourAdvantagesKey={"almond"} />,
	},
	yandex: {
		component: <OurRating ourRatingKey={"yandex"} />,
	},
	cake: {
		component: <OurAdvantages ourAdvantagesKey={"cake"} />,
	},
	"2gis": {
		component: <OurRating ourRatingKey={"2gis"} />,
	},
	delivery: {
		component: <OurAdvantages ourAdvantagesKey={"delivery"} />,
	},
	truckDelivery: {
		component: <OurAdvantages ourAdvantagesKey={"truckDelivery"} />,
	},
};
