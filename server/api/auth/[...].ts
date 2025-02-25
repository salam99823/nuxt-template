import GoogleProvider from "next-auth/providers/google";
import YandexProvider from "next-auth/providers/yandex";
import VkProvider from "next-auth/providers/vk";
import { NuxtAuthHandler } from "#auth";

const config = useRuntimeConfig();

export default NuxtAuthHandler({
  secret: config.auth.secret,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GoogleProvider.default({
      clientId: config.auth.google.id,
      clientSecret: config.auth.google.secret,
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    YandexProvider.default({
      clientId: config.auth.yandex.id,
      clientSecret: config.auth.yandex.secret,
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    VkProvider.default({
      clientId: config.auth.vk.id,
      clientSecret: config.auth.vk.secret,
    }),
  ],
});
