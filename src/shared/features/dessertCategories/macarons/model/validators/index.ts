// shared/features/dessertCategories/macarons/data/validators.ts
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { macaronsTable } from "../schema"; // Импорт схемы таблицы

// Zod схемы для валидации данных при создании/вставке
export const insertMacaronSchema = createInsertSchema(macaronsTable, {
	// Кастомные валидации поверх автоматически сгенерированных
	name: z.string().min(1).max(255), // Название обязательно, макс 255 символов
	slug: z.string().min(1).max(300), // Slug обязателен, макс 300 символов
	price: z.number().positive(), // Цена должна быть положительным числом
	piecesCount: z.number().positive().optional(), // Количество штук положительное, необязательное
	nutrition: z
		.object({
			// Валидация структуры пищевой ценности
			proteins: z.number().min(0), // Белки неотрицательные
			fats: z.number().min(0), // Жиры неотрицательные
			carbs: z.number().min(0), // Углеводы неотрицательные
			calories: z.number().min(0), // Калории неотрицательные
		})
		.optional(), // Поле nutrition необязательное
});

// Схема для валидации при выборке данных (обычно менее строгая)
export const selectMacaronSchema = createSelectSchema(macaronsTable);

// Дополнительные кастомные валидаторы для фильтрации макарон
export const macaronFiltersSchema = z.object({
	category: z.string().optional(), // Фильтр по категории
	flavor: z.string().optional(), // Фильтр по вкусу
	minPrice: z.number().min(0).optional(), // Минимальная цена (неотрицательная)
	maxPrice: z.number().min(0).optional(), // Максимальная цена (неотрицательная)
	isGiftSet: z.boolean().optional(), // Фильтр по подарочным наборам
	hasPrint: z.boolean().optional(), // Фильтр по наличию печати
});

// Схема для валидации параметров поиска макарон
export const searchMacaronsSchema = z.object({
	query: z.string().min(1).max(100), // Поисковый запрос (1-100 символов)
	limit: z.number().min(1).max(100).default(20), // Лимит результатов (1-100, по умолчанию 20)
});
