import Image from "next/image";
import Link from "next/link";

import type { HolidayWithKey } from "../../utils";

interface HolidaysItemProps {
	data: HolidayWithKey;
}

export default function HolidaysItem({ data }: HolidaysItemProps) {
	const { title, path, pathIcon } = data;

	return (
		<li>
			<Link href={path} className="hover:text-[#e7426a] duration-200 text-center grid place-items-center">
				<Image
					className="mb-4 object-contain h-16"
					src={pathIcon}
					width={64}
					height={64}
					alt=""
					aria-hidden
				/>
				<strong className="mt-auto">{title}</strong>
			</Link>
		</li>
	);
}
