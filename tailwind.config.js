/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				veryDarkGray: "hsl(0, 0%, 17%)",
				darkGray: "hsl(0, 0%, 59%)",
			},
			fontSize: {
				18: "18px",
			},
		},
		fontFamily: {
			rubik: ["Rubik", "sans-serif"],
		},
	},
	plugins: [],
};
