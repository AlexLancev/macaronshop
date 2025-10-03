import useEmblaCarousel from "embla-carousel-react";
import type { ReactNode } from "react";

type CarouselDataType = {
	children: ReactNode;
};

export const Carousel = ({ children }: CarouselDataType) => {
	const [emblaRef] = useEmblaCarousel();

	return (
		<div
			className="overflow-hidden"
			ref={emblaRef}
		>
			<div display="flex">{children}</div>
		</div>
	);
};
