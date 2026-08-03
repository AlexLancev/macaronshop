import { ShoppingCartIcon } from "lucide-react";

import { Button } from "@/shared/ui/components/Button";

interface ProductActionsProps {
	price: number;
}


const RUB_SYMBOL = "₽";

export default function ProductActions({ price }: ProductActionsProps) {
	return (
		<div className="bg-[rgb(252,252,252)] rounded-md p-6 flex items-center justify-between mb-5">
			<span className="font-semibold text-[24px] leading-[29px] text-[#E44876]">{price} {RUB_SYMBOL}</span>
			<Button className="flex items-center gap-2 rounded px-3 py-5 bg-[#E44876] hover:bg-[#d23769] transition-colors justify-center">
				<ShoppingCartIcon className="w-5 h-5" />
				Добавить в корзину
			</Button>
		</div>
	)
}
