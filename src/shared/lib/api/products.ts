import { getSupabaseClient } from "@/lib/server";

import type { ProductCardType } from "@/shared/lib/constants/catalog/shared/types";

import { prodDetailsData } from "@/shared/lib/constants/catalog/shared/data";
import { HolidaysDataKeys } from "@/shared/features/home/components/holidays/utils";

type ProductType = "macaron" | "eclairs" | "waferRolls" | "potato";

interface SupabaseProduct {
	id: number;
	name: string;
	slug: string;
	title?: string | null;
	shortDescription?: string | null;
	fullDescription?: string | null;
	description?: string | null;
	price: number;
	imageUrl?: string | null;
	gallery?: string[] | null;
	flavors?: string[] | null;
	category?: string | null;
	typeProduct?: string | null;
	typeHoliday?: string | null;
}

/**
 * Преобразует slug с дефисами в формат колонки Supabase (без дефисов)
 * Например: 'for-new-year' -> 'fornewyear'
 */
function slugToColumnName(slug: string): string {
	return slug.replace(/-/g, "");
}

/**
 * Определяет название таблицы в Supabase в зависимости от типа продукта
 */
function getTableName(typeProduct: ProductType): string {
	const tableMap: Record<ProductType, string> = {
		macaron: "macarons",
		eclairs: "eclairs",
		waferRolls: "waferrolls",
		potato: "potato",
	};
	return tableMap[typeProduct];
}

export async function getProductBySlug(
	slug: string,
	typeProduct: ProductType,
): Promise<ProductCardType | null> {
	try {
		const supabase = await getSupabaseClient();
		const tableName = getTableName(typeProduct);

		// В вашей структуре продукты хранятся как jsonb колонки
		// Название колонки в Supabase = slug без дефисов (например, 'fornewyear' вместо 'for-new-year')
		const columnName = slugToColumnName(slug);

		// Получаем колонку с именем, равным преобразованному slug
		const { data, error } = await supabase
			.from(tableName)
			.select(columnName) // Выбираем колонку с именем = slug без дефисов
			.limit(1)
			.single();

		if (error) {
			if (error.code === "PGRST116") {
				// Запись не найдена
				return null;
			}
			return null;
		}

		if (!data) {
			return null;
		}

		// Извлекаем JSON объект из колонки
		// data - это объект, где ключ - название колонки (без дефисов), значение - jsonb объект продукта
		const dataRecord = data as unknown as Record<string, unknown>;
		const productData = dataRecord[columnName] as unknown as SupabaseProduct;

		if (!productData) {
			return null;
		}

		// Преобразуем данные из Supabase в формат ProductCardType
		return transformSupabaseProductToProductCard(productData, typeProduct);
	} catch (error) {
		return null;
	}
}

/**
 * Преобразует продукт из Supabase в формат ProductCardType
 */
function transformSupabaseProductToProductCard(
	supabaseProduct: SupabaseProduct, // Используем any, так как структура из jsonb может отличаться
	typeProduct: ProductType,
): ProductCardType {
	// В вашей структуре данных из jsonb колонок используются поля:
	// title, slug, price, description, flavor (массив объектов), typeHoliday, gallery и т.д.

	return {
		id: supabaseProduct.id,
		typeProduct: typeProduct,
		slug: supabaseProduct.slug,
		title: supabaseProduct.title || supabaseProduct.name || "",
		description: supabaseProduct.description || "",
		price: supabaseProduct.price,
		gallery: supabaseProduct.gallery || [],
		flavor: supabaseProduct.flavors,
		typeHoliday: supabaseProduct.typeHoliday || "newYear",
		productDetails:
			prodDetailsData[
				typeProduct === "macaron"
					? "macaron"
					: typeProduct === "eclairs"
						? "eclairs"
						: typeProduct === "waferRolls"
							? "waferRolls"
							: "potato"
			],
	} as ProductCardType;
}

/**
 * Получает все продукты определенного типа из таблицы Supabase
 * В структуре БД продукты хранятся как JSONB колонки
 */
export async function getAllProductsByType(
	typeProduct: ProductType,
): Promise<ProductCardType[]> {
	try {
		const supabase = await getSupabaseClient();
		const tableName = getTableName(typeProduct);

		// Получаем все строки из таблицы
		const { data: allRows, error } = await supabase
			.from(tableName)
			.select("*")
			.limit(1000);

		if (error) {
			throw error;
		}

		if (!allRows || allRows.length === 0) {
			return [];
		}

		const products: ProductCardType[] = [];

		// Обрабатываем все строки в таблице
		for (const row of allRows) {
			// Проходим по всем колонкам в строке (кроме служебных полей)
			for (const [columnName, columnValue] of Object.entries(row)) {
				// Пропускаем служебные поля
				if (
					columnName === "id" ||
					columnName === "created_at" ||
					columnName === "updated_at"
				) {
					continue;
				}

				// Пропускаем null или не-объекты
				if (!columnValue || typeof columnValue !== "object") {
					continue;
				}

				// columnValue - это JSONB объект продукта
				const productData = columnValue as unknown as SupabaseProduct;

				// Проверяем, что это валидный продукт
				if (productData && (productData.name || productData.title)) {
					const transformedProduct = transformSupabaseProductToProductCard(
						productData,
						typeProduct,
					);
					products.push(transformedProduct);
				}
			}
		}

		return products;
	} catch (error) {
		console.error(`Error fetching products for type ${typeProduct}:`, error);
		return [];
	}
}

/**
 * Получает все продукты из Supabase по типу праздника
 */
export async function getAllProductsByHoliday(
	typeHoliday?: HolidaysDataKeys,
): Promise<ProductCardType[]> {
	try {
		const supabase = await getSupabaseClient();

		// Получаем продукты из всех таблиц (macarons, eclairs, waferRolls, potato)
		const allProducts: ProductCardType[] = [];

		const productTypes: ProductType[] = [
			"macaron",
			"eclairs",
			"waferRolls",
			"potato",
		];

		for (const typeProduct of productTypes) {
			const tableName = getTableName(typeProduct);

			// В вашей структуре продукты хранятся как jsonb колонки
			// Получаем все строки (на случай, если продукты распределены по нескольким строкам)
			const { data: allRows, error } = await supabase
				.from(tableName)
				.select("*")
				.limit(1000);

			if (error) {
				continue; // Пропускаем таблицу, если есть ошибка
			}

			if (!allRows || allRows.length === 0) {
				continue; // Пропускаем пустые таблицы
			}

			// Обрабатываем все строки в текущей таблице
			for (const rows of allRows) {
				// Проходим по всем колонкам в строке (кроме служебных полей, если они есть)
				for (const [columnName, columnValue] of Object.entries(rows)) {
					// Пропускаем служебные поля, если они есть
					if (
						columnName === "id" ||
						columnName === "created_at" ||
						columnName === "updated_at"
					) {
						continue;
					}

					// Пропускаем null или undefined значения
					if (!columnValue || typeof columnValue !== "object") {
						continue;
					}

					// columnValue - это jsonb объект продукта
					const productData = columnValue as unknown as SupabaseProduct;

					// Проверяем, соответствует ли продукт нужному типу праздника
					if (productData && productData.typeHoliday === typeHoliday) {
						// Используем тип продукта из текущей итерации
						const transformedProduct = transformSupabaseProductToProductCard(
							productData,
							typeProduct,
						);
						allProducts.push(transformedProduct);
					}
				}
			}
		}

		return allProducts;
	} catch (error) {
		return [];
	}
}
