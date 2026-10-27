import { iconRender } from "@/shared/lib/constants/icons";
import { giftOccasionsConstants } from "./constants";

export default function GiftOccasions() {
	return (
		<section>
			<h2>Брендированные пирожные — лучший подарок:</h2>
			<ul className="grid grid-cols-2 gap-4">
				{giftOccasionsConstants.map(({ icon, text }, idx) => (
					<li key={idx} className="flex items-center gap-2">
						{iconRender[icon]()}
						<span className="text-base">{text}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
