import Logo from "../../Logo";
import { menuInfoData, menuSaleData } from "../constants";
import Menu from "../Menu";

export default function PrimaryNavigation() {
	return (
		<div flex="~ flex" items='center'>
			<Menu data={menuSaleData} />
			<Logo />
			<Menu data={menuInfoData} />
		</div>
	);
}
