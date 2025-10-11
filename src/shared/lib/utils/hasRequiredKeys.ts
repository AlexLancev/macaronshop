export const hasRequiredKeys = <T extends object, K extends keyof T>(
	obj: T,
	requiredKeys: readonly K[],
): boolean => {
	if (!obj || typeof obj !== "object") return false;

	return requiredKeys.every(
		(key) =>
			Object.hasOwn(obj, key) && obj[key] !== undefined && obj[key] !== null,
	);
};
