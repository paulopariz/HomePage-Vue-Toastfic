export const appVue = `<script setup lang="ts">
import { Toast, useToast } from "vue-toastfic";

function handle() {
  useToast.default("First toast in Vue.js 3");
}
</script>

<template>
  <Toast />
  <button @click="handle">Toastfic Vue.js 3</button>
</template>
`;

export const pluginNuxt = `import { Toast, useToast } from "vue-toastfic";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Toast", Toast);

  return {
    provide: {
      useToast,
    },
  };
});`;

export const appNuxt = `<script setup lang="ts">
const { $useToast } = useNuxtApp();

function handle() {
  $useToast.default("First toast in Nuxt.js");
}
</script>

<template>
  <NuxtPage />
  <Toast theme="dark" />

  <button @click="handle">Toastfic Nuxt.js</button>
</template>`;

export const configNuxt = `export default defineNuxtConfig({
  build: {
    transpile: ["vue-toastfic"]
  }
})`;
