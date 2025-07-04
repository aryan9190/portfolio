/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                fraktur: ['UnifrakturCook', 'cursive'],
                fell: ['IM Fell English SC', 'serif'],
                mono: ['JetBrains Mono', 'monospace']
            },
            colors: {
                pirateGold: '#facc15',
                seaBlue: '#0d1b2a'
            }
        }
    },
    plugins: []
};