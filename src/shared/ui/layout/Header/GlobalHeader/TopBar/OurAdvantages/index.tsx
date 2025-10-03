import Image from "next/image";

type OurAdvantagesKeyType = "almond" | "cake" | "delivery" | "truckDelivery";

type OurAdvantagesType = Record<
	OurAdvantagesKeyType,
	{
		description: string;
		iconUrl: string;
	}
>;

const ourAdvantagesData: OurAdvantagesType = {
	almond: {
		description: "Оптовые поставки от производителя",
		iconUrl: "/images/ourAdvantages/almond.svg",
	},
	cake: {
		description: "Всегла свежее",
		iconUrl: "/images/ourAdvantages/cake.svg",
	},
	delivery: {
		description: "Миндальная мука и натуральные ингредиенты",
		iconUrl: "/images/ourAdvantages/delivery.svg",
	},
	truckDelivery: {
		description: "Бережная доставка",
		iconUrl: "/images/ourAdvantages/truckDelivery.svg",
	},
};

const ourAdvantagesDefault = {
	description: "",
	iconUrl: "",
};

const OurAdvantages = ({
	OurAdvantagesKey,
}: {
	OurAdvantagesKey: OurAdvantagesKeyType;
}) => {
	const { iconUrl, description } =
		ourAdvantagesData[OurAdvantagesKey] ?? ourAdvantagesDefault;

	return (
		<div className="flex items-center gap-x-px">
			<Image
				src={iconUrl}
				alt=""
				aria-hidden
			/>
			<span className="block">{description}</span>
		</div>
	);
};

export default OurAdvantages;
