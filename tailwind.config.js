/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2F4A8A", // Azul Oliman CX (botones)
          dark: "#1E376C",
          light: "#F7F8FB",
        },
        ink: "#111827",     // Gris muy oscuro para texto
        line: "#E5E7EB",    // Bordes suaves
        successBg: "#EAF6EE",
        painBg: "#FDECEC",
      },
      boxShadow: {
        fab: "0 12px 30px rgba(39,174,96,.35)",
        card: "0 10px 24px rgba(17,24,39,.06)",
        btn: "0 10px 22px rgba(47,74,138,.25)",
      },
    },
  },
  plugins: [],
};
