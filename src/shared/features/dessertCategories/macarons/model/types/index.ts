import type { flavorEnum, macaronsTable } from "../schema";

// Основные типы из Drizzle
export type MacaronRow = typeof macaronsTable.$inferSelect;
export type NewMacaronRow = typeof macaronsTable.$inferInsert;
export type DbMacaronFlavor = (typeof flavorEnum.enumValues)[number];

// Дополнительные типы для бизнес-логики — см. ниже актуальные интерфейсы

import type { BaseDessert, SearchResult } from "../../../shared/types";

export type MacaronSearchResult = SearchResult<Macaron>;

// Типы для форм
export type CreateMacaronForm = Omit<
	NewMacaronRow,
	"id" | "createdAt" | "updatedAt"
>;
export type UpdateMacaronForm = Partial<CreateMacaronForm>;

export interface Macaron extends BaseDessert {
	category: "macaron";
}
