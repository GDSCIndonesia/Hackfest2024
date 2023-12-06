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
        'top': "url('/libraries/images/svg/headTopRight.svg')"
      },
      colors: {
        'hackBlue': '#428EFF',
        'hackYellow': '#FB9A07',
        'hackWhite': '#FFFFFF',
        'hackBlack': '#141414',
        'hackGrey': '#919090',
        'softDark': '#202124',
        'softBlue': '#73A9FF',
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
