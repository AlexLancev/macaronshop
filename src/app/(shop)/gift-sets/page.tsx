import Image from "next/image";

import GiftSetCategoryList from "./components/GiftSetCategoryList";
import { giftSetsData } from "./constants";
import GiftSetPage from "@/shared/ui/components/GiftSetPage";
import { Container } from "@/shared/ui/components/Container";

export default function GiftSets() {
	return (
		<div className="relative">
			<Image
				className="absolute top-0 left-0 z-10 opacity-60"
				src="/images/holidays/images/promo-1.webp"
				width={350}
				height={390}
				alt=""
				aria-hidden
			/>
			<Image
				className="absolute top-0 right-0 z-10 opacity-60"
				src="/images/holidays/images/promo-2.webp"
				width={271}
				height={458}
				alt=""
				aria-hidden
			/>
			<div className="relative z-20">
				<GiftSetPage
					title="Подарочные наборы"
					subtitle="Для сладких моментов вашей жизни"
					className="px-10 py-36"
				/>
				<section className="py-10">
					<Container>
						<GiftSetCategoryList giftSetsData={giftSetsData} />
					</Container>
				</section>
			</div>
		</div>
	);
}
