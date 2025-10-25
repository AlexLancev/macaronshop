import type { MainMenuType } from "./types";

import MenuItem from "./components/menuItem";
import { cn } from "@/shared/lib/utils/cn";

export default function Menu({
	data,
	ariaLabel = "Главное меню сайта",
	className,
}: MainMenuType) {
	if (!data || data.length === 0) return null;

	return (
		<nav aria-label={ariaLabel}>
			<ul className={cn(className, "flex items-center gap-x-4")}>
				{data.map((menuItem, idx) => (
					<MenuItem
						key={idx}
						data={menuItem}
					/>
				))}
			</ul>
		</nav>
	);
}
