import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#17212B',
        navy: '#123B66',
        muted: '#5B6875',
        line: '#D9E1E8',
        paper: '#F4F7FA'
      }
    }
  },
  plugins: []
};
export default config;