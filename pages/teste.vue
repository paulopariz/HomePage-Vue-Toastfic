<script setup lang="ts">
import { useToast } from "vue-toastfic";

function handle() {
  useToast.default("Duration: 10000");
}
</script>

<template>
  <Toast />
  <button @click="handle">Toastfic Vue.js 3</button>
</template>
