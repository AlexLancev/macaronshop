import { Title } from "@/shared/ui/components/Title";
import AdditionallyList from "./components/AdditionallyList";
import { Container } from "@/shared/ui/components/Container";

export default function AddSalesPage() {
	return (
		<section className="py-10">
			<Container>
				<Title headingType="xl" className="font-semibold text-4xl">
					Дополнительные товары
				</Title>
				<AdditionallyList />
			</Container>
		</section>
	);
}
