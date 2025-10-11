import PrimaryNavigation from "./components/PrimaryNavigation";
import ServiceBar from "./components/ServiceBar";
import TopBar from "./components/TopBar";

export default function GlobalHeader() {
	return (
		<>
			<TopBar />
			<ServiceBar />
			<PrimaryNavigation />
		</>
	);
}
