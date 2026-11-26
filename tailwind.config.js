/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B1B3D',      // Deep navy/midnight inspired by DrainHaus
          navy: '#0F275A',      // Royal slate navy
          blue: '#1A56DB',      // Vibrant trust blue
          accent: '#FF5E14',    // DrainHaus signature orange/amber
          accentHover: '#E04C06',
          yellow: '#FFB800',    // Warning/star badge gold
          slate: '#F4F6F9',     // Light background
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(11, 27, 61, 0.08)',
        'float': '0 20px 40px -15px rgba(255, 94, 20, 0.3)',
      }
    },
  },
  plugins: [],
}
