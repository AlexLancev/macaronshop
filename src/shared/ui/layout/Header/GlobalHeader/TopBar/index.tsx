import { Carousel } from "@/shared/ui/components/Carousel";

const topBarData = [
	"google",
	"almond",
	"yandex",
	"cake",
	"2gis",
	"delivery",
	"truckDelivery",
] as const;

const TopBar = () => {
	return (
		<Carousel>
			{topBarData.map((elem, index) => (
				<div
					key={index}
					display="flex-0-0-100"
					size="min-w-[0px]"
				>
					{elem}
				</div>
			))}
		</Carousel>
	);
};

export default TopBar;
