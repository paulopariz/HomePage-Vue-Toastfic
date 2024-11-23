<script setup lang="ts">
import Command from "../nav-bar/command.vue";
import Card from "./card.vue";
import Group from "./group.vue";

import { useLinks } from "~/composables/useLinks";

const { getting_started, style, use } = useLinks();
</script>

<template>
  <aside
    class="fixed hidden h-screen overflow-y-auto overflow-x-hidden border-r bg-background py-8 pr-6 lg:sticky lg:top-16 lg:-mx-4 lg:block lg:max-h-[calc(100vh-4rem)]"
  >
    <div class="relative">
      <Command />

      <div class="mt-8 grid gap-10">
        <Group :title="$t('components.nav-bar.command.gettingStarted')" :links="getting_started" />
        <Group :title="$t('components.nav-bar.command.style')" :links="style" />
        <Group :title="$t('components.nav-bar.command.use')" :links="use" />
      </div>
    </div>

    <Card />
  </aside>
</template>
