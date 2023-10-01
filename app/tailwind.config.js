import plugin from 'tailwindcss/plugin'

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                'openlab-main': "url(/assets/openlab.jpg)"
            },
            colors: {
                'illini-orange': "#FF5F05",
                'illini-blue': "#13294B"
            }
        },
    },
    plugins: [],
}

