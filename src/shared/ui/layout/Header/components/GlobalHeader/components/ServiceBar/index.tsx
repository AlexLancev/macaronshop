import Cart from "@/shared/ui/components/Cart";
import Menu from "@/shared/ui/components/Menu";
import Phone from "@/shared/ui/components/Phone";
import Social from "@/shared/ui/components/Social";
import { menuServiceData } from "../../constants";

const socialData = ["telegram", "vk"] as const;

export default function ServiceBar() {
	return (
		<div className="bg-customBeige">
			<div className="container">
				<div className="flex items-center justify-between gap-x-2 py-3">
					<Menu data={menuServiceData} />
					<div className="flex items-center gap-x-8">
						<Phone keyPhone={"mobilePhone"} />
						<Cart />
						<Social data={socialData} />
					</div>
				</div>
			</div>
		</div>
	);
}
