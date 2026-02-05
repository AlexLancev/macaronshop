import { holidaysData } from "@/shared/features/home/components/holidays/constants";
import { HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";
import Link from "next/link";

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
				className="flex items-end justify-center text-lg font-semibold p-6 text-center text-white min-h-[220px] rounded-2xl shadow-md"
				style={{
					background: `linear-gradient(0deg, ${cardColor} 0%, rgba(255,255,255,0) 70%), url(${imageUrl}) center/cover no-repeat`,
				}}
			>
				{title}
			</Link>
		</li>
	);
}
