import { isHolidayMatch } from "./utils/isHolidayMatch";
import {
	getUpcomingHolidays,
	type HolidaysDataKeys,
} from "@/shared/features/home/components/holidays/utils";
import { iconRender } from "@/shared/lib/constants/icons";
import { Button } from "../Button";

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
		<div className="flex w-full items-center border border-customGray bg-white [&>*]:w-1/2">
			{isHolidayMatch(typeHoliday, price, singleHolidayKey)}
			<Button
				className="rounded-none border-customGray border-l bg-transparent px-2 py-8 text-black shadow-none hover:bg-transparent hover:text-customPinkDark"
				type="button"
			>
				{shopIcon}
				Купить
			</Button>
		</div>
	);
}
