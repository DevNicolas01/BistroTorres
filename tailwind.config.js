/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#1A1208',
        mogno:    '#3D2B1F',
        caramel:  '#C8934A',
        creme:    '#F5EDD6',
        kraft:    '#E8DCC8',
        fumo:     '#7A6555',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body:    ['Lato', 'sans-serif'],
      },
      animation: {
        'steam1': 'steam1 3s ease-in-out infinite',
        'steam2': 'steam2 3.4s ease-in-out infinite 0.4s',
        'steam3': 'steam3 3.8s ease-in-out infinite 0.8s',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        steam1: {
          '0%':   { transform: 'translateY(0) scaleX(1)', opacity: '0.7' },
          '50%':  { transform: 'translateY(-18px) scaleX(1.3)', opacity: '0.4' },
          '100%': { transform: 'translateY(-36px) scaleX(0.8)', opacity: '0' },
        },
        steam2: {
          '0%':   { transform: 'translateY(0) scaleX(1)', opacity: '0.6' },
          '50%':  { transform: 'translateY(-20px) scaleX(0.8)', opacity: '0.3' },
          '100%': { transform: 'translateY(-40px) scaleX(1.2)', opacity: '0' },
        },
        steam3: {
          '0%':   { transform: 'translateY(0) scaleX(1)', opacity: '0.5' },
          '50%':  { transform: 'translateY(-15px) scaleX(1.2)', opacity: '0.25' },
          '100%': { transform: 'translateY(-30px) scaleX(0.9)', opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
