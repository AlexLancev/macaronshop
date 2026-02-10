import PromoProducts from "@/shared/features/home/components/promo/components/PromoProducts";

export default function SweetDays() {
	return (
		<section className="py-10">
			<div className="container">
				<h1 className="mb-2 text-center font-semibold text-4xl">
					Акция: сладкие дни!
				</h1>
				<h2 className="mb-10 text-center font-medium text-xl">
					Неделя скидок на авторские и подарочные наборы макарон
				</h2>
				<PromoProducts />
			</div>
		</section>
	);
}
