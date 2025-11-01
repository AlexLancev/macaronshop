import Image from "next/image";
import React from "react";

export default function Hero() {
	return (
		<section className="bg-[url(/images/hero/hero-bg.svg)] bg-center bg-cover bg-no-repeat py-14">
			<div className="container">
				<div className="flex items-center gap-x-4">
					<Image
						src="/images/hero/heart.png"
						width={739}
						height={506}
						alt=""
						aria-hidden
					/>
					<div className="text-center text-[rgb(72,72,72)]">
						<h2 className="mb-3 font-semibold text-4xl">Настоящая любовь</h2>
						<p className="font-medium text-lg">
							Пирожные макаронс и другие десерты из натуральных ингредиентов,
							приготовленные с любовью
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
