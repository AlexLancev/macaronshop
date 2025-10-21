import Logo from "@/shared/ui/components/Logo";
import Menu from "@/shared/ui/components/Menu";
import { menuInfoData, menuSaleData } from "../../constants";

export default function PrimaryNavigation() {
	return (
		<div className="flex items-center bg-customWhite">
			<div className="container">
				<div className="flex items-center justify-between gap-x-3 py-5">
					<Menu
						data={menuSaleData}
						className="flex items-center gap-x-12 uppercase"
					/>
					<Logo />
					<Menu
						data={menuInfoData}
						className="flex items-center gap-x-12 uppercase"
					/>
				</div>
			</div>
		</div>
	);
}
