import {
	boolean,
	integer,
	jsonb,
	pgEnum,
	pgTable,
	serial,
	text,
	timestamp,
	varchar,
} from "drizzle-orm/pg-core";

// Enum для вкусов - предопределенные значения для consistent данных
export const flavorEnum = pgEnum("flavor", [
	"raspberry", // Малина
	"salted_caramel", // Соленая карамель
	"chocolate", // Шоколад
	"currant", // Смородина
	"lavender", // Лаванда
	"cherry", // Вишня
	"pistachio", // Фисташка
	"vanilla", // Ваниль
	"lemon", // Лимон
	"assorted", // Ассорти (для наборов)
]);

// Основная таблица макарон
export const macaronsTable = pgTable("macarons", {
	// Системные поля
	id: serial("id").primaryKey(), // Автоинкрементный первичный ключ

	// Основная информация о товаре
	name: varchar("name", { length: 255 }).notNull(), // Название товара (обязательное)
	slug: varchar("slug", { length: 300 }).unique().notNull(), // ЧПУ для URL (уникальное)

	// Описания
	shortDescription: text("short_description"), // Краткое описание для карточек
	fullDescription: text("full_description"), // Полное описание для страницы товара

	// Цены и наличие
	price: integer("price").notNull(), // Текущая цена в копейках (обязательная)
	originalPrice: integer("original_price"), // Исходная цена для акций
	isAvailable: boolean("is_available").default(true), // Доступен для заказа
	inStock: integer("in_stock").default(0), // Количество на складе

	// Классификация и категоризация
	category: varchar("category", { length: 100 }).default("gift_sets"), // Категория товара
	flavors: jsonb("flavors").$type<string[]>(), // Массив вкусов в наборе
	primaryFlavor: flavorEnum("primary_flavor"), // Основной вкус для фильтрации

	// Медиа-контент
	imageUrl: varchar("image_url", { length: 500 }), // Основное изображение
	gallery: jsonb("gallery").$type<string[]>(), // Галерея дополнительных фото

	// Флаги и особенности
	isPopular: boolean("is_popular").default(false), // Популярный товар (вывод на главной)
	isGiftSet: boolean("is_gift_set").default(false), // Подарочный набор
	hasPrint: boolean("has_print").default(false), // С печатью на макарунах
	piecesCount: integer("pieces_count"), // Количество штук в наборе

	// Пищевая ценность (хранится как JSON)
	nutrition: jsonb("nutrition").$type<{
		proteins: number; // Белки на 100г
		fats: number; // Жиры на 100г
		carbs: number; // Углеводы на 100г
		calories: number; // Калории на 100г
	}>(),

	// Состав продукта
	composition: text("composition"), // Ингредиенты

	// Условия хранения
	storageConditions: text("storage_conditions"), // Текстовое описание условий
	shelfLife: integer("shelf_life"), // Срок годности в днях
	bestBeforeHours: integer("best_before_hours"), // Лучшие вкусовые качества (часы)

	// Физические характеристики
	weight: integer("weight"), // Вес в граммах
	dimensions: jsonb("dimensions").$type<{
		length?: number; // Длина упаковки
		width?: number; // Ширина упаковки
		height?: number; // Высота упаковки
	}>(),

	// Мета-данные
	createdAt: timestamp("created_at").defaultNow(), // Дата создания записи
	updatedAt: timestamp("updated_at").defaultNow(), // Дата последнего обновления
});
