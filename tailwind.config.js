/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-global)'],
        body: ['var(--font-text)'],
        mono: ['var(--font-mono)'],
        typewriter: ['var(--font-typewriter)'],
        screen: ['var(--font-screen)'],
        calligraphic: ['var(--font-calligraphic)'],
      },
      colors: {
        // Only keep essential Tailwind colors for utility classes
        // Theme colors are now handled by Chakra UI
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#faf6f1', // earth-50
            h1: {
              color: '#d4bda3', // earth-300
              fontWeight: '700',
            },
            h2: {
              color: '#d4bda3', // earth-300
              fontWeight: '600',
            },
            h3: {
              color: '#d4bda3', // earth-300
              fontWeight: '600',
            },
            strong: {
              color: '#e6d5c3', // earth-200
              fontWeight: '600',
            },
            a: {
              color: '#c2a583', // earth-400
              '&:hover': {
                color: '#d4bda3', // earth-300
              },
            },
            p: {
              color: '#f5ede3', // earth-100
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 