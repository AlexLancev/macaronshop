import Link from "next/link";
import React from "react";

import { icons } from "@/shared/constants/icons";
import { shoppingBagIconConfig } from "./constants";

export default function Cart() {
	return (
		<Link
			className="flex items-center gap-x-3 text-customGreyMedium duration-300 hover:text-black"
			href="/cart"
		>
			<div className="relative">
				{icons["shoppingBag"](shoppingBagIconConfig)}
				<span className="-right-2 -bottom-2 absolute grid h-4 place-items-center rounded-full bg-accent-foreground px-1.25 text-white text-xs">
					{0}
				</span>
			</div>
			В корзину
		</Link>
	);
}
