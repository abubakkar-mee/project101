export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme : {
        extend: {
            keyframes : {
                drop : {
                    "0%" : {transform:"translateY(0px)"},
                    "25%" : {transform:"translateY(20px)"},
                    "50%" : {transform:"translateY(0px)"},
                    "75%" : {transform:"translateY(-20px)"},
                    "100%" : {transform: "translateY(0px)"}
                }
            },
            animation: {
                drop : "drop 0.3s ease-in infinite"
            }
        }
    }
}