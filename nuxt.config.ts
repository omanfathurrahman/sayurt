// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon"],
  googleFonts: {
    families: {
      "DM+Sans": [400, 600, 700, 800, ],
    }
  }
})