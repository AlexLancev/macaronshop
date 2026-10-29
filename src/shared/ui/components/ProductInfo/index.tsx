import xss from "xss";

import type {
	ProductDetailsType,
	ProductDetailsValue,
} from "@/shared/lib/constants/catalog/shared/types";

import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/shared/ui/components/Tabs";

interface ProductInfoProps {
	productDetails: ProductDetailsType;
}

export default function ProductInfo({ productDetails }: ProductInfoProps) {
	const productDetailsValues = Object.values(
		productDetails,
	) as ProductDetailsValue[];

	return (
		<Tabs defaultValue={productDetails.description.trigger}>
			<TabsList>
				{productDetailsValues.map(({ trigger }) => (
					<TabsTrigger
						key={trigger}
						value={trigger}
					>
						{trigger}
					</TabsTrigger>
				))}
			</TabsList>
			{productDetailsValues.map(({ trigger, htmlContent, jsxContent }, idx) => (
				<TabsContent
					key={idx}
					value={trigger}
				>
					{htmlContent ? (
						<div dangerouslySetInnerHTML={{ __html: xss(htmlContent) }} />
					) : (
						jsxContent
					)}
				</TabsContent>
			))}
		</Tabs>
	);
}
