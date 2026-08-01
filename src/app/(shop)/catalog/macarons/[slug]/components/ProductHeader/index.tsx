import { Title } from "@/shared/ui/components/Title";

interface ProductHeaderProps {
	title: string;
	description: string;
}
export default function ProductHeader({
	title,
	description,
}: ProductHeaderProps) {
	return (
		<div className="mb-5">
			<Title
				headingType="xl"
				className="text-left font-semibold text-[32px] leading-[40px] tracking-[-0.5px] mb-3 text-[rgb(49,49,49)]"
			>
				{title}
			</Title>
			<p className="text-[16px] leading-[22px] text-[rgb(89,89,89)]">{description}</p>
		</div>
	);
}


