"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

import { carouselTopBarData, topBarData } from "./constants";
import { Carousel } from "@/shared/ui/components/Carousel";

const carouselConfig = {
	options: { loop: true },
	plugins: [
		Autoplay({
			delay: 3000,
			stopOnInteraction: false,
		}),
		Fade(),
	],
};

const TopBar = () => {
	return (
		<div
			bg="bgBlue"
			p="3"
			flex="~ row"
			justify="center"
			items="center"
			text="lg"
		>
			<Carousel carouselConfig={carouselConfig}>
				{topBarData?.map((elem, index) => (
					<div
						key={index}
						className="embla__slide"
					>
						{carouselTopBarData?.[elem]?.component}
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default TopBar;
