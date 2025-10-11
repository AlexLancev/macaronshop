import Menu from "../../../../../../components/Menu";
import Logo from "../../../../../../components/Logo";
import { menuInfoData, menuSaleData } from "../../constants";

export default function PrimaryNavigation() {
	return (
		<div className="flex items-center bg-customWhite">
			<Menu data={menuSaleData} />
			<Logo />
			<Menu data={menuInfoData} />
		</div>
	);
}
