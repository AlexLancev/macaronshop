import Link from "next/link";

import type { MainMenuRenderType } from "../../types";

import { mainMenuDataCurrent } from "../../constants";
import SubMenu from "../submenu";

export default function MenuItem({
	data: { keyMenu, submenu },
}: {
	data: MainMenuRenderType;
}) {
	const { path, linkName } = mainMenuDataCurrent[keyMenu];
	if (!path && !linkName) return null;

	return (
		<li>
			<Link
				className="text-sm"
				href={path}
			>
				{linkName}
			</Link>
			<ChevronDown strokeWidth={1} />
			{submenu && submenu.length !== 0 && <SubMenu data={submenu} />}
		</li>
	);
}
