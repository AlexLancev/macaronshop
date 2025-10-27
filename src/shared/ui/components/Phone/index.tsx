import Link from "next/link";

import type { PhonePropsType } from "./types";

import { mobilePhoneConfigIcon, phoneData } from "./constants";
import { cn } from "@/shared/lib/utils/cn";
import { icons } from "@/shared/constants/icons";

export default function Phone({ keyPhone, className }: PhonePropsType) {
	const { icon, patchPhone, namePhone, title } = phoneData[keyPhone];

	return (
		<Link
			className={cn(
				className,
				"flex items-center gap-x-2 text-customGreyMedium duration-300 hover:text-black",
			)}
			href={`tel:${patchPhone}`}
			title={title}
		>
			{icon && icons[icon](mobilePhoneConfigIcon)}
			{namePhone}
		</Link>
	);
}
