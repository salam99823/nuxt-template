// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/fonts",
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
  ],
});