import HolidaysItem from "./components/holidaysItem";
import { getUpcomingHolidays } from "./utils";
import { Container } from "@/shared/ui/components/Container";

export default function Holidays() {
	const { upcomingHolidays } = getUpcomingHolidays();

	return (
		<section className="py-12">
			<Container>
				<ul className="grid grid-cols-6 gap-x-4">
					{upcomingHolidays.map((holiday) => {
						const { id } = holiday;

						return (
							<HolidaysItem
								key={id}
								data={holiday}
							/>
						);
					})}
				</ul>
			</Container>
		</section>
	);
}
