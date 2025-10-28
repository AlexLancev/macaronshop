import type { Metadata } from "next";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";

import { cn } from "@/shared/lib/utils/cn";

import "@/shared/styles/index.css";

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
			<Header />
			{children}
			<Footer />
		</body>
	</html>
);

export default RootLayout;
