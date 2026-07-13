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
		<>
			<Title
				headingType="xl"
				className="mb-2 text-left font-semibold text-3xl"
			>
				{title}
			</Title>
			<p>{description}</p>
		</>
	);
}
