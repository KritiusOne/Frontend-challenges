/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			"primary": {
				"vDarkBlue":	"#070439",
				"desaturedBlue": "#585989"
			},
			"accent": {
				"brightBlue": "#3065f8",
				"moderateCyan": "#3c9f8f"
			},
			"neutral": {
				"whiteBlue": "#f6f6fe",
				"lightGray": "#bfbfbf"
			}
		},
		fontFamily: {
			body: ["railway", "monospace"],
			titles: ["sans-serif","system-ui"]
		},
	},
	plugins: [],
}
