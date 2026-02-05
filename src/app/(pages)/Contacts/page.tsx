import Image from "next/image";

export default function Contacts() {
	return (
		<section className="py-10">
			<div className="container">
				<h1 className="mb-10 text-center font-semibold text-4xl">Контакты</h1>
				<div className="flex items-center justify-center gap-10">
					<div className="flex-shrink-0 flex justify-center md:block mb-8 md:mb-0">
						<div className="relative">
							<Image
								src="/images/contacts/location.png"
								alt="macaron shop локация"
								className="object-contain"
								width={380}
								height={434}
							/>
						</div>
					</div>
					<div className="max-w-xl w-full">
						<div className="mb-6">
							<div className="font-semibold mb-1">Розничные заказы:</div>
							<div>
								<a
									href="tel:88123098288"
									className="block text-base mb-1"
								>
									(812) 309-82-88{" "}
									<span className="text-gray-500">(ежедневно, с 9 до 18)</span>
								</a>
								<a
									href="mailto:info@macaronshop.ru"
									className="block text-base mb-1"
									style={{ color: "var(--color-customBlue)" }}
								>
									info@macaronshop.ru
								</a>
								<a
									href="mailto:ak@macaronshop.ru"
									className="block text-base"
									style={{ color: "var(--color-customBlue)" }}
								>
									ak@macaronshop.ru
								</a>
								<span className="text-gray-500 text-sm">
									— для пожеланий и предложений
								</span>
							</div>
						</div>

						<div className="mb-6">
							<div className="font-semibold mb-1">Пункт самовывоза:</div>
							<div>
								<div>
									Мясной пер. 7А,
									<br />
									БЦ Ника&nbsp;
									<span className="text-gray-500">(10:00 – 20:00)</span>
								</div>
							</div>
						</div>

						<div className="mb-6">
							<div className="font-semibold mb-1">Юридические лица:</div>
							<div>
								<a
									href="tel:88123098288"
									className="block text-base mb-1"
								>
									(812) 309-82-88{" "}
									<span className="text-gray-500">(доб. 2)</span>
								</a>
								<a
									href="mailto:sales@macaronshop.ru"
									className="block text-base mb-1"
									style={{ color: "var(--color-customBlue)" }}
								>
									sales@macaronshop.ru
								</a>
								<span className="text-gray-500 text-sm block">
									Пн–Пт (9:00 – 18:00)
								</span>
							</div>
						</div>

						<div>
							<div className="font-semibold mb-1">
								Отдел по работе с сетями:
							</div>
							<a
								href="mailto:ak@macaronshop.ru"
								className="block text-base"
								style={{ color: "var(--color-customBlue)" }}
							>
								ak@macaronshop.ru
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
