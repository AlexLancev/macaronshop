import type { MenuIconKeys } from "@/shared/constants/icons";
import type { MenuKeysType } from "../constants";

export interface MainMenuDataType {
	path: string;
	linkName: string;
}

export interface MainMenuRenderType {
	keyMenu: MenuKeysType;
	isIcon?: MenuIconKeys;
	submenu?: readonly MenuKeysType[];
}

export interface MainMenuType {
	data: readonly MainMenuRenderType[];
	ariaLabel?: string;
	className?: string;
}

export interface SubMenuPropsType {
	data: readonly MenuKeysType[] | undefined;
	activeMenu: string | null;
	path: string;
}
