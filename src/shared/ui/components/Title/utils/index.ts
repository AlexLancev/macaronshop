import type { sizeRangesType } from "../types";

import { useGettingWindowWidth } from "@/shared/lib/hooks/useGettingWindowWidth";

export const useGetResponsiveValue = <T>(
	defaultValue: T,
	typeObj: sizeRangesType[],
): T => {
	const innerWidth = useGettingWindowWidth();

	if (typeof defaultValue === "number" && defaultValue <= 0) {
		console.error("Некорректное значение в defaultValue");
	}

	for (const { min, max, meaning } of typeObj) {
		if ((!min || innerWidth >= min) && (!max || innerWidth <= max)) {
			return meaning as T;
		}
	}

	return defaultValue;
};
