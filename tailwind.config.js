/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
       // Or if using `src` directory:
       "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {},
  },
  plugins: [
     // ... other Tailwind plugins
     require('@tailwindcss/forms'),
  ],
}

