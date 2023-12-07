import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'count': "url('/libraries/images/svg/countdownBackgound.svg')"
      },
      colors: {
        'hackBlue': '#428EFF',
        'hackRed': '#EA4335',
        'hackYellow': '#FBBC04',
        'hackGreen': '#34A853',
        'hackOrange': '#FB9A07',
        'hackWhite': '#FFFFFF',
        'hackBlack': '#141414',
        'hackGrey': '#919090',
        'softDark': '#202124',
        'softBlue': '#73A9FF',
        'softGrey': '#DADCE0'
      },
      fontFamily: {
        'gooReg': 'gooReg, sans-serif',
        'gooMed': 'gooMed, sans-serif',
        'gooBold': 'gooBold, sans-serif',
        'gooRegit': 'gooRegit, sans-serif',
        'gooMedit': 'gooMedit, sans-serif',
        'gooBoldit': 'gooBoldit, sans-serif',
      },
    },
  },
  plugins: [],
}
export default config
