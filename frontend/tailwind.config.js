// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'login-color': '#1235C7',
                'reg-bg': '#EDF2F7',
                'nav-bg': '#D2D2D2',
            },
            boxShadow: {
                'multi-1': '3px 3px 9px rgba(0, 0, 0, 0.1)',
                'multi-2': '11px 11px 16px rgba(0, 0, 0, 0.09)',
                'multi-3': '25px 26px 21px rgba(0, 0, 0, 0.05)',
                'multi-4': '44px 46px 25px rgba(0, 0, 0, 0.01)',
            },
        },
    },
    plugins: [],
}
