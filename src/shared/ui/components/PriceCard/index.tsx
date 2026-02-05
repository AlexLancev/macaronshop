import { iconRender } from "@/shared/lib/constants/icons";
import { Button } from "../Button";
import {
	getUpcomingHolidays,
	HolidaysDataKeys,
} from "@/shared/features/home/components/holidays/utils";
import { isHolidayMatch } from "./utils/isHolidayMatch";

interface PriceCardProps {
	price: number;
	typeHoliday: HolidaysDataKeys;
}

const shopIcon = iconRender["shoppingBag"]();

export default function PriceCard({ price, typeHoliday }: PriceCardProps) {
	const { singleHolidayKey } = getUpcomingHolidays({
		getFirstKeyOnly: true,
	});

	return (
		<div className="flex items-center w-full border border-customGray bg-white [&>*]:w-1/2">
			{isHolidayMatch(typeHoliday, price, singleHolidayKey)}
			<Button
				className="rounded-none border-l border-customGray bg-transparent px-2 py-8 text-black shadow-none hover:bg-transparent hover:text-customPinkDark"
				type="button"
			>
				{shopIcon}
				Купить
			</Button>
		</div>
	);
}
