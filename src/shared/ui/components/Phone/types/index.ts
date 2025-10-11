import type { ReactNode } from "react";

import type { phoneData } from "../constants";

export interface PhoneDataItemType {
	patchPhone: number;
	namePhone: string;
	title: string;
	icon?: ReactNode;
}

export interface PhonePropsType {
	className?: string;
	keyPhone: keyof typeof phoneData;
}
