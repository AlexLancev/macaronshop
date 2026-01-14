export const pluralize = (
	count: number,
	words: [string, string, string],
): string => {
	if (count % 10 === 1 && count % 100 !== 11) {
		return words[0];
	}

	if (
		count % 10 >= 2 &&
		count % 10 <= 4 &&
		(count % 100 < 10 || count % 100 >= 20)
	) {
		return words[1];
	}

	return words[2];
};
