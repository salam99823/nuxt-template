// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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

  components: [
    {
      path: "~/components",
      pathPrefix: true,
    },
  ],

  imports: {
    dirs: ["stores"],
  },

  devtools: { enabled: true },

  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
      templateParams: {
        siteName: "template",
        separator: "-",
      },
    },
  },

  future: { compatibilityVersion: 4 },

  nitro: {
    preset: "cloudflare-pages",
  },

  hub: {
    database: true,
    cache: true,
  },

  pinia: {
    storesDirs: ["~/stores/**"],
  },

  tailwindcss: {
    exposeConfig: true,
  },

  compatibilityDate: "2025-03-11",
});
