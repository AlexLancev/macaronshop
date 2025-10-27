import type { phoneData } from "../constants";

type keyPhone = keyof typeof phoneData;

export interface PhoneDataItemType {
	patchPhone: number;
	namePhone: string;
	title: string;
	icon?: keyPhone;
}

export interface PhonePropsType {
	className?: string;
	keyPhone: keyPhone;
}
