import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				jodnaPurple1: "#252472",
				jodnaPurple2: "#2321BD",
				jodnaPurpleText: "#303972",
				jodnaOrange: "#FB7D5B",
				jodnaYellow: "#FCC43E",
				jodnaGreen: "#4CBC9A",
				jodnaRed: "#FF4550",
				jodnaGray1: "#F5F5F5",
				jodnaGray2: "#C1BBEB",
				jodnaGray3: "#A098AE",
				jodnaBgButton: "#4D44B51A",
				aishubSky: "#C3EBFA",
				aishubSkyLight: "#EDF9FD",
				aishubPurple: "#CFCEFF",
				aishubPurpleLight: "#F1F0FF",
				aishubYellow: "#FAE27C",
				aishubYellowLight: "#FEFCEB",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
