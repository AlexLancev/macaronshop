import { JSX } from "react"

export const calcQuantityGoods = (quantity: number): JSX.Element => {
	return (
		<span>{`количество товаров: ${quantity}`}</span>
	)
}