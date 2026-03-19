import PromoProducts from "@/shared/features/home/components/promo/components/PromoProducts";
import { Container } from "@/shared/ui/components/Container";
import { Title } from "@/shared/ui/components/Title";

export default function SweetDays() {
	return (
		<section className="py-10">
			<Container>
				<Title headingType="xl" className="font-semibold text-4xl">
					Акция: сладкие дни!
				</Title>
				<Title className="mb-10 text-center font-medium text-xl">
					Неделя скидок на авторские и подарочные наборы макарон
				</Title>
				<PromoProducts />
			</Container>
		</section>
	);
}
