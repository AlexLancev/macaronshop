import PrimaryNavigation from "./PrimaryNavigation";
import ServiceBar from "./ServiceBar";
import TopBar from "./TopBar";

export default function GlobalHeader() {
	return (
		<>
			<TopBar />
			<ServiceBar />
			<PrimaryNavigation />
		</>
	);
}
