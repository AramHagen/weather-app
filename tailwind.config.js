/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./styles/*.scss", "./scripts/*.js", "./src/**/*.{scss,js}"],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                brightRed: 'hsl(12, 88%, 59%)',
                brightRedLight: 'hsl(12, 88%, 69%)',
                brightRedSupLight: 'hsl(12, 88%, 95%)',
                darkBlue: 'hsl(228, 39%, 23%)',
                darkGrayishBlue: 'hsl(227, 12%, 61%)',
                veryDarkBlue: 'hsl(233, 12%, 13%)',
                veryPaleRed: 'hsl(13, 100%, 96%)',
                veryLightGray: 'hsl(0, 0%, 98%)',
                violentViolet: '#240B48',
                blackcurrant: '#190733',
                paua: '#1F1D47',
                blueGemOP: 'rgba(72,49,157,.2)',
                blueGem: 'rgb(72,49,157)',
            },
            fontFamily: {
                vietnam: ['"Be Vietnam Pro"', 'sans-serif'],
            },
        },
        fontSize: {
            xs: ['0.75rem', '1rem'], // 12px font-size, 16px line-height
            sm: ['0.9375rem', '1.25rem'], // 15px font-size, 20px line-height
            base: ['1.125rem', '1.5rem'], // 18px font-size, 24px line-height
            lg: ['1.25rem', '1.75rem'], // 20px font-size, 28px line-height
            xl: ['1.5rem', '2rem'], // 24px font-size, 32px line-height
            '2xl': ['1.875rem', '2.25rem'], // 30px font-size, 36px line-height
            '3xl': ['2.25rem', '2.5rem'], // 36px font-size, 40px line-height
            '4xl': ['3rem', '1'], // 48px font-size, 48px line-height
            '5xl': ['3.75rem', '1'], // 60px font-size, 60px line-height
            '6xl': ['4.5rem', '1'], // 72px font-size, 72px line-height
            '7xl': ['6rem', '1'], // 96px font-size, 96px line-height
            '8xl': ['8rem', '1'], // 128px font-size, 128px line-height
        },
        lineHeight: {
            '15': '3.75rem', // 60px (custom line-height)
            '12': '3rem',    // 48px (optional)
            '9': '2.25rem',  // 36px
            '6': '1.5rem',   // 24px
        },
        fontFamily: {
            'inter': ['Inter', 'sans-serif']
        },
        backgroundImage: {
            'login-bg': "url('/weather-app/assets/images/background-image-login.jpg')",
            'login-bg-local': "url('./assets/images/background-image-login.jpg')"
        }
    },
    plugins: [],
}

