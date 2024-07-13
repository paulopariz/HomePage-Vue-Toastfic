<script setup lang="ts">
import { Button } from "~/components/ui/button";
</script>

<template>
  <!-- <button
    @click="
      () =>
        $useToast.error('mweorm', {
          description: 'ewrewrwer',
        })
    "
  >
    useToast
  </button> -->

  <section class="mt-52 flex flex-col items-center gap-3">
    <h1 class="text-5xl font-black -tracking-wide">Vue Toastfic</h1>
    <p class="text-lg tracking-wide opacity-70">Light and simple toast library for Vue and Nuxt</p>

    <div class="mt-4 flex items-center gap-4">
      <Button class="font-medium">Get Started</Button>
      <Button variant="secondary" class="flex items-center gap-2 font-medium">
        <PhosphorIconGithubLogo size="16" color="var(--icon)" /> Github</Button
      >
    </div>
  </section>
</template>
