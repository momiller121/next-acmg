import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import nodejs from '@astrojs/node';

export default defineConfig({
	output: 'hybrid',
	adapter: nodejs({ mode: 'middleware' }),
	site: 'https://acmg-next.three2s.com',
	integrations: [starlight({ title: 'Site with sitemap' })],
	integrations: [
		starlight({
			title: 'ACMG.ca',
			social: {
				github: 'https://github.com/momiller121',
				// linkedin: 'https://www.linkedin.com/company/astroinc',
				twitter: 'https://twitter.com/ACMGca',
				instagram: 'https://www.instagram.com/acmg.ca',
				// facebook: 'https://www.facebook.com/ACMG.ca',
			  },
			logo: {
				src: './src/assets/acmg-logo.svg',
			},
			customCss: [
				// Relative path to your custom CSS file
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
