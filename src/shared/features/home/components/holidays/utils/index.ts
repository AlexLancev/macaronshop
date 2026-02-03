import dayjs, { type Dayjs } from "dayjs";

import { holidaysData } from "../constants";

export type HolidaysDataKeys = keyof typeof holidaysData;

interface Holiday {
	id: number;
	date: string | null;
	title: string;
	path: string;
	cardColor: string;
	pathIcon: string;
	event?: string;
	allRussianHoliday?: boolean;
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
export const getUpcomingHolidays = (options?: {
	startIndex?: number;
	limit?: number;
	getFirstKeyOnly?: boolean;
}): {
	singleHolidayKey?: HolidaysDataKeys | null;
	upcomingHolidays: HolidayWithKey[];
} => {
	const startIndex = options?.startIndex ?? 0;
	const limit = options?.limit ?? 6;
	const getFirstKeyOnly = options?.getFirstKeyOnly ?? false;

	const today = dayjs();
	const currentYear = today.year();
	const nextYear = currentYear + 1;

	const holidaysWithCalculatedDates = calculateHolidayDates(
		holidaysData,
		currentYear,
		nextYear,
		today,
	);

	const upcomingHolidays = filterAndSortHolidays(
		holidaysWithCalculatedDates,
		today,
	);

	const result: {
		singleHolidayKey?: HolidaysDataKeys | null;
		upcomingHolidays: HolidayWithKey[];
	} = {
		upcomingHolidays: upcomingHolidays.slice(startIndex, startIndex + limit),
	};

	if (getFirstKeyOnly) {
		result.singleHolidayKey = upcomingHolidays[1]?.key ?? null;
	}

	return result;
};

/**
 * Вычисляет ближайшие даты для каждого праздника
 */
const calculateHolidayDates = (
	holidays: typeof holidaysData,
	currentYear: number,
	nextYear: number,
	today: Dayjs,
) => {
	return (Object.entries(holidays) as [HolidaysDataKeys, Holiday][])
		.map(([key, holiday]): HolidayWithSortDate | null => {
			const { allRussianHoliday, date } = holiday;

			// Пропускаем праздники без даты
			if (!date?.trim().length && allRussianHoliday) return null;

			const calculatedDate = calculateNextOccurrence(
				date,
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
	dateString: string | null,
	currentYear: number,
	nextYear: number,
	today: Dayjs,
): Dayjs => {
	const actualDateString = dateString ?? dayjs().format("MM-DD");

	const currentYearDate = dayjs(`${currentYear}-${actualDateString}`);
	const nextYearDate = dayjs(`${nextYear}-${actualDateString}`);

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
