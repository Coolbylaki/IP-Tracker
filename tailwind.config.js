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
			backgroundImage: {
				"mobile-pattern": "url('./src/assets/images/pattern-bg-mobile.png')",
				"desktop-pattern": "url('./src/assets/images/pattern-bg-desktop.png')",
			},
		},
		fontFamily: {
			rubik: ["Rubik", "sans-serif"],
		},
	},
	plugins: [],
};
