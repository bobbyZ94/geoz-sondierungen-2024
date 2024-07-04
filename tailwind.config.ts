import flowbitePlugin from 'flowbite/plugin'

import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			colors: {
				// flowbite-svelte
				// lime
				primary: {
					'50': '#f7fee7',
					'100': '#ecfccb',
					'200': '#d9f99d',
					'300': '#bef264',
					'400': '#a3e635',
					'500': '#84cc16',
					'600': '#65a30d',
					'700': '#4d7c0f',
					'800': '#3f6212',
					'900': '#365314'
				}
			}
		}
	},

	plugins: [flowbitePlugin, require('@tailwindcss/typography')]
} as Config
