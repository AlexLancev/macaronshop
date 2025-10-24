"use client";

import { ChevronDown as IconChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

import type { MainMenuRenderType } from "../../types";

import { cn } from "@/shared/lib/utils/cn";
import { type MenuKeysType, mainMenuDataCurrent } from "../../constants";
import SubMenu from "../submenu";

export default function MenuItem({
	data: { keyMenu, submenu },
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

	const { path, linkName } = mainMenuDataCurrent[keyMenu];
	if (!path && !linkName) return null;

	const isSubmenu = (keyArray: readonly MenuKeysType[] | undefined) => {
		return keyArray && keyArray.length !== 0;
	};

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
					"underlineDecor flex items-center gap-x-1 text-sm text-customGreyMedium hover:text-black duration-300",
				)}
				href={path}
			>
				{linkName}
				{isSubmenu(submenu) && (
					<IconChevronDown
						className={cn(
							"duration-200 ease-in-out",
							activeMenu === path && "rotate-180",
						)}
						strokeWidth={1}
						stroke="currentColor"
					/>
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
