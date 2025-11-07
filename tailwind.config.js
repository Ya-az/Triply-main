import forms from '@tailwindcss/forms';

const triplyPalette = {
  DEFAULT: '#0f5b4a',
  dark: '#0b3f32',
  deep: '#0d5b4a',
  forest: '#0a2f24',
  light: '#1f7f6c',
  teal: '#57b6a6',
  mint: '#c9e8e0',
  accent: '#d59c56',
  accentLight: '#f2c892',
  sand: '#f4f1ea',
  slate: '#0a2a23',
  white: '#ffffff'
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        triply: triplyPalette
      },
      fontFamily: {
        sans: ['"Cairo"', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', '"Cairo"', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 45px rgba(15, 91, 74, 0.12)',
        glow: '0 12px 35px rgba(213, 156, 86, 0.18)',
        ambient: '0 26px 60px rgba(87, 182, 166, 0.2)'
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem'
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(15, 91, 74, 0.96) 0%, rgba(87, 182, 166, 0.92) 60%, rgba(213, 156, 86, 0.88) 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(201, 232, 224, 0.6) 100%)',
        'soft-mesh': 'radial-gradient(circle at 0% 0%, rgba(201, 232, 224, 0.8) 0%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(213, 156, 86, 0.55) 0%, transparent 45%)'
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem'
      },
      transitionTimingFunction: {
        emphasized: 'cubic-bezier(0.22, 1, 0.36, 1)'
      }
    }
  },
  plugins: [forms()]
};
