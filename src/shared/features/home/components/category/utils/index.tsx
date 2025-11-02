import { angles } from "../constants";

export const getItemColor = (color: string, index: number) => {
	const angle = angles[index % angles.length];
	return `linear-gradient(${angle}deg, ${color} 50%, ${color}90 50%)`;
};
