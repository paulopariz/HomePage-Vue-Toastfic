<script setup lang="ts">
import { Footer, NavBar } from "~/components/_default";
</script>

<template>
  <main>
    <NavBar />
    <div class="container mb-20 mt-32">
      <slot />
    </div>
    <Footer />
  </main>
</template>
