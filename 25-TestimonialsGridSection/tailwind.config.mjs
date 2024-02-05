/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			"violet": "#7541c8",
			"darkGray": "#48556a",
			"darkBlackBlue": "#19212e",
			"lightGray":"#cfcfcf",
			"lightBlue": "#ecf2f8"
		},
		fontSize: {
			sm: "13px"
		},
		screen: {
			'mobile': {'max': '375px'}
		},
		plugins: []
	}
}