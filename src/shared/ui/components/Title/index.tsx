"use client";

import { createElement, type ReactNode } from "react";

import type { sizeRangesType, TitleSize } from "./types";

import { sizeTitleData } from "./constants";
import { useGetResponsiveValue } from "./utils";
import { cn } from "@/shared/lib/utils/cn";

interface TitlePropsType {
	headingType?: TitleSize;
	className?: string;
	children: ReactNode;
	defaultValue?: TitleSize;
	typeObj?: sizeRangesType[];
}

export const Title = ({
	children,
	className,
	headingType = "lg",
	defaultValue = "md",
}: TitlePropsType) => {
	const fontSize = useGetResponsiveValue<TitleSize>(
		defaultValue,
		sizeTitleData,
	);

	const mapTagBySize = {
		xs: "h5",
		sm: "h4",
		md: "h3",
		lg: "h2",
		xl: "h1",
	} as const;

	const mapClassNameBySize = {
		xs: "text-[18px]",
		sm: "text-[20px]",
		md: "text-[24px]",
		lg: "text-[30px]",
		xl: "text-[54px]",
	} as const;

	return createElement(
		mapTagBySize[headingType],
		{
			className: cn(
				"mb-10 text-center leading-[1.4]",
				mapClassNameBySize[fontSize],
				className,
			),
		},
		children,
	);
};
