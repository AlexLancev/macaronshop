import AssembleSetList from "./components/AssembleSetList";
import { assembleSetData } from "./constants";

export default function AssembleSet() {
	return (
		<section className="py-10">
			<div className="container">
				<h1 className="mb-10 text-center font-bold text-2xl">
					Собери свой набор макаронс
				</h1>
				<AssembleSetList assembleSetData={assembleSetData} />
			</div>
		</section>
	);
}
