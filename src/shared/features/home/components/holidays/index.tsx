import HolidaysItem from "./components/holidaysItem";
import { getUpcomingHolidays } from "./utils";

export default function Holidays() {
	const upcomingHolidays = getUpcomingHolidays();
	console.log(upcomingHolidays);

	return (
		<section className="py-12">
			<div className="container">
				<ul className="flex items-center gap-x-4">
					{upcomingHolidays.map((holiday, idx) => (
						<HolidaysItem
							key={idx}
							data={holiday}
						/>
					))}
				</ul>
			</div>
		</section>
	);
}
