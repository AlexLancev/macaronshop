import { ShoppingBag as ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Cart() {
	return (
		<Link
			className="flex items-center gap-x-4"
			href="/cart"
		>
			<div className="relative">
				<ShoppingBagIcon
					size={24}
					stroke="#333333"
					strokeWidth={1}
				/>
				<span className="-right-2 -bottom-2 absolute grid h-4 place-items-center rounded-full bg-accent-foreground px-1.25 text-white text-xs">
					{0}
				</span>
			</div>
			В корзину
		</Link>
	);
}
