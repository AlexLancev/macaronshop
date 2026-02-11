interface QuantityProps {
	quantity: number;
}

export default function Quantity({ quantity }: QuantityProps) {
	
	return <span>{quantity}</span>;
}
