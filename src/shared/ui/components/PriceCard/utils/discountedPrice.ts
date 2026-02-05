export const discountedPrice = (price: number, discountPercent: number) => {
	const rawDiscountedPrice = price * (1 - discountPercent / 100);
	const discountedPrice = Math.floor(rawDiscountedPrice / 10) * 10;
	return discountedPrice;
};
