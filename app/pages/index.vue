<script setup lang="ts">
const appConfig = useAppConfig();

useHead({
  title: appConfig.siteName,
  titleTemplate: "",
});

const colors = appConfig.ui.colors;
const cls = useState(
  "cls",
  () => `text-${colors[Math.floor(Math.random() * colors.length)]}-500`,
);
</script>

<template>
  <div>
    <h1 :class="cls">Template</h1>
    <NuxtLink to="/" external> refresh </NuxtLink>
  </div>
</template>

<style scoped></style>
