import daisyui from 'daisyui'
import typography from '@tailwindcss/typography'

import type { Config } from 'tailwindcss'

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}'
	],

	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		}
	},

	plugins: [typography, daisyui],

	// daisyUI config (optional - here are the default values)
	daisyui: {
		themes: ['light'], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
		darkTheme: 'dark', // name of one of the included themes for dark mode
		base: true, // applies background color and foreground color for root element by default
		styled: true, // include daisyUI colors and design decisions for all components
		utils: true, // adds responsive and modifier utility classes
		prefix: '', // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
		themeRoot: ':root' // The element that receives theme color CSS variables
	}
} as Config
