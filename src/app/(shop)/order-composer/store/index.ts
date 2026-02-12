import { create } from "zustand";

import type { AssembleSetItem } from "../../assemble-set/types";

export type Flavor = Omit<AssembleSetItem, "description" | "image">;

interface OrderComposerStore {
	flavors: Flavor[];
	handleIncrementQuantity: (flavorId: number, quantity: number) => void;
	handleDecrementQuantity: (flavorId: number, quantity: number) => void;
	addFlavor: (flavor: Flavor) => void;
	removeFlavor: (flavorId: number) => void;
}

const useOrderComposerStore = create<OrderComposerStore>((set) => ({
	flavors: [],
	handleIncrementQuantity: (flavorId: number) =>
		set(({ flavors }) => ({
			flavors: flavors.map((flavor) =>
				flavor.id === flavorId
					? { ...flavor, quantity: flavor.quantity + 1 }
					: flavor,
			),
		})),
	handleDecrementQuantity: (flavorId: number) =>
		set(({ flavors }) => ({
			flavors: flavors.map((flavor) =>
				flavor.id === flavorId
					? { ...flavor, quantity: flavor.quantity - 1 }
					: flavor,
			),
		})),
	addFlavor: (flavor: Flavor) =>
		set(({ flavors }) => ({
			flavors: [...flavors, flavor],
		})),
	removeFlavor: (flavorId: number) =>
		set(({ flavors }) => ({
			flavors: flavors.filter(({ id }) => id !== flavorId),
		})),
}));

export default useOrderComposerStore;
