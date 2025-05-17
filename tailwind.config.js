/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Light theme - inspired by washi paper and traditional Japanese colors
                'background-light': '#FFFFFF',
                'foreground-light': '#1A1A1A',
                'primary-light': '#264653',    // Deep indigo (ai) inspired
                'accent-light': '#E63946',     // Soft vermilion (reminiscent of hanko seals)

                // Dark theme - inspired by sumi ink on charcoal
                'background-dark': '#121212',
                'foreground-dark': '#EDEDED',
                'primary-dark': '#56CFE1',     // Brighter cyan variant for dark mode
                'accent-dark': '#FF8BA7',      // Softer red variant for dark mode

                // Additional neutral tones for both themes
                'surface-light': '#F9FAFB',
                'surface-dark': '#1E1E1E',
            },
            fontFamily: {
                'sans': ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
                'serif': ['Georgia', 'Times New Roman', 'serif'],
            },
            boxShadow: {
                glass: '0 4px 32px 0 rgba(31, 38, 135, 0.15)',
                'glass-dark': '0 4px 32px 0 rgba(0, 0, 0, 0.3)',
            },
            spacing: {
                '18': '4.5rem',
                '68': '17rem',
                '92': '23rem',
            },
            borderWidth: {
                '1': '1px',
            },
            transitionDuration: {
                '400': '400ms',
            },
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                md: '12px',
                lg: '16px',
                xl: '24px',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
} 