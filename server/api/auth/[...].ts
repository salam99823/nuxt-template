import { NuxtAuthHandler } from "#auth";

const config = useRuntimeConfig();

export default NuxtAuthHandler({
  secret: config.auth.secret,
  providers: [
  ],
});
