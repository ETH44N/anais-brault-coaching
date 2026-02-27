import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#faf9f6',
          100: '#f5f0e8',
          200: '#e8dfd0',
          300: '#d4c5a9',
          400: '#c9a96e',
          500: '#b8944f',
          600: '#a17d3a',
          700: '#836430',
          800: '#6b502a',
          900: '#594326',
        },
        navy: {
          50: '#f0f1f5',
          100: '#d9dce6',
          200: '#b3b9cd',
          300: '#8d96b4',
          400: '#6b749e',
          500: '#4a5283',
          600: '#3a4169',
          700: '#2b3150',
          800: '#1e2340',
          900: '#141829',
          950: '#0c0f1a',
        },
        sage: {
          50: '#f4f7f4',
          100: '#e4ebe3',
          200: '#c9d7c7',
          300: '#a8bda5',
          400: '#8aa686',
          500: '#6b8c67',
          600: '#547151',
          700: '#435a41',
          800: '#374936',
          900: '#2e3d2d',
        },
        cream: {
          50: '#fffefb',
          100: '#fefcf5',
          200: '#fdf8ea',
          300: '#faf2d9',
          400: '#f5e8c0',
          500: '#eedca0',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(201, 169, 110, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(201, 169, 110, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
