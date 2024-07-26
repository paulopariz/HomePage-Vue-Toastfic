<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Toast
    :duration="4111000"
    position="bottom-right"
    :close="true"
    :colorful="true"
    :theme="colorMode.preference === 'dark' ? 'light' : 'dark'"
    :max-toasts="7"
    :progress-bar="false"
  />
</template>

<style>
::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
