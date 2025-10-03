import { useQuery } from "@tanstack/react-query";

import type { Flavor } from "../../../shared/types";

import { macaronsApi } from "../api";

// Загружаем все макаруны (только TanStack Query)
export const useMacarons = () => {
	return useQuery({
		queryKey: ["macarons"],
		queryFn: () => macaronsApi.getAllMacarons(),
	});
};

// Конкретный макарун
export const useMacaron = (id: number) => {
	return useQuery({
		queryKey: ["macarons", id],
		queryFn: () => macaronsApi.getMacaronById(id),
		enabled: !!id,
	});
};

// Макаруны по вкусу
export const useMacaronsByFlavor = (flavor: Flavor) => {
	return useQuery({
		queryKey: ["macarons", "flavor", flavor],
		queryFn: () => macaronsApi.getMacaronsByFlavor(flavor),
		enabled: !!flavor,
	});
};

// Популярные макаруны
export const usePopularMacarons = () => {
	return useQuery({
		queryKey: ["macarons", "popular"],
		queryFn: () => macaronsApi.getPopularMacarons(),
	});
};

// Поиск
export const useSearchMacarons = (query: string) => {
	return useQuery({
		queryKey: ["macarons", "search", query],
		queryFn: () => macaronsApi.searchMacarons(query),
		enabled: query.length > 0,
	});
};
