import Link from "next/link";

import type { CategoryItemProps } from "../types";

import { iconRender } from "@/shared/lib/constants/icons";
import { categoryData } from "../constants";
import { getItemColor } from "../utils";

export default function CategoryItem({ data }: CategoryItemProps) {
	const { path, cardColor, title, description, icon } = categoryData[data];

	const categoryIdx = Object.keys(categoryData).indexOf(data);

	return (
		<li className="shadow-md transition-shadow duration-300 hover:shadow-lg">
			<Link
				href={path}
				className="block h-full px-22 py-6 text-center text-[#525252]"
				style={{ background: getItemColor(cardColor, categoryIdx) }}
			>
				<div className="m-auto mb-4 grid h-24 w-24 place-items-center rounded-full bg-white">
					{iconRender[icon]({ fill: cardColor })}
				</div>
				<span className="mb-1 block font-semibold text-xl">{title}</span>
				<p>{description}</p>
			</Link>
		</li>
	);
}
