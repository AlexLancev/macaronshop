import Link from "next/link";

import type { PhoneProps } from "./types";

import { mobilePhoneConfigIcon, phoneData } from "./constants";
import { iconRender } from "@/shared/lib/constants/icons";
import { cn } from "@/shared/lib/utils/cn";

export default function Phone({ keyPhone, className }: PhoneProps) {
	const { icon, patchPhone, namePhone, title } = phoneData[keyPhone];

	return (
		<Link
			className={cn(
				"flex items-center gap-x-2 text-customGreyMedium duration-300 hover:text-black",
				className,
			)}
			href={`tel:${patchPhone}`}
			title={title}
		>
			{icon && iconRender[icon](mobilePhoneConfigIcon)}
			{namePhone}
		</Link>
	);
}
