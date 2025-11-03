import { getUpcomingHolidays } from "./utils";

export default function Holidays() {
	const upcomingHolidays = getUpcomingHolidays();
	console.log(upcomingHolidays)
	return (
		<div>
			Holidays
		</div>
	)
}
