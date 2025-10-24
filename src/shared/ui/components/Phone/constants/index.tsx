import { Smartphone as SmartphoneIcon } from "lucide-react";

export const phoneData = {
	mobilePhone: {
		icon: (
			<SmartphoneIcon
				size={24}
				stroke="currentColor"
				strokeWidth={1}
			/>
		),
		patchPhone: 74956680730,
		namePhone: "+7 495 668-07-30",
		title: "Позвонить нам",
	},
	phone: {
		patchPhone: 78123098288,
		namePhone: "+7 (812) 309-82-88",
		title: "Позвонить нам",
	},
} as const;
