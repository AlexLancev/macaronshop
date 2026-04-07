import Image from "next/image";

import { Title } from "@/shared/ui/components/Title";
import { Container } from "@/shared/ui/components/Container";

export default function Contacts() {
	return (
		<section className="py-10">
			<Container>
				<Title
					className="font-semibold text-4xl"
					headingType="xl"
				>
					Контакты
				</Title>
				<div className="flex items-center justify-center gap-10">
					<div className="mb-8 flex flex-shrink-0 justify-center md:mb-0 md:block">
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
					<div className="w-full max-w-xl">
						<div className="mb-6">
							<div className="mb-1 font-semibold">Розничные заказы:</div>
							<div>
								<a
									href="tel:88123098288"
									className="mb-1 block text-base"
								>
									(812) 309-82-88{" "}
									<span className="text-gray-500">(ежедневно, с 9 до 18)</span>
								</a>
								<a
									href="mailto:info@macaronshop.ru"
									className="mb-1 block text-base"
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
							<div className="mb-1 font-semibold">Пункт самовывоза:</div>
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
							<div className="mb-1 font-semibold">Юридические лица:</div>
							<div>
								<a
									href="tel:88123098288"
									className="mb-1 block text-base"
								>
									(812) 309-82-88{" "}
									<span className="text-gray-500">(доб. 2)</span>
								</a>
								<a
									href="mailto:sales@macaronshop.ru"
									className="mb-1 block text-base"
									style={{ color: "var(--color-customBlue)" }}
								>
									sales@macaronshop.ru
								</a>
								<span className="block text-gray-500 text-sm">
									Пн–Пт (9:00 – 18:00)
								</span>
							</div>
						</div>

						<div>
							<div className="mb-1 font-semibold">
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
			</Container>
		</section>
	);
}
