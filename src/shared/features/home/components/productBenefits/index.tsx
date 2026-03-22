import { Title } from "@/shared/ui/components/Title";
import BenefitsList from "./components/BenefitsList";
import { Container } from "@/shared/ui/components/Container";

export default function ProductBenefits() {
	return (
		<section>
			<Container>
				<Title>Мы обо всём позаботились</Title>
				<BenefitsList />
			</Container>
		</section>
	);
}
