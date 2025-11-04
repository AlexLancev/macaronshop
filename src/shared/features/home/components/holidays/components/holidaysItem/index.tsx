import Link from "next/link";
import { HolidayWithKey } from "../../utils";
import Image from "next/image";

interface HolidaysItemProps {
	data: HolidayWithKey;
}

export default function HolidaysItem({ data }: HolidaysItemProps) {
	const { title, path, pathIcon } = data;

	return (
		<li>
			<Link href={path}>
				<Image src={pathIcon} width={80} height={80} alt="" aria-hidden />
				<strong>{title}</strong>
			</Link>
		</li>
	)
}
