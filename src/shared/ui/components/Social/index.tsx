import React from 'react'
import { TelegramIcon, VkIcon } from './constants'

const socialData = {
	telegram: {
		icon: <TelegramIcon />,
		label: 'Telegram',
	},
	vk: {
		icon: <VkIcon />,
		label: 'VK',
	},
} as const

interface SocialPropsType {
	readonly data: ReadonlyArray<keyof typeof socialData>;
}

export default function Social({ data }: SocialPropsType) {
	if (!data || data.length === 0) return null;

	return (
		<ul className='flex items-center gap-x-2'>
			{data.map((keyItem) => (
				<li key={keyItem} aria-label={socialData[keyItem].label}>
					{socialData[keyItem].icon}
				</li>
			))}
		</ul>
	)
}
