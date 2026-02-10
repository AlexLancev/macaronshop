import type { JSX } from "react";

import type { HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";

import { discountedPrice } from "./discountedPrice";

const RUB_SIGN = "₽";
const DISCOUNT_PERCENT = 12;

export const isHolidayMatch = (
	typeHoliday: HolidaysDataKeys,
	price: number,
	singleHolidayKey?: HolidaysDataKeys | null,
): JSX.Element => {
	if (typeHoliday === singleHolidayKey) {
		const discountedSum = discountedPrice(price, DISCOUNT_PERCENT);

		return (
			<div className="grid place-items-center">
				<span className="text-customGrayMedium text-sm">
					<s>
						{price} {RUB_SIGN}
					</s>
				</span>
				<div className="grid place-items-center font-medium text-customPinkDark text-lg">
					{discountedSum} {RUB_SIGN}
				</div>
			</div>
		);
	}
	return (
		<div className="grid place-items-center font-medium text-customPinkDark text-lg">
			{price} {RUB_SIGN}
		</div>
	);
};
