import PromoProducts from "@/shared/features/home/components/promo/components/PromoProducts";
import { Container } from "@/shared/ui/components/Container";
import { Title } from "@/shared/ui/components/Title";

export default function Promo() {
	return (
		<section>
			<Container>
				<Title>Популярные наборы</Title>
				<PromoProducts />
			</Container>
		</section>
	);
}
