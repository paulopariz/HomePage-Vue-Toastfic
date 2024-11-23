<script setup lang="ts">
const NavBar = defineAsyncComponent(() => import("~/components/_default/nav-bar/index.vue"));
const Footer = defineAsyncComponent(() => import("~/components/_default/home/footer.vue"));
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
