"use client";

import Image from "next/image";
import { useState } from "react";

import GalleryList from "./components/GalleryList";

interface ProductGalleryProps {
	gallery: readonly string[];
}

export default function ProductGallery({ gallery }: ProductGalleryProps) {
	const [selectedImage, setSelectedImage] = useState(gallery[0]);

	return (
		<div className="flex flex-col gap-4">
			<Image
				className="mb-4 block h-full w-full object-cover"
				src={selectedImage}
				alt={selectedImage}
				width={546}
				height={532}
			/>
			<GalleryList
				setSelectedImage={setSelectedImage}
				gallery={gallery}
			/>
		</div>
	);
}
