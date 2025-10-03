import { getSupabaseClient } from "server";

import type { Flavor } from "../../../shared/types";
import type { Macaron } from "../types";

export const macaronsApi = {
	// Просто получаем все макаруны
	getAllMacarons: async (): Promise<Macaron[]> => {
		const supabase = await getSupabaseClient();
		const { data: macarons, error } = await supabase
			.from("macarons")
			.select("*");

		if (error) throw error;
		return macarons;
	},

	// Просто получаем макарун по ID
	getMacaronById: async (id: number): Promise<Macaron> => {
		const supabase = await getSupabaseClient();
		const { data: macaron, error } = await supabase
			.from("macarons")
			.select("*")
			.eq("id", id)
			.single();

		if (error) throw error;
		return macaron;
	},

	// Просто получаем по вкусу
	getMacaronsByFlavor: async (flavor: Flavor): Promise<Macaron[]> => {
		const supabase = await getSupabaseClient();
		const { data: macarons, error } = await supabase
			.from("macarons")
			.select("*")
			.eq("flavor", flavor);

		if (error) throw error;
		return macarons;
	},

	// Просто получаем популярные
	getPopularMacarons: async (): Promise<Macaron[]> => {
		const supabase = await getSupabaseClient();
		const { data: macarons, error } = await supabase
			.from("macarons")
			.select("*")
			.eq("is_popular", true)
			.order("popularity_score", { ascending: false });

		if (error) throw error;
		return macarons;
	},

	// Поиск по названию
	searchMacarons: async (query: string): Promise<Macaron[]> => {
		const supabase = await getSupabaseClient();
		const { data: macarons, error } = await supabase
			.from("macarons")
			.select("*")
			.ilike("name", `%${query}%`);

		if (error) throw error;
		return macarons;
	},
};
