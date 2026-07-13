import { socialData } from "./constants";
import Cart from "@/shared/ui/components/Cart";
import { Container } from "@/shared/ui/components/Container";
import Menu from "@/shared/ui/components/Menu";
import Phone from "@/shared/ui/components/Phone";
import Social from "@/shared/ui/components/Social";
import { menuServiceData } from "../../constants";

export default function ServiceBar() {
	return (
		<div className="bg-customBeige">
			<Container>
				<div className="flex items-center justify-between gap-x-2 py-3">
					<Menu
						data={menuServiceData}
						className="gap-x-4 normal-case"
					/>
					<div className="flex items-center gap-x-8">
						<Phone keyPhone={"mobilePhone"} />
						<Cart />
						<Social data={socialData} />
					</div>
				</div>
			</Container>
		</div>
	);
}
