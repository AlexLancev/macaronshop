import Image from "next/image";
import { benefitsData } from "../../constants";

interface BenefitItemProps {
	benefit: typeof benefitsData[number];
}	

export default function BenefitItem({ benefit }: BenefitItemProps) {
	const { title, description, image } = benefit;

	return (
		<li>
			<Image src={image} alt={title} width={100} height={100} />
			<h3>{title}</h3>
			<p>{description}</p>
		</li>
	)
}
