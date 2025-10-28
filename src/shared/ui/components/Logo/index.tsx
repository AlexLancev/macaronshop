import Image from "next/image";
import Link from "next/link";

interface LogoProps {
	className?: string;
}

export default function Logo({ className }: LogoProps) {
	return (
		<Link
			href="/"
		>
			<span className="visually-hidden">Логотип компании Макароншоп</span>
			<Image
				src="/images/logo.svg"
				width={100}
				height={100}
				alt="Логотип компании Макароншоп"
				title="Логотип компании Макароншоп"
			/>
		</Link>
	);
}
