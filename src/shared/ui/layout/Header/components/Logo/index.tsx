import Image from "next/image";
import Link from "next/link";

import { cn } from "@/shared/lib/utils/cn";

interface LogoPropsType {
	className?: string;
}

export default function Logo({ className }: LogoPropsType) {
	return (
		<Link
			className={cn(className, "")}
			href="/"
		>
			<Image
				src="/images/logo.svg"
				width={100}
				height={100}
				alt="Логотип компании Макароншоп"
			/>
		</Link>
	);
}
