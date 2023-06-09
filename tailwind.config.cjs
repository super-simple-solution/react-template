/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: { DEFAULT: 'var(--color-yellow)' },
        purple: { DEFAULT: 'var(--color-purple)' },
        primary: {
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
        },
        neutral: {
          900: 'var(--color-neutral-900)',
          800: 'var(--color-neutral-800)',
          700: 'var(--color-neutral-700)',
          600: 'var(--color-neutral-600)',
          500: 'var(--color-neutral-500)',
          300: 'var(--color-neutral-300)',
          200: 'var(--color-neutral-200)',
          100: 'var(--color-neutral-100)',
        },
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        'text-lg': '18px',
        'text-2xl': '24px',
        'text-4xl': '36px',
      },
      fontFamily: {
        text: ['PingFang SC'],
        number: ['DIN Alternate'],
      },
      spacing: {
        6: '6px',
        14: '14px',
        16: '16px',
        24: '24px',
        32: '32px',
        40: '40px',
        80: '80px',
      },
    },
  },
  plugins: [],
}
