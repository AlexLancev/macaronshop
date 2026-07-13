"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductGalleryProps {
	gallery: readonly string[];
}

export default function ProductGallery({ gallery }: ProductGalleryProps) {
	const [selectedImage, setSelectedImage] = useState(gallery[0]);
	const handleSelectImage = (image: string) => {
		setSelectedImage(image);
	};

	return (
		<>
			<Image
				className="mb-4 block h-full w-full object-cover"
				src={selectedImage}
				alt={selectedImage}
				width={546}
				height={532}
			/>
			{gallery?.map((image, idx) => (
				<button
					key={idx}
					onClick={() => handleSelectImage(image)}
				>
					<Image
						src={image}
						alt={image}
						width={100}
						height={100}
					/>
				</button>
			))}
		</>
	);
}
