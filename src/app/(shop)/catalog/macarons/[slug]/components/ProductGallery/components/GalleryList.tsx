import GalleryItem from "./GalleryItem";

interface GalleryListProps {
	gallery: readonly string[];
	setSelectedImage: (image: string) => void;
}

export default function GalleryList({
	gallery,
	setSelectedImage,
}: GalleryListProps) {
	const handleSelectImage = (image: string) => {
		setSelectedImage(image);
	};

	return (
		<ul className="flex gap-2">
			{gallery.map((image, idx) => (
				<GalleryItem
					key={idx}
					image={image}
					onClick={() => handleSelectImage(image)}
				/>
			))}
		</ul>
	);
}
