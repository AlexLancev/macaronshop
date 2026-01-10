import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Утилита для получения клиента Supabase
export async function getSupabaseClient() {
	const cookieStore = await cookies();

	return createServerClient(
		process.env.NEXT_PUBLIC_DATABASE_URL!,
		process.env.NEXT_PUBLIC_DATABASE_KEY!,
		{
			cookies: {
				getAll() {
					return cookieStore.getAll();
				},
				setAll(cookiesToSet) {
					try {
						cookiesToSet.forEach(({ name, value, options }) =>
							cookieStore.set(name, value, options),
						);
					} catch {
						// Игнорируем ошибки установки cookies в Server Components
					}
				},
			},
		},
	);
}

