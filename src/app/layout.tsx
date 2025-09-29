import type { Metadata } from "next";
import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "@unocss/reset/tailwind.css";
import "@/styles/index.css";

import Footer from "@/components/footer";
import Header from "@/components/header";

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
		<body className={cn(MontserratSans.variable, "font-sans")}>
			<Header />
			{children}
			<Footer />
		</body>
	</html>
);

export default RootLayout;
