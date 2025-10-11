import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { calcQuantityGoods } from './utils/calcQuantityGoods'

export default function Cart() {
	return (
		<Link className='flex items-center gap-x-2' href='/cart'>
			<div className="relative">
				<ShoppingCart />
				<span className='absolute -right-2 -bottom-2 rounded-full bg-accent-foreground text-white p-1 text-xs'>{1}</span>
			</div>
			В корзине {calcQuantityGoods(1)}
		</Link>
	)
}
