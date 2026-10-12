/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
      },
      colors: {
        // Original Jelcos green — restored
        teal: {
          50: '#F2F9E8',
          100: '#E2F0D3',
          200: '#C6E2AC',
          500: '#6FA83F',
          600: '#4E8A2A',
          700: '#114232',
          800: '#0A2E22',
        },
        ink: {
          DEFAULT: '#1C2B33',
          soft: '#43565F',
          faint: '#75878F',
        },
        clay: {
          100: '#F3EFE2',
          200: '#E4DCC3',
          500: '#8AA63F',
          600: '#4E8A2A',
        },
        sand: {
          DEFAULT: '#FAF8F1',
          deep: '#F2F0E4',
        },
        // original brand tokens
        jelcos: {
          bright: '#8bc53f',
          dark: '#114232',
          darker: '#0a2e22',
          light: '#f2f9e8',
        },
        cream: {
          DEFAULT: '#FFFFFF',
          deep: '#F4F6F0',
        },
        blush: {
          50: '#F2F9E8',
          100: '#E2F0D3',
          200: '#C6E2AC',
          300: '#9CCB7A',
          500: '#6FA83F',
          600: '#4E8A2A',
          700: '#114232',
        },
        peach: {
          100: '#FBF3DF',
          200: '#F2E6BE',
          300: '#E5D189',
          500: '#B9A44A',
        },
        sage: {
          100: '#E2F0D3',
          200: '#C6E2AC',
          300: '#9CCB7A',
          500: '#6FA83F',
          600: '#4E8A2A',
          700: '#114232',
        },
        mist: {
          100: '#EDF4EC',
          200: '#D6E5D5',
          300: '#A9C7A8',
        },
        cocoa: {
          DEFAULT: '#1C2B33',
          soft: '#43565F',
          faint: '#75878F',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'float-soft': 'float-soft 6s ease-in-out infinite',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
};
