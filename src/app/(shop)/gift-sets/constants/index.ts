import type { HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";

export const giftSetsData = [
	"birthDay",
	"newYear",
	"dayKnowledge",
	"valentinesDay",
	"childrensDay",
	"fatherlandDay",
	"womensDay",
] as const satisfies HolidaysDataKeys[];
