import { create } from 'zustand';
import { Macaron } from '../../types';

interface MacaronsDataState {
  macarons: Macaron[];
  isLoading: boolean;
  error: string | null;
  
  // Действия с данными
  setMacarons: (macarons: Macaron[]) => void;
  addMacaron: (macaron: Macaron) => void;
  updateMacaron: (id: number, macaron: Partial<Macaron>) => void;
  removeMacaron: (id: number) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export const useMacaronsStore = create<MacaronsDataState>((set) => ({
  macarons: [],
  isLoading: false,
  error: null,
  
  setMacarons: (macarons) => set({ macarons }),
  
  addMacaron: (macaron) => 
    set((state) => ({ 
      macarons: [...state.macarons, macaron] 
    })),
    
  updateMacaron: (id, updatedMacaron) =>
    set((state) => ({
      macarons: state.macarons.map((macaron) =>
        macaron.id === id ? { ...macaron, ...updatedMacaron } : macaron
      ),
    })),
    
  removeMacaron: (id) =>
    set((state) => ({
      macarons: state.macarons.filter((macaron) => macaron.id !== id),
    })),
    
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
}));