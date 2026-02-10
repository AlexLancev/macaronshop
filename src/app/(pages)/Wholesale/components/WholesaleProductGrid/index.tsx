import Image from "next/image";
import Link from "next/link";

import type { wholesaleData } from "../../data";

interface WholesaleProductGridProps {
	data: typeof wholesaleData;
}

export default function WholesaleProductGrid({
	data,
}: WholesaleProductGridProps) {
	return (
		<ul className="grid grid-cols-4 gap-5">
			{data.map(({ id, path, title, description, image }) => (
				<li key={id}>
					<Link
						href={path}
						className="relative text-center"
					>
						<Image
							className="mb-4 h-full w-full object-cover"
							src={image}
							alt={title}
							width={100}
							height={100}
						/>
						<h3 className="mb-2 font-semibold text-xl">{title}</h3>
						<p className="text-gray-700">{description}</p>
					</Link>
				</li>
			))}
		</ul>
	);
}
