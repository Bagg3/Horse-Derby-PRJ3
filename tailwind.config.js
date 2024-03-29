/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('tailwindcss-fluid-type'),
		require('tailwind-scrollbar'),
		require('tailwind-scrollbar-hide'),
	],
};
