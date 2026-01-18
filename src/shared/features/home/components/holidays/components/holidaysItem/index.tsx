import Image from "next/image";
import Link from "next/link";

import type { HolidayWithKey } from "../../utils";

interface HolidaysItemProps {
	data: HolidayWithKey;
}

export default function HolidaysItem({ data }: HolidaysItemProps) {
	const { title, path, pathIcon, event, date } = data;

	return (
		<li>
			<Link
				href={path}
				className="grid place-items-center text-center duration-200 hover:text-[#e7426a]"
			>
				<Image
					className="mb-4 h-16 object-contain"
					src={pathIcon}
					width={64}
					height={64}
					alt=""
					aria-hidden
				/>
				<strong className="flexCenter mt-auto gap-0.5">
					{date && event && (
						<time
							dateTime={date}
							className="text-xl"
						>
							{event}
						</time>
					)}
					{title}
				</strong>
			</Link>
		</li>
	);
}
