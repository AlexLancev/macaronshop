import xss from "xss";

import type { ProductDetailsType } from "@/shared/lib/constants/catalog/shared/types";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../Accordion/accordion";

interface ProductInfoProps {
	productDetails: ProductDetailsType;
}

export default function ProductInfo({ productDetails }: ProductInfoProps) {
	return (
		<Accordion
			className="flex"
			type="single"
			collapsible
			defaultValue={productDetails.description.trigger}
		>
			{Object.values(productDetails).map(({ trigger, htmlContent, jsxContent }) => (
				<AccordionItem
					key={trigger}
					value={trigger}
				>
					<AccordionTrigger className="[&>svg]:hidden">{trigger}</AccordionTrigger>
					<AccordionContent>
						{htmlContent ? (
							<div
								dangerouslySetInnerHTML={{
									__html: xss(htmlContent),
								}}
							></div>
						) : (
							jsxContent
						)}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
