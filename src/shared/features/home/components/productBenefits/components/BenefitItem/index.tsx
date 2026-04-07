import Image from "next/image";

import type { benefitsData } from "../../constants";
import { Title } from "@/shared/ui/components/Title";

interface BenefitItemProps {
	benefit: (typeof benefitsData)[number];
}

export default function BenefitItem({ benefit }: BenefitItemProps) {
	const { title, description, image } = benefit;

	return (
		<li>
			<Image
				src={image}
				alt={title}
				width={100}
				height={100}
			/>
			<Title headingType="md">{title}</Title>
			<p>{description}</p>
		</li>
	);
}
