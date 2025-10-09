import { menuServiceData } from "../constants";
import Menu from "../Menu";

export default function ServiceBar() {
	return (
		<div bg="bgBeige">
			<Menu data={menuServiceData} />
		</div>
	);
}
