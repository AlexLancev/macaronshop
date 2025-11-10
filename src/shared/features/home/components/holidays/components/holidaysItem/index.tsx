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
			<Link href={path} className="hover:text-[#e7426a] duration-200">
				<Image
					src={pathIcon}
					width={60}
					height={60}
					alt=""
					aria-hidden
				/>
				<strong>{title}</strong>
			</Link>
		</li>
	);
}
