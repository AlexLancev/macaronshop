import { Container } from "@/shared/ui/components/Container";
import { Title } from "@/shared/ui/components/Title";
import Flavor from "../../components/Flavor";
import OrderComposer from "../../components/OrderComposer";

export default function OrderComposerPage() {
	return (
		<section className="py-10">
			<Container>
				<Title
					headingType="xl"
					className="font-semibold text-4xl"
				>
					Выберите вкусы
				</Title>
				<Flavor />
				<OrderComposer />
			</Container>
		</section>
	);
}
