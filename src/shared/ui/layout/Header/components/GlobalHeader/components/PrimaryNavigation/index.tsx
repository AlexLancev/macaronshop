import { Container } from "@/shared/ui/components/Container";
import Logo from "@/shared/ui/components/Logo";
import Menu from "@/shared/ui/components/Menu";
import { menuInfoData, menuSaleData } from "../../constants";

export default function PrimaryNavigation() {
	return (
		<div className="flex items-center bg-white">
			<Container>
				<div className="flex items-center justify-between gap-x-3 py-5">
					<Menu data={menuSaleData} />
					<Logo />
					<Menu data={menuInfoData} />
				</div>
			</Container>
		</div>
	);
}
