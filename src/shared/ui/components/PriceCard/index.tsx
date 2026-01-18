import { iconRender } from "@/shared/lib/constants/icons";
import { Button } from "../Button";

const shopIcon = iconRender["shoppingBag"]();

const RUB_SIGN = "₽";

export default function PriceCard({ price }: { price: number }) {
	
	return (
		<div className="flex items-center w-full bg-white border border-customGray [&>*]:w-1/2">
			<div className="flex items-center text-customPinkDark font-medium text-lg">{price} {RUB_SIGN}</div>
			<Button className="text-white bg-transparent hover:bg-transparent hover:text-customPinkDark" type="button">
				{shopIcon}
				Купить!
			</Button>
		</div>
	);
}