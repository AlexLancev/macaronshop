import { type NextRequest, NextResponse } from "next/server";

import { getAllProductsByHoliday } from "@/shared/lib/api/products";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ typeHoliday: string }> },
) {
	try {
		const { typeHoliday } = await params;

		if (!typeHoliday) {
			return NextResponse.json(
				{ error: "typeHoliday parameter is required" },
				{ status: 400 },
			);
		}

		const products = await getAllProductsByHoliday(typeHoliday);

		return NextResponse.json(products);
	} catch (error) {
		console.error("Error fetching products by holiday:", error);
		return NextResponse.json(
			{ error: "Failed to fetch products" },
			{ status: 500 },
		);
	}
}
