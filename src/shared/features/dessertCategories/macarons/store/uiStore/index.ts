import { create } from 'zustand';
import { Macaron, MacaronFlavor } from '../../types';

interface MacaronsUIState {
  selectedMacaron: Macaron | null;
  selectedFlavor: MacaronFlavor | 'all';
  searchQuery: string;
  sortBy: 'name' | 'price' | 'popularity';
  isFiltersOpen: boolean;
  
  // Действия с UI
  setSelectedMacaron: (macaron: Macaron | null) => void;
  setSelectedFlavor: (flavor: MacaronFlavor | 'all') => void;
  setSearchQuery: (query: string) => void;
  setSortBy: (sort: 'name' | 'price' | 'popularity') => void;
  toggleFilters: () => void;
  resetFilters: () => void;
}

export const useMacaronsUIStore = create<MacaronsUIState>((set) => ({
  selectedMacaron: null,
  selectedFlavor: 'all',
  searchQuery: '',
  sortBy: 'name',
  isFiltersOpen: false,
  
  setSelectedMacaron: (selectedMacaron) => set({ selectedMacaron }),
  setSelectedFlavor: (selectedFlavor) => set({ selectedFlavor }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setSortBy: (sortBy) => set({ sortBy }),
  toggleFilters: () => set((state) => ({ isFiltersOpen: !state.isFiltersOpen })),
  resetFilters: () => set({ 
    selectedFlavor: 'all', 
    searchQuery: '', 
    sortBy: 'name' 
  }),
}));