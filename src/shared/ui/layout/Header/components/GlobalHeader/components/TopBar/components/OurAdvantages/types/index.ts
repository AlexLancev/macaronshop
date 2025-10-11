export type OurAdvantagesKeyType =
	| "almond"
	| "cake"
	| "delivery"
	| "truckDelivery";

export type OurAdvantagesType = Record<
	OurAdvantagesKeyType,
	{
		description: string;
		iconUrl: string;
		sizeIcon: {
			width: number;
			height: number;
		};
	}
>;
