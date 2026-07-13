import { notFound } from "next/navigation";

import DeliveryInfo from "./components/DeliveryInfo";
import FlavorList from "./components/FlavorList";
import ProductActions from "./components/ProductActions";
import ProductGallery from "./components/ProductGallery";
import ProductHeader from "./components/ProductHeader";
import { getProductBySlug } from "@/shared/lib/api/products";
import { Title } from "@/shared/ui/components/Title";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function MacaronProductPage({ params }: PageProps) {
	const { slug } = await params;
	const product = await getProductBySlug(slug, "macaron");

	if (!product) {
		notFound();
	}

	const { title, description, price, gallery, flavors, deliveryInfo } = product;

	return (
		<div className="container mx-auto">
			<div className="flex gap-4">
				<ProductGallery gallery={gallery} />
				<div>
					<ProductHeader
						title={title}
						description={description}
					/>
					{/* <ProductActions />
					<FlavorList />
					<DeliveryInfo /> */}
				</div>
			</div>
		</div>
	);
}
