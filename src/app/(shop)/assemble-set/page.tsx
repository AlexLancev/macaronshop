import AssembleSetList from "./components/AssembleSetList";
import { assembleSetData } from "./constants";
import { Container } from "@/shared/ui/components/Container";
import { Title } from "@/shared/ui/components/Title";

export default function AssembleSet() {
	return (
		<section className="py-10">
			<Container>
				<Title
					headingType="xl"
					className="font-semibold text-4xl"
				>
					Собери свой набор макаронс
				</Title>
				<AssembleSetList assembleSetData={assembleSetData} />
			</Container>
		</section>
	);
}
