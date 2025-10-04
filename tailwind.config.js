module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D3748", // gray-700
          50: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
          300: "#CBD5E0", // gray-300
          400: "#A0AEC0", // gray-400
          500: "#718096", // gray-500
          600: "#4A5568", // gray-600
          700: "#2D3748", // gray-700
          800: "#1A202C", // gray-800
          900: "#171923", // gray-900
        },
        secondary: {
          DEFAULT: "#4A5568", // gray-600
          50: "#F7FAFC", // gray-50
          100: "#EDF2F7", // gray-100
          200: "#E2E8F0", // gray-200
          300: "#CBD5E0", // gray-300
          400: "#A0AEC0", // gray-400
          500: "#718096", // gray-500
          600: "#4A5568", // gray-600
          700: "#2D3748", // gray-700
          800: "#1A202C", // gray-800
          900: "#171923", // gray-900
        },
        accent: {
          DEFAULT: "#38B2AC", // teal-500
          50: "#E6FFFA", // teal-50
          100: "#B2F5EA", // teal-100
          200: "#81E6D9", // teal-200
          300: "#4FD1C7", // teal-300
          400: "#38B2AC", // teal-400
          500: "#319795", // teal-500
          600: "#2C7A7B", // teal-600
          700: "#285E61", // teal-700
          800: "#234E52", // teal-800
          900: "#1D4044", // teal-900
        },
        background: "#F7FAFC", // gray-50
        surface: "#EDF2F7", // gray-100
        text: {
          primary: "#1A202C", // gray-800
          secondary: "#718096", // gray-500
        },
        success: {
          DEFAULT: "#48BB78", // green-400
          50: "#F0FFF4", // green-50
          100: "#C6F6D5", // green-100
          200: "#9AE6B4", // green-200
          300: "#68D391", // green-300
          400: "#48BB78", // green-400
          500: "#38A169", // green-500
          600: "#2F855A", // green-600
          700: "#276749", // green-700
          800: "#22543D", // green-800
          900: "#1C4532", // green-900
        },
        warning: {
          DEFAULT: "#ED8936", // orange-400
          50: "#FFFAF0", // orange-50
          100: "#FEEBC8", // orange-100
          200: "#FBD38D", // orange-200
          300: "#F6AD55", // orange-300
          400: "#ED8936", // orange-400
          500: "#DD6B20", // orange-500
          600: "#C05621", // orange-600
          700: "#9C4221", // orange-700
          800: "#7B341E", // orange-800
          900: "#652B19", // orange-900
        },
        error: {
          DEFAULT: "#F56565", // red-400
          50: "#FED7D7", // red-50
          100: "#FEB2B2", // red-100
          200: "#FC8181", // red-200
          300: "#F56565", // red-300
          400: "#E53E3E", // red-400
          500: "#C53030", // red-500
          600: "#9B2C2C", // red-600
          700: "#742A2A", // red-700
          800: "#63171B", // red-800
          900: "#521B1B", // red-900
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'elevation': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'elevation-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      borderWidth: {
        '1': '1px',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'ease-out',
      },
      animation: {
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
        'blink': 'blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': 'currentColor' },
        },
      },
    },
  },
  plugins: [],
}
