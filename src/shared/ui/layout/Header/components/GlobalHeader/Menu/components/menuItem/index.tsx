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
				font="uppercase"
				href={path}
			>
				{linkName}
			</Link>
			{submenu && submenu.length !== 0 && <SubMenu data={submenu} />}
		</li>
	);
}
