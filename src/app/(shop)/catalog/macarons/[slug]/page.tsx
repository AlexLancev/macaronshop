import { notFound } from "next/navigation";

import FlavorList from "./components/FlavorList";
import ProductActions from "./components/ProductActions";
import ProductGallery from "./components/ProductGallery";
import ProductHeader from "./components/ProductHeader";
import { getProductBySlug } from "@/shared/lib/api/products";
import DeliveryInfo from "@/shared/ui/components/DeliveryInfo";
import ProductInfo from "@/shared/ui/components/ProductInfo";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function MacaronProductPage({ params }: PageProps) {
	const { slug } = await params;
	const product = await getProductBySlug(slug, "macaron");

	if (!product) {
		notFound();
	}

	console.log(product);

	const { title, description, gallery, flavor, price, productDetails } =
		product;

	return (
		<div className="container mx-auto">
			<div className="flex gap-4">
				<ProductGallery gallery={gallery} />
				<div>
					<ProductHeader
						title={title}
						description={description}
					/>
					
					<FlavorList flavors={flavor} />
					<ProductActions price={price} />
					<DeliveryInfo />
					<ProductInfo productDetails={productDetails} />
				</div>
			</div>
		</div>
	);
}
