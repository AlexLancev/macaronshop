import useEmblaCarousel from "embla-carousel-react";

type TopBarTypeProps = {};

export const emblaCarousel = () => {
	const [emblaRef] = useEmblaCarousel();

	return (
		<div
			className="overflow-hidden"
			ref={emblaRef}
		>
			<div className="flex">
				<div className="flex- min-w-[0px]">Slide 1</div>
			</div>
		</div>
	);
};

const TopBar = () => {};

export default TopBar;
