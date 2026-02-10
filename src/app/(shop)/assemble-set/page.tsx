import AssembleSetList from "./components/AssembleSetList";
import { assembleSetData } from "./constants";

export default function AssembleSet() {
	return (
		<section className="py-10">
			<div className="container">
				<h1 className="font-bold text-2xl mb-10 text-center">Собери свой набор макаронс</h1>
				<AssembleSetList assembleSetData={assembleSetData} />
			</div>
		</section>
	);
}
