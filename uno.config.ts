import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetWebFonts,
	presetWind3,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
	shortcuts: [
		// ...
	],
	theme: {
		colors: {
			// ...
		},
	},
	presets: [
		presetWind3(),
		presetAttributify(),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			provider: "google",
			fonts: {
				sans: "Montserrat:300,400,500,600,700",
				montserrat: [
					{
						name: "Montserrat",
						weights: ["300", "400", "500", "600", "700"],
						italic: true,
					},
				],
			},
		}),
		presetAnimations(),
		presetShadcn(),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
});
