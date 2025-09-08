/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // HTML 파일 위치
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더 내 모든 js, ts, jsx, tsx 파일
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#10B981",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        logo: ["Pacifico", "cursive"], // 예시: 로고용 특별 폰트
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 4px rgba(0,0,0,0.1)",
        strong: "0 4px 8px rgba(0, 0, 0, 0.2)",
      },
      fontSize: {
        xxs: "0.625rem",
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      lineHeight: {
        relaxed: "1.625",
        loose: "2",
      },
    },
  },
  plugins: [],
};
