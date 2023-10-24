/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: ['./src/**/*.js','./src/**/*.jsx',],
  theme: {
    extend: {},
  },
  plugins: [],
}
=======
  content: ['./src/**/*.js', './src/**/*.jsx', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
>>>>>>> 2082d47 (Updated FrontEnd)
