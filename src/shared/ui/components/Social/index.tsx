import React from 'react'
import { TelegramIcon, VkIcon } from './constants'

const SocialData = {
	telegram: {
		icon: <TelegramIcon fill={red} />,
		label: '',
	},
	vk: {
		icon: <VkIcon/>,
		label: '',
	},
} as const

interface SocialPropsType {
	data: 
}

export default function Social({data}: any) {
	return (
		<ul className='flex items-center gap-x-2'>

		</ul>
	)
}
