import { deliveryConstants } from "./constants";
import { iconRender } from "@/shared/lib/constants/icons";

export default function DeliveryInfo() {
	
	return (
		<ul className="bg-[#fcfcfc] rounded-lg p-6 flex flex-col gap-7">
			{deliveryConstants.map(({ icon, text }, idx) => (
				<li key={idx} className="flex items-start gap-5">
					{iconRender[icon]()}
					<span className="text-[#313131] text-base leading-[22px] whitespace-pre-line">{text}</span>
				</li>
			))}
		</ul>
	);
}
