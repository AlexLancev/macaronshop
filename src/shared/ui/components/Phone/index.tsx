import Link from "next/link";

import type { PhoneDataItemType, PhonePropsType } from "./types";

import { phoneData } from "./constants";
import { cn } from "@/shared/lib/utils/cn";

export default function Phone({ keyPhone, className }: PhonePropsType) {
	if (!phoneData || !(keyPhone in phoneData)) return null;

	const { icon, patchPhone, namePhone, title } = phoneData[
		keyPhone
	] as PhoneDataItemType;

	return (
		<Link
			className={cn(
				className,
				"flex items-center gap-x-2 text-customGreyMedium duration-300 hover:text-black",
			)}
			href={`tel:${patchPhone}`}
			title={title}
		>
			{icon && icon}
			{namePhone}
		</Link>
	);
}
