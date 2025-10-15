import { ShoppingBag as ShoppingBagIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Cart() {
	return (
		<Link className='flex items-center gap-x-4' href='/cart'>
			<div className="relative">
				<ShoppingBagIcon size={24} stroke="#333333" strokeWidth={1} />
				<span className='absolute -right-2 -bottom-2 px-1.25 h-4 rounded-full bg-accent-foreground text-white text-xs grid place-items-center'>{0}</span>
			</div>
			В корзину
		</Link>
	)
}
