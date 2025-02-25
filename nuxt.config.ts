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
      },
    },
  },
});
