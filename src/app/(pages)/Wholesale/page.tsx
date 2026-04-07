import Image from "next/image";

import WholesaleProductGrid from "./components/WholesaleProductGrid";
import { wholesaleData } from "./data";
import { Title } from "@/shared/ui/components/Title";
import { Container } from "@/shared/ui/components/Container";

export default function Wholesale() {
	return (
		<section className="py-10">
			<Container>
				<div className="mb-18">
					<Title headingType="xl" className="font-semibold text-4xl">
						Оптовые поставки
					</Title>
					<div className="flex gap-10 md:gap-16">
						<div className="flex w-full justify-center md:w-1/2">
							<Image
								src="/images/wholesale/optom.jpg"
								alt="Десерты на витрине"
								width={582}
								height={582}
							/>
						</div>
						<div className="w-full pt-10 text-center md:w-1/2 md:items-start md:text-left">
							<Title className="mb-3 font-semibold text-4xl">
								Десерты для кофейни
							</Title>
							<div className="mb-8 font-medium text-black">
								<span>Акция! </span>
								<span>Специальные условия доставки в Москву. </span>
							</div>
							<p className="mb-7 max-w-xl text-gray-700 text-xl">
								Мы с 2013 года производим и поставляем оптом пирожные для кофеен
								и кафе. Наши десерты продаются в крупных кондитерских сетях
								Петербурга. Они яркие, натуральные, позволяют делать высокую
								наценку, за ними возвращаются покупатели.
							</p>
						</div>
					</div>
				</div>
				<Title className="mb-10 text-center font-semibold text-3xl">
					Пирожные для вашей кофейни
				</Title>
				<WholesaleProductGrid data={wholesaleData} />
			</Container>
		</section>
	);
}
