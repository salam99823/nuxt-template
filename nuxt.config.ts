// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@sidebase/nuxt-auth",
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
  auth: {
    isEnabled: true,
    baseURL: process.env.NUXT_AUTH_ORIGIN,
    provider: {
      type: "authjs",
      trustHost: false,
      defaultProvider: "google",
      addDefaultCallbackUrl: true,
    },
  },
  app: {
    head: {
      titleTemplate: "%s %separator %siteName",
      templateParams: {
        siteName: "",
        separator: "-",
      },
    },
  },
  runtimeConfig: {
    authOrigin: process.env.NUXT_AUTH_ORIGIN,
    auth: {
      secret: process.env.NUXT_AUTH_SECRET,
      google: {
        id: process.env.NUXT_AUTH_GOOGLE_ID,
        secret: process.env.NUXT_AUTH_GOOGLE_SECRET,
      },
      vk: {
        id: process.env.NUXT_AUTH_VK_ID,
        secret: process.env.NUXT_AUTH_VK_SECRET,
      },
      yandex: {
        id: process.env.NUXT_AUTH_YANDEX_ID,
        secret: process.env.NUXT_AUTH_YANDEX_SECRET,
      },
    },
  },
});
