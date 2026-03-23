"use client";

import { Container } from "@/shared/ui/components/Container";
import { carouselConfig, carouselTopBarData, topBarData } from "./constants";
import { Carousel } from "@/shared/ui/components/Carousel";

const TopBar = () => {
	return (
		<div className="flex items-center justify-center bg-customSkyBlue p-3 text-lg">
			<Container>
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
			</Container>
		</div>
	);
};

export default TopBar;
