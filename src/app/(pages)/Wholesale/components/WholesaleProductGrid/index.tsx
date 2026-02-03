import Link from "next/link"
import Image from "next/image";
import { wholesaleData } from "../../data";

interface WholesaleProductGridProps {
	data: typeof wholesaleData;
}

export default function WholesaleProductGrid({ data }: WholesaleProductGridProps) {
	return (
		<ul className="grid grid-cols-4 gap-5">
			{data.map(({ id, path, title, description, image }) => (
				<li key={id}>
					<Link href={path} className="text-center relative">
						<Image className="mb-4 w-full h-full object-cover" src={image} alt={title} width={100} height={100} />
						<h3 className="text-xl font-semibold mb-2">{title}</h3>
						<p className="text-gray-700">{description}</p>
					</Link>
				</li>
			))}
		</ul>
	)
}