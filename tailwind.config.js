
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        filter:{
          'hue-rotate':'hue-rotate(${deg}deg)'
        }
      },
    },
    
    plugins: [],
  }
  