import Image from "next/image";
import React from "react";

import { freshnessData } from "./data";
import { Title } from "@/shared/ui/components/Title";
import { Container } from "@/shared/ui/components/Container";

export default function Freshness() {
	return (
		<section className="py-10">
			<Container>
				<Title headingType="xl" className="font-semibold text-4xl">
					Гарантии свежести
				</Title>
				<p className="mb-10 text-center text-lg">
					При изготовлении пирожных макаронс и других десертов мы используем
					только натуральные ингредиенты и красители, готовя наши изделия по
					оригинальной рецептуре лучших мировых кондитеров. Мы печём заказы в
					день отгрузки, поэтому вы всегда можете быть уверены в их свежести. Мы
					не используем консерванты, разрыхлители или усилители вкуса.
				</p>
				<ul className="flex flex-wrap justify-center gap-x-8">
					{freshnessData.map(({ title, image, id }) => (
						<li
							key={id}
							className="flex flex-col items-center justify-center gap-4"
						>
							<Image
								src={image}
								alt={title}
								width={291}
								height={291}
							/>
							<Title className="text-lg">{title}</Title>
						</li>
					))}
				</ul>
			</Container>
		</section>
	);
}
