/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors:
                {
                    'dark_slate_gray': {
                        DEFAULT: '#7d9988',
                        100: '#0b0e0c',
                        200: '#161b18',
                        300: '#202924',
                        400: '#2b3730',
                        500: '#35443b',
                        600: '#587062',
                        700: '#7d9988',
                        800: '#a8bbb0',
                        900: '#d4ddd7'
                    },
                    'feldgrau': {
                        DEFAULT: '#596b69',
                        100: '#121515',
                        200: '#232a29',
                        300: '#353f3e',
                        400: '#475453',
                        500: '#596b69',
                        600: '#758c89',
                        700: '#98a9a7',
                        800: '#bac5c4',
                        900: '#dde2e2'
                    },
                    'ebony': {
                        DEFAULT: '#515851',
                        100: '#101210',
                        200: '#202320',
                        300: '#303530',
                        400: '#414641',
                        500: '#515851',
                        600: '#727b72',
                        700: '#949d94',
                        800: '#b8bdb8',
                        900: '#dbdedb'
                    },
                    'ivory': {
                        DEFAULT: '#f5f8ea',
                        100: '#3e4918',
                        200: '#7c9130',
                        300: '#b0c85b',
                        400: '#d3e0a3',
                        500: '#f5f8ea',
                        600: '#f8faf0',
                        700: '#fafbf4',
                        800: '#fbfcf7',
                        900: '#fdfefb'
                    },
                    'sage': {
                        DEFAULT: '#c2c0a7',
                        100: '#2b2a1e',
                        200: '#55543b',
                        300: '#807e59',
                        400: '#a5a27d',
                        500: '#c2c0a7',
                        600: '#cecdb9',
                        700: '#dbdacb',
                        800: '#e7e6dc',
                        900: '#f3f3ee'
                    }
                }
        }
    },
    plugins: [require("tailwindcss-animate")],
}

