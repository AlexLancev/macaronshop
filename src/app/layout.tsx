import type { Metadata } from "next";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils/cn";

import "@/shared/styles/index.css";

import QueryProvider from "@/shared/providers/QueryProvider";
import Footer from "@/shared/ui/layout/Footer";
import Header from "@/shared/ui/layout/Header";

const MontserratSans: NextFontWithVariable = Montserrat({
	variable: "--font-Montserrat-sans",
	subsets: ["cyrillic"],
});

export const metadata: Metadata = {
	title: "Макаруны (макарони) купить в Санкт-Петербурге от производителя",
	description:
		"Макаруны (пирожные макарони) в Санкт-Петербурге от производителя. Всегда свежие, из натуральных ингредиентов, бесплатная доставка",
};

const RootLayout = ({
	children,
}: Readonly<{
	children: ReactNode;
}>) => (
	<html lang="ru">
		<body className={cn("font-sans", MontserratSans.variable)}>
			<QueryProvider>
				<Header />
				{children}
				<Footer />
			</QueryProvider>
		</body>
	</html>
);

export default RootLayout;
