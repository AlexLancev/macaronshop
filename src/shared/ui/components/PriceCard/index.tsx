import { iconRender } from "@/shared/lib/constants/icons";
import { Button } from "../Button";

const shopIcon = iconRender["shoppingBag"]();

const RUB_SIGN = "₽";

interface PriceCardProps {
	price: number;
}

export default function PriceCard({ price }: PriceCardProps) {
	return (
		<div className="flex w-full border border-customGray bg-white [&>*]:w-1/2">
			<div className="grid place-items-center border-customGray border-r font-medium text-customPinkDark text-lg">
				{price} {RUB_SIGN}
			</div>
			<Button
				className="rounded-none bg-transparent px-2 py-4 text-black shadow-none hover:bg-transparent hover:text-customPinkDark"
				type="button"
			>
				{shopIcon}
				Купить
			</Button>
		</div>
	);
}
