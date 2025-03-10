// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxt/fonts",
    "@pinia/nuxt",
    "@nuxt/eslint",
    "@vueuse/nuxt",
    "@nuxthub/core",
  ],
  nitro: {
    preset: "cloudflare-pages",
  },
  hub: {
    database: true,
    cache: true,
  },
  tailwindcss: {
    exposeConfig: true,
  },
  pinia: {
    storesDirs: ["~/stores/**"],
  },
  imports: {
    dirs: ["stores"],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
  ],
  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
      templateParams: {
        siteName: "",
        separator: "-",
      },
    },
  },
});
