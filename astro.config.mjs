import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Menu',
			logo: {
				src: './src/assets/leon.svg',
				replacesTitle: true,
			},
			customCss: [
				'./src/Styles/custom.css',
			],
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/julioguerrero26'
				},
			],
			sidebar: [],
			tableOfContents: false
		}),
	],
});