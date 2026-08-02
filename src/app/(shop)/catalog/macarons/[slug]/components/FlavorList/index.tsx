import type { FlavorType } from "@/shared/lib/api/products";
import type { ProductFlavor } from "@/shared/lib/constants/catalog/shared/types";

interface FlavorListProps {
	flavors: readonly ProductFlavor[] | undefined;
}

export default function FlavorList({ flavors }: FlavorListProps) {
	if (!flavors || flavors.length === 0) return null;

	return (
		<div className="bg-[#fcfcfc] rounded-md p-4 mb-5">
			<strong className="block text-lg font-semibold mb-2">Вкусы:</strong>
			<ul>
				{flavors.map(({ flavorName, quantity }, idx) => (
					<li
						key={idx}
						className={`flex items-center justify-between py-[2px] text-sm space-y-2 ${
							idx !== flavors.length - 1 ? "border-b border-[#f0f0f0]" : ""
						}`}
					>
						<span>{flavorName}</span>
						<span>{quantity}</span>
					</li>
				))}
			</ul>
		</div>
	);
}
