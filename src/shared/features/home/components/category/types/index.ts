import type { categoryData } from "../constants";

export type CategorysKeys = keyof typeof categoryData;

export interface CategoryItemProps {
	data: CategorysKeys;
}
