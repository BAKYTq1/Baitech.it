/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5B6BF8',
        accent: '#00C896',
        surface: '#111119',
        panel: '#0D0D16',
        border: 'rgba(91,107,248,0.18)',
      },
      boxShadow: {
        glow: '0 0 45px rgba(91,107,248,0.18)',
        soft: '0 20px 60px rgba(0, 0, 0, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'grid-dark': 'radial-gradient(circle at top, rgba(91,107,248,0.14), transparent 28%), linear-gradient(90deg, rgba(255,255,255,0.02), transparent), linear-gradient(180deg, rgba(255,255,255,0.02), transparent)',
      },
      transitionTimingFunction: {
        'soft-in-out': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
