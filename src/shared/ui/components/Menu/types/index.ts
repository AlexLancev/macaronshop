import type { MenuKeysType } from "../constants";

export interface MainMenuDataType {
	path: string;
	linkName: string;
	icon?: string;
}

export interface MainMenuRenderType {
	keyMenu: MenuKeysType;
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
