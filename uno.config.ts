import transformerAttributifyJsx from "@unocss/transformer-attributify-jsx";
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
	shortcuts: [["flex-0-0-100", "flex-grow-0 flex-shrink-0 flex-basis-full"]],
	theme: {
		colors: {
			bgBlue: "#d4e9f9",
			bgBeige: "#f7ebe5",
			bgGrey: "#ebedee",
		},
	},
	rules: [["min-w-0", { "min-width": "0px" }]],
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
	transformers: [
		transformerDirectives(),
		transformerVariantGroup(),
		transformerAttributifyJsx(),
	],
});
