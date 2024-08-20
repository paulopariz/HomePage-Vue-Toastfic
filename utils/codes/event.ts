// eslint-disable-next-line quotes
export const event = `<script setup lang="ts">
import { useToast } from "vue-toastfic";

function handle() {
  useToast.success("Sucesso", {
    description: "Agora execute outra função, clicando em 'ok'.",
    handle: {
      click: () => hello(),
      text: "Ok",
    },
  });
}

function hello() {
  useToast.default("Hello World!");
}
</script>

<template>
  <Toast />

  <button @click="handle">Show</button>
</template>`;
