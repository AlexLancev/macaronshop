import { create } from "zustand";

import type { AssembleSetItem } from "../../assemble-set/types";

export type Flavor = Omit<AssembleSetItem, "description" | "image">;

interface OrderComposerStore {
	flavors: Flavor[];
	totalQuantity: number;
	addFlavor: (flavor: Flavor) => void;
	removeFlavor: (flavorId: number) => void;
	setTotalQuantity: (totalQuantity: number) => void;
	handleIncrementQuantity: (flavorId: number, quantity: number) => void;
	handleDecrementQuantity: (flavorId: number, quantity: number) => void;
}

const useOrderComposerStore = create<OrderComposerStore>((set) => ({
	flavors: [],
	totalQuantity: 0,
	addFlavor: (flavor: Flavor) =>
		set(({ flavors }) => ({
			flavors: [...flavors, flavor],
		})),
	removeFlavor: (flavorId: number) =>
		set(({ flavors }) => ({
			flavors: flavors.filter(({ id }) => id !== flavorId),
		})),
	setTotalQuantity: (totalQuantity: number) => set({ totalQuantity }),
	handleIncrementQuantity: (flavorId: number) =>
		set(({ flavors, totalQuantity }) => ({
			flavors: flavors.map((flavor) =>
				flavor.id === flavorId
					? { ...flavor, quantity: flavor.quantity + 1 }
					: flavor,
			),
			totalQuantity: totalQuantity + 1,
		})),
	handleDecrementQuantity: (flavorId: number) =>
		set(({ flavors }) => ({
			flavors: flavors.map((flavor) =>
				flavor.id === flavorId
					? { ...flavor, quantity: flavor.quantity - 1 }
					: flavor,
			),
		})),
}));

export default useOrderComposerStore;
