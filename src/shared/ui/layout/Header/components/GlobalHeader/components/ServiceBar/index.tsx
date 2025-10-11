import Phone from "@/shared/ui/components/Phone";
import Menu from "@/shared/ui/components/Menu";
import Cart from "@/shared/ui/components/Cart";
import { menuServiceData } from "../../constants";

export default function ServiceBar() {
	return (
		<div className="bg-customBeige">
			<Menu data={menuServiceData} />
			<Phone keyPhone={"mobilePhone"} />
			<Cart />
		</div>
	);
}
