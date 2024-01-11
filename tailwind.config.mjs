/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary' : '#15202A',
				'accent' : '#4C7BF3',
				'muted' : '#969696',
				'muted-2': '#9B9B9B',
				'error' : '#FF5466',
			},
			boxShadow: {
				'btn' : '0px 5px 10px 2px rgba(76, 123, 243, 0.23)',
				'input' : '0px 0px 7px 3px rgba(0, 0, 0, 0.00)',
			},
			
		},
	},
	plugins: [],
}
