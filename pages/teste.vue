<script setup lang="ts">
const { $useToast } = useNuxtApp();

function handle() {
  $useToast.default("First toast in Nuxt.js");
}
</script>

<template>
  <NuxtPage />
  <Toast theme="dark" />

  <button @click="handle">Toastfic Nuxt.js</button>
</template>
