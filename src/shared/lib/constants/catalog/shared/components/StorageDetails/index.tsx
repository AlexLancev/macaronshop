import type { FC } from "react";

import type { StorageDetailsProps } from "../../types";

import { pluralize } from "@/shared/lib/utils/pluralize";

export const StorageDetails: FC<StorageDetailsProps> = ({ config = {} }) => {
	const {
		bestBeforeHours = 72,
		fridge = 7,
		freezer = 14,
		prodType = "Macaronshop",
	} = config;

	return (
		<>
			<p>
				Мы рекомендуем наслаждаться вкусом "{prodType}" первые {bestBeforeHours}
				{pluralize(bestBeforeHours, ["час", "часа", "часов"])} после покупки.
				Далее они могут начать терять свои вкусовые качества и текстуру.
			</p>
			<p>
				Срок хранения в холодильнике {fridge}{" "}
				{pluralize(fridge, ["день", "дня", "дней"])}, в морозилке — {freezer}{" "}
				{pluralize(freezer, ["день", "дня", "дней"])}.
			</p>
		</>
	);
};
