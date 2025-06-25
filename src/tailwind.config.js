/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*/.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans :['Inter', 'ui-sans-serif', 'system-ui']
            },
            colors: {
                primary: '#6366f1',
                accent: '#ec4899',
                dark: '#1e1e2f'
            },
            boxShadow: {
                xl: '0 10px 25px rgba(0, 0, 0, 0.25)'
            }
        }
    },
    plugins:[]
}