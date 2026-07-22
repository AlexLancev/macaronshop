import type { FlavorType } from "@/shared/lib/api/products";
import type { ProductFlavor } from "@/shared/lib/constants/catalog/shared/types";

interface FlavorListProps {
	flavors: readonly ProductFlavor[] | undefined;
}

export default function FlavorList({ flavors }: FlavorListProps) {
	if (!flavors || flavors.length === 0) return null;

	return (
		<>
			<strong className="mb-2 font-medium text-lg">Вкусы:</strong>
			<ul>
				{flavors.map(({ flavorName, quantity }, idx) => (
					<li
						key={idx}
						className="flex justify-between gap-2"
					>
						<span>{flavorName}</span>
						<span>{quantity}</span>
					</li>
				))}
			</ul>
		</>
	);
}
