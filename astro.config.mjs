// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			locales: {
				root: { label: "Deutsch", lang: "de" },
			},
			title: "Das große Rintje-Vorlesebuch",
			tableOfContents: false,
			editLink: {
				baseUrl: "https://github.com/cniklas/het-grote-rintje-voorleesboek/edit/main/",
			},
			lastUpdated: true,

			sidebar: [
				{
					label: "Herbst",
					autogenerate: { directory: "herbst" },
				},
			],

			social: [{ icon: "github", label: "GitHub", href: "https://github.com/cniklas/het-grote-rintje-voorleesboek" }],
		}),
	],

	prefetch: false,

	devToolbar: {
		enabled: false,
	},
});
