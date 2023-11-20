import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'dark-10': '#1A202C',
        'dark-20': '#717171',
        'dark-30': '#F3F5F7',
        'dark-40': '#FFFFFF',
        'support-01': '#2962FF',
        'support-02': '#0BB07B',
        'support-03': '#FFCE52',
        'support-04': '#F03D3D',
        'support-05': '#E0E0E0',
      },
      backgroundImage: {
        'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['LexendDeca', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
