import dayjs from 'dayjs';
import { holidaysData } from '../constants';

export const getUpcomingHolidays = () => {
    const today = dayjs();
    const holidays = Object.entries(holidaysData);
		console.log(holidays)

    // Преобразуем массив праздников, добавляя объект dayjs для фильтрации
    const holidaysWithDayjs = holidays.map(([key, holiday]) => {
        return {
            ...holiday,
            key,
            dateObj: dayjs(holiday.date), // Преобразуем строку в объект dayjs
        };
    });

    // Фильтруем только будущие праздники и сортируем их по полю date
    const sortedHolidays = holidaysWithDayjs
        .filter(holiday => holiday.dateObj.isAfter(today)) // Только будущие праздники
        .sort((a, b) => a.date.localeCompare(b.date)); // Сортировка по строковому полю date

    const threeClosestHolidays = sortedHolidays.slice(0, 5);

    return threeClosestHolidays;
};