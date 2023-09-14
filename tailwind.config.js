/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                'primary-color': '#a48349',
            },
            fontFamily: {
                Karia: ['Karla', 'sans-serif'],
            },
        },
        keyframes: {
            slideDown: {
                '0%': { transform: 'translateY(-90%)' },
                '90%': { transform: 'translateY(0)' },
            },
            fadeIn: {
                from: { opacity: 0 },
                to: { opacity: 1 },
            },
        },
        animation: {
            slideDown: 'slideDown 1s ease-in-out',
            fadeIn: 'fadeIn .5s ease-in-out',
        },
    },
    plugins: [],
};
