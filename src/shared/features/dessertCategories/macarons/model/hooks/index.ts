import { useQuery } from "@tanstack/react-query";


import { macaronsApi } from "../api";
import { useMacaronsStore } from "../store/macaronsStore";
import { useMacaronsUIStore } from "../store/uiStore";
import { Flavor } from "../../../shared/types";

// Загружаем все макаруны и сохраняем в Zustand
export const useMacarons = () => {
	const { setMacarons } = useMacaronsStore();

	return useQuery({
		queryKey: ["macarons"],
		queryFn: async () => {
			const macarons = await macaronsApi.getAllMacarons();
			setMacarons(macarons); // Сохраняем в Zustand
			return macarons;
		},
	});
};

// Конкретный макарун (только TanStack Query)
export const useMacaron = (id: number) => {
	return useQuery({
		queryKey: ["macarons", id],
		queryFn: () => macaronsApi.getMacaronById(id),
		enabled: !!id,
	});
};

// Макаруны по вкусу (только TanStack Query для свежих данных)
export const useMacaronsByFlavor = (flavor: Flavor) => {
	return useQuery({
		queryKey: ["macarons", "flavor", flavor],
		queryFn: () => macaronsApi.getMacaronsByFlavor(flavor),
	});
};

// Поиск (только TanStack Query)
export const useSearchMacarons = (query: string) => {
	return useQuery({
		queryKey: ["macarons", "search", query],
		queryFn: () => macaronsApi.searchMacarons(query),
		enabled: query.length > 0,
	});
};

// Фильтрованные макаруны (Zustand для UI фильтров)
export const useFilteredMacarons = () => {
	const macarons = useMacaronsStore((state) => state.macarons);
	const { selectedFlavor, searchQuery, sortBy } = useMacaronsUIStore();

	let filtered = macarons;

	if (selectedFlavor !== "all") {
		filtered = filtered.filter((macaron) => macaron.flavor === selectedFlavor);
	}

	if (searchQuery) {
		filtered = filtered.filter((macaron) =>
			macaron.name.toLowerCase().includes(searchQuery.toLowerCase()),
		);
	}

	// Сортировка
	return [...filtered].sort((a, b) => {
		switch (sortBy) {
			case "price":
				return a.price - b.price;
			case "name":
				return a.name.localeCompare(b.name);
			default:
				return 0;
		}
	});
};

// Популярные макаруны (из Zustand)
export const usePopularMacarons = () => {
	const macarons = useMacaronsStore((state) => state.macarons);
	return macarons.slice(0, 4);
};
