import Link from "next/link";

import type { SubMenuPropsType } from "../../types";

import { cn } from "@/shared/lib/utils/cn";
import { mainMenuDataCurrent } from "../../constants";

export default function SubMenu({ data, activeMenu, path }: SubMenuPropsType) {
	if (!data || data.length === 0) return null;

	return (
		<ul
			className={cn(
				"absolute top-[30px] left-0 z-[99999] flex w-max flex-col items-start gap-y-2 rounded-lg bg-[rgb(255,255,255)] p-4 3xl:text-2xl shadow-xl transition duration-300",
				{
					"visible opacity-100": activeMenu === path,
					"invisible opacity-0": activeMenu !== path,
				},
			)}
		>
			{data.map((keyItem, idx) => {
				const { path, linkName } = mainMenuDataCurrent[keyItem];
				if (!path && !linkName) return null;

				return (
					<li
						key={idx}
						className="w-full border-[rgb(231,231,231)] not-last:border-b"
					>
						<Link
							href={path}
							className="inline-block py-1 text-[rgb(119,119,119)] duration-200 hover:text-black"
						>
							{linkName}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
