import dayjs, { type Dayjs } from "dayjs";

import { holidaysData } from "../constants";

type HolidaysDataKeys = keyof typeof holidaysData;

interface Holiday {
	date: string;
	title: string;
	path: string;
	cardColor: string;
	pathIcon: string;
}

export interface HolidayWithKey extends Holiday {
	key: HolidaysDataKeys;
}

interface HolidayWithSortDate extends HolidayWithKey {
	_sortDate: Dayjs;
}

/**
 * Получает ближайшие 5 праздников, начиная с сегодняшнего дня
 * Для каждого праздника вычисляется ближайшая дата в текущем или следующем году
 */
export const getUpcomingHolidays = (): HolidayWithKey[] => {
	const today = dayjs();
	const currentYear = today.year();
	const nextYear = currentYear + 1;

	// Шаг 1: Преобразуем объект праздников в массив с вычисленными датами
	const holidaysWithCalculatedDates = calculateHolidayDates(
		holidaysData,
		currentYear,
		nextYear,
		today,
	);

	// Шаг 2: Фильтруем и сортируем праздники
	const upcomingHolidays = filterAndSortHolidays(
		holidaysWithCalculatedDates,
		today,
	);

	// Шаг 3: Возвращаем 5 ближайших праздников
	return upcomingHolidays.slice(0, 5);
};

/**
 * Вычисляет ближайшие даты для каждого праздника
 */
const calculateHolidayDates = (
	holidays: typeof holidaysData,
	currentYear: number,
	nextYear: number,
	today: Dayjs,
): HolidayWithSortDate[] => {
	return (Object.entries(holidays) as [HolidaysDataKeys, Holiday][])
		.map(([key, holiday]): HolidayWithSortDate | null => {
			// Пропускаем праздники без даты
			if (!holiday.date) return null;

			const calculatedDate = calculateNextOccurrence(
				holiday.date,
				currentYear,
				nextYear,
				today,
			);

			return {
				...holiday,
				key,
				_sortDate: calculatedDate,
			};
		})
		.filter((holiday): holiday is HolidayWithSortDate => holiday !== null);
};

/**
 * Вычисляет следующее occurrence праздника (текущий год или следующий)
 */
const calculateNextOccurrence = (
	dateString: string,
	currentYear: number,
	nextYear: number,
	today: Dayjs,
): Dayjs => {
	const currentYearDate = dayjs(`${currentYear}-${dateString}`);
	const nextYearDate = dayjs(`${nextYear}-${dateString}`);

	// Если праздник в текущем году еще не прошел (или сегодня), берем его
	// Иначе берем праздник в следующем году
	return currentYearDate.isSame(today, "day") || currentYearDate.isAfter(today)
		? currentYearDate
		: nextYearDate;
};

/**
 * Фильтрует будущие праздники и сортирует по дате
 */
const filterAndSortHolidays = (
	holidays: HolidayWithSortDate[],
	today: Dayjs,
): HolidayWithKey[] => {
	return (
		holidays
			// Оставляем только сегодняшние и будущие праздники
			.filter((holiday) => isTodayOrFuture(holiday._sortDate, today))
			// Сортируем по возрастанию даты
			.sort((a, b) => a._sortDate.diff(b._sortDate))
			// Убираем временное поле для сортировки
			.map(removeSortDate)
	);
};

/**
 * Проверяет, что дата сегодня или в будущем
 */
const isTodayOrFuture = (date: Dayjs, today: Dayjs): boolean => {
	return date.isSame(today, "day") || date.isAfter(today);
};

/**
 * Удаляет временное поле _sortDate из объекта
 */
const removeSortDate = (holiday: HolidayWithSortDate): HolidayWithKey => {
	const { _sortDate, ...holidayWithoutSortDate } = holiday;
	return holidayWithoutSortDate;
};
