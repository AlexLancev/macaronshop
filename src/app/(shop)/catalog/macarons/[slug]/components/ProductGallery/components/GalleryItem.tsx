import Image from "next/image";

interface GalleryItemProps {
	image: string;
	onClick: () => void;
}

export default function GalleryItem({ image, onClick }: GalleryItemProps) {
	return (
		<li>
			<button onClick={onClick}>
				<Image
					src={image}
					alt={image}
					width={100}
					height={100}
				/>
			</button>
		</li>
	);
}
