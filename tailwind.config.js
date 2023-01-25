/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Raleway', 'sans-serif'],
		},
	},
	plugins: [],
}
