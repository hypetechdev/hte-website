import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
    site: "https://education.hypetech.io",
    vite: {
        ssr: {
            noExternal: ["@picocss/pico"],
        },
    },
    image: {
        remotePatterns: [{ protocol: "https" }],
    },
})
