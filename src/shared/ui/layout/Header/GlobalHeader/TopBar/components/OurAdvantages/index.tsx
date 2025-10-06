import Image from "next/image";

import type { OurAdvantagesKeyType } from "./types";

import { ourAdvantagesData, ourAdvantagesDefault } from "./constants";

const OurAdvantages = ({
	ourAdvantagesKey,
}: {
	ourAdvantagesKey: OurAdvantagesKeyType;
}) => {
	const {
		iconUrl,
		description,
		sizeIcon: { width, height },
	} = ourAdvantagesData[ourAdvantagesKey] ?? ourAdvantagesDefault;

	return (
		<div
			flex="~ row"
			items="center"
			gap="x-2"
		>
			<Image
				src={iconUrl}
				width={width}
				height={height}
				alt=""
				aria-hidden
			/>
			<span block="~ block">{description}</span>
		</div>
	);
};

export default OurAdvantages;
