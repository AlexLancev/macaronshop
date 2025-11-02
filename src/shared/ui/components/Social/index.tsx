import Link from "next/link";

import { socialData } from "./constants";
import { iconRender } from "@/shared/lib/constants/icons";

interface SocialProps {
	data: ReadonlyArray<keyof typeof socialData>;
}

export default function Social({ data }: SocialProps) {
	return (
		<ul className="flex items-center gap-x-4">
			{data.map((keyItem) => {
				const { label, path, icon } = socialData[keyItem];

				return (
					<li key={keyItem}>
						<span className="visually-hidden">{label}</span>
						<Link
							href={path}
							title={label}
							className="text-customGreyMedium duration-300 hover:text-black"
						>
							{icon && iconRender[icon]()}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
