import Image from "next/image";
import { wholesaleData } from "./data";
import WholesaleProductGrid from "./components/WholesaleProductGrid";

export default function Wholesale() {
	return (
		<section className="py-10">
			<div className="container">
				<div className="mb-18">
					<h1 className="mb-10 text-center font-semibold text-4xl">Оптовые поставки</h1>
					<div className="flex gap-10 md:gap-16">
						<div className="w-full md:w-1/2 flex justify-center">
							<Image src="/images/wholesale/optom.jpg" alt="Десерты на витрине" width={582} height={582} />
						</div>
						<div className="w-full md:w-1/2 pt-10 md:items-start text-center md:text-left">
							<h2 className="text-4xl font-semibold mb-3">Десерты для кофейни</h2>
							<div className="mb-8 font-medium text-black">
								<span>Акция! </span>
								<span>Специальные условия доставки в Москву. </span>
							</div>
							<p className="mb-7 text-xl text-gray-700 max-w-xl">
								Мы с 2013 года производим и поставляем оптом пирожные для кофеен и кафе. Наши десерты продаются в крупных кондитерских сетях Петербурга. Они яркие, натуральные, позволяют делать высокую наценку, за ними возвращаются покупатели.
							</p>
						</div>
					</div>
				</div>
				<h2 className="text-3xl font-semibold mb-10 text-center">Пирожные для вашей кофейни</h2>
				<WholesaleProductGrid data={wholesaleData} />
			</div>
		</section>
	);
}
