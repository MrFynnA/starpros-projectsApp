/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'ping-once': 'ping 1s linear',
                'pulse-once': 'pulse 0.8s linear',
            }
        },
    },
    plugins: [],
}