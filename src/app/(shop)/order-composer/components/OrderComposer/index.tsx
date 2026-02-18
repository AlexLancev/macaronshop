"use client";

import { Button } from "@/shared/ui/components/Button";
import useOrderComposerStore from "../../store";
import { useParams } from "next/navigation";

export default function OrderComposer() {
	const { flavors, totalQuantity } = useOrderComposerStore();
	const { id: maxQuantity } = useParams();

	return (
		<div>
			<h2>
				Количество вкусов: {totalQuantity} из {maxQuantity}
			</h2>
			<ul>
				{flavors.map((flavor) => (
					<li key={flavor.id}>
						{flavor.flavor}
					</li>
				))}
			</ul>
			<span>
				Для продолжения количество макарон должно равняться {maxQuantity} штук.
			</span>
			<Button>
				Далее
			</Button>
		</div>
	);
}
