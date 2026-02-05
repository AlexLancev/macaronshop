import PromoProducts from "@/shared/features/home/components/promo/components/PromoProducts";

export default function SweetDays() {
	return (
		<section className="py-10">
			<div className="container">
				<h1 className="text-4xl font-semibold text-center mb-2">
					Акция: сладкие дни!
				</h1>
				<h2 className="text-xl font-medium text-center mb-10">
					Неделя скидок на авторские и подарочные наборы макарон
				</h2>
				<PromoProducts />
			</div>
		</section>
	);
}
