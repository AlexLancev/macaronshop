import React from "react";
import { freshnessData } from "./data";
import Image from "next/image";

export default function Freshness() {
	return (
		<section className="py-10">
			<div className="container">
				<h1 className="mb-10 text-center font-semibold text-4xl">Гарантии свежести</h1>
				<p className="mb-10 text-center text-lg">
					При изготовлении пирожных макаронс и других десертов мы используем только натуральные ингредиенты и красители, готовя наши изделия по оригинальной рецептуре лучших мировых кондитеров. Мы печём заказы в день отгрузки, поэтому вы всегда можете быть уверены в их свежести. Мы не используем консерванты, разрыхлители или усилители вкуса.
				</p>
				<ul className="flex flex-wrap justify-center gap-x-8">
					{freshnessData.map(({ title, image, id }) => (
						<li
							key={id}
							className="flex flex-col items-center justify-center gap-4"
						>
							<Image src={image} alt={title} width={291} height={291} />
							<h2 className="text-lg">{title}</h2>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
