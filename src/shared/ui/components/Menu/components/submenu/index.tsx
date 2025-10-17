import Link from "next/link";

import type { SubMenuPropsType } from "../../types";

import { mainMenuDataCurrent } from "../../constants";

export default function SubMenu({ data }: SubMenuPropsType) {
	if (!data || data.length === 0) return null;

	return (
		<ul className="hidden">
			{data.map((keyItem, idx) => {
				const { path, linkName } = mainMenuDataCurrent[keyItem];
				if (!path && !linkName) return null;

				return (
					<li key={idx}>
						<Link href={path}>{linkName}</Link>
					</li>
				);
			})}
		</ul>
	);
}
