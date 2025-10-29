// const initialMacarons = await macaronsApi.getAllMacarons();

// console.log(initialMacarons);

import Image from "next/image";

export default async function Home() {

	return (
		<section>
			<div className="container">
				<div className="flex items-center gap-x-4">
					{/* <Image src={""} alt={""} /> */}
					<div>
						<h2>Настоящая любовь</h2>
						<p>Пирожные макаронс и другие десерты из натуральных ингредиентов, приготовленные с любовью</p>
					</div>
				</div>
			</div>
		</section>
	);
}
