import { hasRequiredKeys } from "./hasRequiredKeys";

export const isEmptyObj = <T extends object, K extends keyof T = keyof T>(
	object: T,
	requiredKeys?: readonly K[],
): boolean => {
	if (!object || typeof object !== "object") return true;

	if (requiredKeys && requiredKeys.length !== 0) {
		return !hasRequiredKeys(object, requiredKeys);
	}

	for (const key in object) {
		if (Object.hasOwn(object, key)) {
			return false;
		}
	}
	return true;
};
