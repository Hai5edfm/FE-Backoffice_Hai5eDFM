module.exports = {
  content: [
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/*/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "users-icon": "url('../assets/icons/users-icon.svg')",
        "directors-icon": "url('../assets/icons/directors-icon.svg')",
        "musicians-icon": "url('../assets/icons/musicians-icon.svg')",
        "movies-icon": "url('../assets/icons/movies-icon.svg')",
        "writers-icon": "url('../assets/icons/writers-icon.svg')",
        "roles-icon": "url('../assets/icons/roles-icon.svg')",
      },
    },
  },
  plugins: [],
};
