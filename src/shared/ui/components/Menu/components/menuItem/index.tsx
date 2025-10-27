"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import type { MainMenuRenderType } from "../../types";

import { icons } from "@/shared/constants/icons";
import { cn } from "@/shared/lib/utils/cn";
import { type MenuKeysType, mainMenuDataCurrent } from "../../constants";
import SubMenu from "../submenu";

const discountIconConfig = {
	size: 24,
	color: "rgb(231, 66, 106)",
} as const;

const chevronDownIconConfig = {
	strokeWidth: 1,
	stroke: "currentColor",
} as const;

export default function MenuItem({
	data: { keyMenu, submenu, isIcon },
}: {
	data: MainMenuRenderType;
}) {
	const [activeMenu, setActiveMenu] = useState<string | null>(null);
	const timeoutRef = useRef<number | null>(null);

	const handleMouseOver = (path: string): void => {
		if (timeoutRef.current !== null) {
			clearTimeout(timeoutRef.current);
		}
		setActiveMenu(path);
	};

	const handleMouseOut = (): void => {
		timeoutRef.current = window.setTimeout(() => {
			setActiveMenu(null);
		}, 200);
	};

	const handleFocus = (path: string): void => {
		setActiveMenu(path);
	};

	const isSubmenu = (keyArray: readonly MenuKeysType[] | undefined) => {
		return keyArray && keyArray.length !== 0;
	};

	const { path, linkName } = mainMenuDataCurrent[keyMenu];
	if (!path && !linkName) return null;

	return (
		<li
			className="relative"
			onMouseOver={() => handleMouseOver(path)}
			onMouseOut={handleMouseOut}
			onFocus={() => handleFocus(path)}
		>
			<Link
				className={cn(
					isSubmenu(submenu) && "after:content-none",
					"underlineDecor flex items-center gap-x-1.5 text-customGreyMedium text-sm duration-300 hover:text-black",
				)}
				href={path}
			>
				{linkName}

				{isIcon && icons[isIcon](discountIconConfig, "pulse")}

				{isSubmenu(submenu) &&
					icons["chevronDown"](
						chevronDownIconConfig,
						cn("duration-200 ease-in-out", activeMenu === path && "rotate-180"),
					)}
			</Link>

			{isSubmenu(submenu) && (
				<SubMenu
					data={submenu}
					activeMenu={activeMenu}
					path={path}
				/>
			)}
		</li>
	);
}
