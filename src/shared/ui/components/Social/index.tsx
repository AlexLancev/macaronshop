import Link from "next/link";
import React from "react";

import { socialData } from "./constants";
import { icons } from "@/shared/constants/icons";

interface SocialPropsType {
	readonly data: ReadonlyArray<keyof typeof socialData>;
}

export default function Social({ data }: SocialPropsType) {
	if (!data || data.length === 0) return null;

	return (
		<ul className="flex items-center gap-x-4">
			{data.map((keyItem) => {
				const { label, path, icon } = socialData[keyItem];

				return (
					<li key={keyItem}>
						<span className="visually-hidden">{label}</span>
						<Link
							href={path}
							title={label}
							className="text-customGreyMedium duration-300 hover:text-black"
						>
							{icon && icons[icon]()}
						</Link>
					</li>
				)
			})}
		</ul>
	);
}
