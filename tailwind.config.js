module.exports = {
  mode: "jit",
  content: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "corporate": "#8fc04e",
      }
    },
  },
  plugins: [],
}