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
			head: [{ tag: "meta", attrs: { name: "robots", content: "noindex, nofollow" } }],
			customCss: ["./src/styles/custom.css"],
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
				{
					label: "Winter",
					autogenerate: { directory: "winter" },
				},
				{
					label: "Frühling",
					autogenerate: { directory: "fruehling" },
				},
				{
					label: "Sommer",
					autogenerate: { directory: "sommer" },
				},
			],
		}),
	],

	base: "/rintje/",
	site: "https://cniklas.uber.space",
	prefetch: false,

	devToolbar: {
		enabled: false,
	},
});
