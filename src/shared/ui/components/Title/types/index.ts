export type TitleSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface sizeRangesType {
	min?: number;
	max?: number;
	meaning: TitleSize | number;
}
