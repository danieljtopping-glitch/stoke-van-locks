/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Redefined for the new Brand Red scheme (mapped to original class names)
        navy: {
          100: '#f4f4f5', // zinc-100
          700: '#27272a', // zinc-800
          800: '#18181b', // zinc-900 (used as main dark bg)
          900: '#09090b', // zinc-950 (used as header/deep bg)
        },
        amber: {
          300: '#ef4444', // red-500 light
          400: '#e11d48', // rose-600 hover
          500: '#dc2626', // red-600 primary
          600: '#b91c1c', // red-700 darker
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
