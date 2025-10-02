// drizzle.config.ts

import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config();

export default {
	schema: "./src/shared/**/data/schema.ts", // путь к твоим схемам
	out: "./drizzle/migrations", // куда генерировать миграции
	dialect: "postgresql",
	dbCredentials: {
		url: process.env.DATABASE_URL!,
	},
} satisfies Config;
