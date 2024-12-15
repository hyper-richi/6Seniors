import { defineConfig } from "vitest/config";
export default defineConfig({
    test: {
        includeSource: ["src/**/*.{js,ts}"], // другие конфигурации здесь...
    },
});
