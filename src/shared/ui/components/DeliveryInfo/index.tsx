import { deliveryConstants } from "./constants";
import { iconRender } from "@/shared/lib/constants/icons";

export default function DeliveryInfo() {
	return (
		<ul className="flex flex-col gap-4">
			{deliveryConstants.map(({ icon, text }, idx) => (
				<li key={idx}>
					{iconRender[icon]()}
					<span>{text}</span>
				</li>
			))}
		</ul>
	);
}
