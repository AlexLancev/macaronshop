import Image from "next/image";

const deliveryIntervalsData = [
	"с 10.00 до 14.00",
	"с 14.00 до 17.00",
	"после 17.00 до 22.00",
	"по СПб доставка в течение 24 часов",
] as const;

export default function Delivery() {
	return (
		<section className="py-10">
			<div className="container">
				<h1 className="mb-10 text-center font-semibold text-4xl">
					Доставка и оплата
				</h1>
				<div className="flex">
					<div className="flex w-1/2 items-center justify-center">
						<Image
							className="object-contain"
							src="/images/delivery/vehicle.png"
							alt="Доставка"
							width={546}
							height={386}
						/>
					</div>
					<div className="w-1/2">
						<h2 className="font-semibold text-2xl">Доставка и оплата</h2>
						<div className="mt-4 space-y-5 text-base">
							<p>
								Курьеры работают ежедневно с 10 до 22. Доставляем по
								Санкт-Петербургу в радиусе 30 км. Доставка по городу — от{" "}
								<span className="font-semibold">400₽</span> (при заказе от 2000₽
								— бесплатно, в зависимости от района). В дальние районы
								(Кронштадт, Сестрорецк и другие) стоимость доставки
								согласовывается с менеджером.
							</p>
							<div>
								<span className="mb-2 block font-semibold">
									Интервалы доставки:
								</span>
								<ul className="list-inside list-disc space-y-1">
									{deliveryIntervalsData.map((interval, idx) => (
										<li key={idx}>{interval}</li>
									))}
								</ul>
								<p className="mt-2">
									Курьер предупредит о своём прибытии за 30–40 минут.
								</p>
							</div>
							<p>
								На данном сайте заказ доставки возможен по Санкт-Петербургу в
								радиусе 30 км.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
