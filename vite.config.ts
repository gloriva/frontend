import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    cors: {
      // 브라우저를 통해 접근하고자 하는 출처
      origin: "http://localhost:3000",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // '@'를 'src' 폴더로 매핑
    },
  },
  build: {
    // outDir 위치에 .vite/manifest.json 파일을 생성
    manifest: true,
    rollupOptions: {
      // 기본 .html 진입점을 변경
      input: "index.html",
    },
  },
});
