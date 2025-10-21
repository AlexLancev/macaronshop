import Link from "next/link";

import type { SubMenuPropsType } from "../../types";

import { cn } from "@/shared/lib/utils/cn";
import { mainMenuDataCurrent } from "../../constants";

export default function SubMenu({ data, activeMenu, path }: SubMenuPropsType) {
	if (!data || data.length === 0) return null;

	return (
		<ul
			className={cn(
				"absolute top-[30px] left-0 z-[99999] flex w-max flex-col items-start gap-y-2 shadow-xl rounded-lg bg-[rgb(255,255,255)] p-4 3xl:text-2xl transition duration-300",
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
					<li key={idx} className="block hover:text-black duration-200 not-last:border-b w-full text-[#777777] text-xs border-[#e7e7e7] py-1">
						<Link href={path} >{linkName}</Link>
					</li>
				);
			})}
		</ul>
	);
}
