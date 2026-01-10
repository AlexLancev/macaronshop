export const CATEGORY_PATHS = {
	macaron: '/catalog/macarons',
	eclairs: '/catalog/eclairs',
	potatoDessert: '/catalog/potato-dessert',
	waferRolls: '/catalog/wafer-rolls',
} as const;

export type CategoryPathKey = keyof typeof CATEGORY_PATHS;

