import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
	output: 'hybrid',
	adapter: cloudflare(),
	site: 'https://next-acmg.pages.dev',
	integrations: [
		starlight({
			title: 'ACMG.ca',
			social: {
				github: 'https://github.com/momiller121',
				twitter: 'https://twitter.com/ACMGca',
				instagram: 'https://www.instagram.com/acmg.ca',
			  },
			logo: {
				src: './src/assets/acmg-logo.svg',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			sidebar: [
				{
					label: 'About Us',
					autogenerate: { directory: 'about-us' },
				},
				{
					label: 'General Resources',
					autogenerate: { directory: 'resources' },
				},
				{
					label: 'Becomming a Guide',
					autogenerate: { directory: 'prospective-guides' },
				},
			],
		}),
	],
});
