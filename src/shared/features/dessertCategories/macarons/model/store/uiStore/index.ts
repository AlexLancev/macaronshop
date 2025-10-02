import { create } from "zustand";

import type { Macaron } from "../../types";
import { Flavor } from "@/shared/features/dessertCategories/shared/types";

interface MacaronsUIState {
	selectedMacaron: Macaron | null;
	selectedFlavor: Flavor | "all";
	searchQuery: string;
	sortBy: "name" | "price" | "popularity";
	isFiltersOpen: boolean;

	// Действия с UI
	setSelectedMacaron: (macaron: Macaron | null) => void;
	setSelectedFlavor: (flavor: Flavor | "all") => void;
	setSearchQuery: (query: string) => void;
	setSortBy: (sort: "name" | "price" | "popularity") => void;
	toggleFilters: () => void;
	resetFilters: () => void;
}

export const useMacaronsUIStore = create<MacaronsUIState>((set) => ({
	selectedMacaron: null,
	selectedFlavor: "all",
	searchQuery: "",
	sortBy: "name",
	isFiltersOpen: false,

	setSelectedMacaron: (selectedMacaron) => set({ selectedMacaron }),
	setSelectedFlavor: (selectedFlavor) => set({ selectedFlavor }),
	setSearchQuery: (searchQuery) => set({ searchQuery }),
	setSortBy: (sortBy) => set({ sortBy }),
	toggleFilters: () =>
		set((state) => ({ isFiltersOpen: !state.isFiltersOpen })),
	resetFilters: () =>
		set({
			selectedFlavor: "all",
			searchQuery: "",
			sortBy: "name",
		}),
}));
