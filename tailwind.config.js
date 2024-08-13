import daisyui from 'daisyui';

/** @type {import("tailwindcss").Config} */
export default {
	content: ['./src/**/*{vue,js}', './packages/**/*.{vue,js}', './template/**/*.html'],
	plugins: [daisyui],
	/** @type {import("daisyui").Config} */
	daisyui: {
		themes: ['light', 'dark'],
		darkTheme: 'dark',
		logs: false,
	},
};
