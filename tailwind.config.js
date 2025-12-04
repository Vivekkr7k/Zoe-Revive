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
          50: '#f4f7f5',
          100: '#e6ede9',
          200: '#cddbd3',
          300: '#a8c0b2',
          400: '#7fa08f',
          500: '#81987c', // Base theme color
          600: '#6d7f68',
          700: '#586656',
          800: '#485348',
          900: '#3d453c',
          950: '#1f241f',
        },
        accent: {
          50: '#f4f7f5',
          100: '#e6ede9',
          200: '#cddbd3',
          300: '#a8c0b2',
          400: '#7fa08f',
          500: '#81987c', // Base theme color
          600: '#6d7f68',
          700: '#586656',
          800: '#485348',
          900: '#3d453c',
          950: '#1f241f',
        },
        sage: {
          50: '#f4f7f5',
          100: '#e6ede9',
          200: '#cddbd3',
          300: '#a8c0b2',
          400: '#7fa08f',
          500: '#81987c', // Base theme color
          600: '#6d7f68',
          700: '#586656',
          800: '#485348',
          900: '#3d453c',
          950: '#1f241f',
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

