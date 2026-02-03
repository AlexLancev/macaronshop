import { iconRender } from "@/shared/lib/constants/icons";
import { Button } from "../Button";
import { getUpcomingHolidays, HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";

const shopIcon = iconRender["shoppingBag"]();

const RUB_SIGN = "₽";

const DISCOUNT_PERCENT = 10;

const isHolidayMatch = (typeHoliday: HolidaysDataKeys, price: number, singleHolidayKey?: HolidaysDataKeys | null) => {
	const discountedPrice = Math.round(price * (1 - DISCOUNT_PERCENT / 100));
	if (typeHoliday === singleHolidayKey) {
		return (
			<span className="absolute top-0 left-0 text-xs text-customGrayMedium">
				<s>{price} {RUB_SIGN}</s>
			</span>
		);
	}
	return (
		<div className="grid place-items-center border-customGray border-r font-medium text-customPinkDark text-lg">
			{discountedPrice} {RUB_SIGN}
		</div>
	)
};

interface PriceCardProps {
	price: number;
	typeHoliday: HolidaysDataKeys;
}

export default function PriceCard({ price, typeHoliday }: PriceCardProps) {
	const { singleHolidayKey } = getUpcomingHolidays({
		getFirstKeyOnly: true
	});

	return (
		<div className="relative flex w-full border border-customGray bg-white [&>*]:w-1/2">
			{isHolidayMatch(typeHoliday, price, singleHolidayKey)}
			<Button
				className="rounded-none bg-transparent px-2 py-8 text-black shadow-none hover:bg-transparent hover:text-customPinkDark"
				type="button"
			>
				{shopIcon}
				Купить
			</Button>
		</div>
	);
}
