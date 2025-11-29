/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7d0c7',
          300: '#a3b0a3',
          400: '#7d8d7d',
          500: '#6b7a6b',
          600: '#556255',
          700: '#465046',
          800: '#3a423a',
          900: '#323832',
          950: '#1a1f1a',
        },
        accent: {
          50: '#f4f6f3',
          100: '#e6ebe4',
          200: '#ced6cc',
          300: '#aab8a7',
          400: '#7f947c',
          500: '#627862',
          600: '#4d5f4d',
          700: '#3f4d3f',
          800: '#354035',
          900: '#2d362d',
          950: '#161b16',
        },
        sage: {
          50: '#f4f6f3',
          100: '#e6ebe4',
          200: '#ced6cc',
          300: '#aab8a7',
          400: '#7f947c',
          500: '#627862',
          600: '#4d5f4d',
          700: '#3f4d3f',
          800: '#354035',
          900: '#2d362d',
          950: '#161b16',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 1.2s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

