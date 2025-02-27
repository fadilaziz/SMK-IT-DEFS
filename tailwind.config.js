/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
    content: [
        "./index.html", // Menunjukkan file di luar folder
        "./src/**/*.{html,js}", // Semua file HTML dan JS dalam folder src
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['poppins', 'poppins'], // Ganti font default sans
          roboto: ['poppins', 'poppins'], // Tambahan font lain
        },
        keyframes: {
          fadeIn: {
              '0%': { opacity: '0', transform: 'translateY(20px)' },
              '100%': { opacity: '1', transform: 'translateY(0)' },
          },
      },
      },
    },
    plugins: [],
  };
  
=======
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

>>>>>>> 03457065dbf2f783c9f0901f3d8a3f0f694c8c79
