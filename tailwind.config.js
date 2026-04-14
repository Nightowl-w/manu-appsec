/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          green: '#00ff88',
          orange: '#ff6b2b',
          red: '#ff3355',
          dark: '#060a10',
          surface: '#0c1220',
          card: '#0f1923',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'scan-line': 'scan-line 4s linear infinite',
        'flicker': 'flicker 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0,255,136,0.2), 0 0 10px rgba(0,255,136,0.1)' },
          '50%': { boxShadow: '0 0 20px rgba(0,255,136,0.5), 0 0 40px rgba(0,255,136,0.2), 0 0 80px rgba(0,255,136,0.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'scan-line': {
          '0%': { top: '-10%' },
          '100%': { top: '110%' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%': { opacity: '0.8' },
          '97%': { opacity: '1' },
          '98%': { opacity: '0.6' },
          '99%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
