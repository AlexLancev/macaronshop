import Link from "next/link";
import React from "react";

import { TelegramIcon, VkIcon } from "./constants";

const socialData = {
	telegram: {
		icon: <TelegramIcon />,
		label: "перейти в Telegram",
		path: "https://t.me/macaron_shop",
	},
	vk: {
		icon: <VkIcon />,
		label: "перейти в VK",
		path: "https://vk.com/macaronshop",
	},
} as const;

interface SocialPropsType {
	readonly data: ReadonlyArray<keyof typeof socialData>;
}

export default function Social({ data }: SocialPropsType) {
	if (!data || data.length === 0) return null;

	return (
		<ul className="flex items-center gap-x-4">
			{data.map((keyItem) => (
				<li key={keyItem}>
					<span className="visually-hidden">{socialData[keyItem].label}</span>
					<Link
						href={socialData[keyItem].path}
						title={socialData[keyItem].label}
					>
						{socialData[keyItem].icon}
					</Link>
				</li>
			))}
		</ul>
	);
}
