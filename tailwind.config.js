module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#FF7F5C",
        textColor: "#3D5161",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
