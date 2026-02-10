import Link from "next/link";

import type { HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";

import { holidaysData } from "@/shared/features/home/components/holidays/constants";
import GiftSetCategoryItem from "../GiftSetCategoryItem";

interface GiftSetCategoryListProps {
	giftSetsData: ReadonlyArray<HolidaysDataKeys>;
}

export default function GiftSetCategoryList({
	giftSetsData,
}: GiftSetCategoryListProps) {
	return (
		<ul className="grid grid-cols-4 gap-4">
			{giftSetsData.map((typeHoliday) => {
				const { id } = holidaysData[typeHoliday];

				return (
					<GiftSetCategoryItem
						key={id}
						typeHoliday={typeHoliday}
					/>
				);
			})}
		</ul>
	);
}
