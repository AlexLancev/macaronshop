"use client";

import Link from "next/link";
import { useRef, useState } from "react";

import type { MainMenuRenderType } from "../../types";

import { iconRender } from "@/shared/lib/constants/icons";
import { cn } from "@/shared/lib/utils/cn";
import { type MenuKeysType, mainMenuDataCurrent } from "../../constants";
import SubMenu from "../submenu";
import { chevronDownIconConfig, discountIconConfig } from "./constants";

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

	return (
		<li
			className="relative"
			onMouseOver={() => handleMouseOver(path)}
			onMouseOut={handleMouseOut}
			onFocus={() => handleFocus(path)}
		>
			<Link
				className={cn(
					"underlineDecor flex items-center gap-x-1.5 text-customGreyMedium text-sm duration-300 hover:text-black",
					isSubmenu(submenu) && "after:content-none",
				)}
				href={path}
			>
				{linkName}

				{isIcon && iconRender[isIcon](discountIconConfig, "pulse")}

				{isSubmenu(submenu) &&
					iconRender["chevronDown"](
						chevronDownIconConfig,
						cn("duration-200 ease-in-out", activeMenu === path && "rotate-180"),
					)}
			</Link>

			{submenu && isSubmenu(submenu) && (
				<SubMenu
					data={submenu}
					activeMenu={activeMenu}
					path={path}
				/>
			)}
		</li>
	);
}
