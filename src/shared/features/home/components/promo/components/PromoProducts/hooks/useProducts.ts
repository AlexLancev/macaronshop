"use client";

import { useQuery } from "@tanstack/react-query";

import type { ProductCardType } from "@/shared/lib/constants/catalog/shared/types";

import { getUpcomingHolidays } from "@/shared/features/home/components/holidays/utils";

export const useProducts = (): ProductCardType[] => {
	const { singleHolidayKey } = getUpcomingHolidays({ getFirstKeyOnly: true });

	const { data: products = [] } = useQuery({
		queryKey: ["products", "holiday", singleHolidayKey],
		queryFn: async () => {
			if (!singleHolidayKey) {
				return [];
			}

			const response = await fetch(`/api/products/holiday/${singleHolidayKey}`);

			if (!response.ok) {
				throw new Error("Failed to fetch products");
			}

			return response.json() as Promise<ProductCardType[]>;
		},
		enabled: !!singleHolidayKey,
	});

	return products;
};
