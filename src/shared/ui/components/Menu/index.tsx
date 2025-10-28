import type { MainMenuType } from "./types";

import MenuItem from "./components/menuItem";
import { cn } from "@/shared/lib/utils/cn";

export default function Menu({
	data,
	ariaLabel = "Главное меню сайта",
	className,
}: MainMenuType) {
	
	return (
		<nav aria-label={ariaLabel}>
			<ul className={cn("flex items-center gap-x-12 uppercase", className)}>
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
