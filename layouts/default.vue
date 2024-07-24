<script setup lang="ts">
import { NavBar, Sidebar } from "~/components/_default";
</script>

<template>
  <main>
    <NavBar />

    <main>
      <div class="container mx-auto">
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
          <div class="lg:col-span-2">
            <Sidebar v-if="$route.path !== '/'" />
          </div>

          <div class="overflow-hidden py-3.5 lg:col-span-8">
            <div class="grid gap-12 break-words p-4">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </main>
  </main>
</template>
