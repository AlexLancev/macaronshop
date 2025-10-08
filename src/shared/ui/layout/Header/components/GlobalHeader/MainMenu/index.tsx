import Link from "next/link";

import { cn } from "@/shared/lib/utils/cn";

interface SubmenuDataType {
	path: string;
	linkName: string;
}

interface MainMenuDataType {
	path: string;
	linkName: string;
	icon: string;
	subMenu: SubmenuDataType[];
}

interface MainMenuType {
	mainMenuData: MainMenuDataType[];
	ariaLabel?: string;
	className?: string;
}

const MainMenuData = [
	{
		path: "",
		linkName: "",
		icon: "",
		submenu: [
			{
				path: "",
				linkName: "",
			},
		],
	},
];

const mainMenuDataDefault = {
	path: "",
	linkName: "",
	icon: "",
	submenu: [
		{
			path: "",
			linkName: "",
		},
	],
};

export default function MainMenu({
	mainMenuData,
	ariaLabel = 'Главное меню сайта',
	className,
}: MainMenuType) {
	if (!mainMenuData || mainMenuData.length === 0) return null;

	return (
		<nav aria-label={ariaLabel}>
			<ul className={cn(className, "flex items-center gap-x-4")}>
				{mainMenuData.map(({ path, linkName }, idx) => {

					if (!path && !linkName) return null;

					return (
						<li key={idx}>
							<Link
								font="uppercase"
								href={path}
							>
								{linkName}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
