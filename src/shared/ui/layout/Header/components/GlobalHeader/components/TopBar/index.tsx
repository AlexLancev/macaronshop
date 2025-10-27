"use client";

import { carouselConfig, carouselTopBarData, topBarData } from "./constants";
import { Carousel } from "@/shared/ui/components/Carousel";

const TopBar = () => {
	return (
		<div className="flex items-center justify-center bg-customSkyBlue p-3 text-lg">
			<div className="container">
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
		</div>
	);
};

export default TopBar;
