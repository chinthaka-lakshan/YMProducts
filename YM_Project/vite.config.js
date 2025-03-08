import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // laravel({
        //     input: ["resources/css/app.css", "resources/js/app.js"],
        //     refresh: true,
        // }),
    ],
});
