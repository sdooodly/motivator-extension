module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './popup.html',
  ],
  theme: {
    extend: {
      colors: {
        vintage: {
          light: {
            bg: '#f8f5e9', // cream
            card: '#f3e9d2', // light tan
            accent: '#b48a78', // muted brown
            border: '#e2c9a0', // pale gold
            text: '#5a4632', // brown
            red: '#b97a7a', // muted red
            blue: '#7a8ab9', // faded blue
            green: '#7ab99a', // faded green
          },
          dark: {
            bg: '#2d221b', // deep brown
            card: '#3e2f23', // dark tan
            accent: '#e2c9a0', // gold
            border: '#5a4632', // brown
            text: '#f8f5e9', // cream
            red: '#b97a7a', // muted red
            blue: '#7a8ab9', // faded blue
            green: '#7ab99a', // faded green
          },
        },
      },
      fontFamily: {
        vintage: ["Georgia", "serif"],
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        vintage: '0 2px 8px 0 rgba(90, 70, 50, 0.08)',
      },
    },
  },
  plugins: [],
}; 