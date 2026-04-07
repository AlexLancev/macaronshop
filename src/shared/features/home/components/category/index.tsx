import type { CategorysKeys } from "./types";

import CategoryItem from "./components/categoryItem";
import { Container } from "@/shared/ui/components/Container";

interface CategoryProps {
	data: ReadonlyArray<CategorysKeys>;
}

export default function Category({ data }: CategoryProps) {
	return (
		<Container>
			<ul className="grid grid-cols-2 gap-4">
				{data.map((categoryKey, idx) => (
					<CategoryItem
						key={idx}
						data={categoryKey}
					/>
				))}
			</ul>
		</Container>
	);
}
