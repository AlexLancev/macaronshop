import Link from "next/link";

import type { HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";

import { holidaysData } from "@/shared/features/home/components/holidays/constants";

interface GiftSetCategoryItemProps {
	typeHoliday: HolidaysDataKeys;
}

export default function GiftSetCategoryItem({
	typeHoliday,
}: GiftSetCategoryItemProps) {
	const { path, cardColor, imageUrl, title } = holidaysData[typeHoliday];

	return (
		<li>
			<Link
				href={path}
				className="flex min-h-[220px] items-end justify-center rounded-2xl p-6 text-center font-semibold text-lg text-white shadow-md"
				style={{
					background: `linear-gradient(0deg, ${cardColor} 0%, rgba(255,255,255,0) 70%), url(${imageUrl}) center/cover no-repeat`,
				}}
			>
				{title}
			</Link>
		</li>
	);
}
