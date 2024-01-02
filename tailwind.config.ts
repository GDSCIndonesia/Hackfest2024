import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/react");

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				count: "url('/libraries/images/svg/countdownBackgound.svg')",
				sponsors: "url('/libraries/images/svg/sponsorsBg.svg')",
				organizer: "url('/libraries/images/svg/organizerBg.svg')",
				discord: "url('/libraries/images/svg/discord.svg')",
			},
			colors: {
				hackBlue: "#428EFF",
				hackRed: "#EA4335",
				hackYellow: "#FBBC04",
				hackGreen: "#34A853",
				hackOrange: "#FB9A07",
				hackWhite: "#FFFFFF",
				hackBlack: "#141414",
				hackGrey: "#919090",
				softDark: "#202124",
				softBlue: "#73A9FF",
				softGrey: "#DADCE0",
				softBlack: "#262b30",
			},
			fontFamily: {
				gooReg: "gooReg, sans-serif",
				gooMed: "gooMed, sans-serif",
				gooBold: "gooBold, sans-serif",
				gooRegit: "gooRegit, sans-serif",
				gooMedit: "gooMedit, sans-serif",
				gooBoldit: "gooBoldit, sans-serif",
			},
		},
	},
	darkMode: "class",
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		nextui()
	],
};
export default config;
