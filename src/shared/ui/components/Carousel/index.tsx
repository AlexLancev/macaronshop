"use client";

import type { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { type ReactNode, useCallback } from "react";

type CarouselDataType = {
	children: ReactNode;
	carouselConfig: {
		options?: EmblaOptionsType;
		plugins?: EmblaPluginType[];
	};
};

export const Carousel = ({
	children,
	carouselConfig: { options, plugins },
}: CarouselDataType) => {
	const [emblaRef] = useEmblaCarousel(options, plugins);

	return (
		<div
			className="embla"
			ref={emblaRef}
		>
			<div className="embla__container">{children}</div>
		</div>
	);
};
