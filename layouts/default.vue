<script setup lang="ts">
import { NavBar, Navigation, MapNavigation, Sidebar } from "~/components/_default";
</script>

<template>
  <main>
    <NavBar />

    <main>
      <div class="container mx-auto">
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
          <div class="lg:col-span-2">
            <Sidebar />
          </div>

          <div class="overflow-hidden py-3.5 lg:col-span-6">
            <div class="grid gap-12 break-words p-4">
              <slot />

              <div class="flex items-center justify-between gap-2">
                <Navigation />
              </div>
            </div>
          </div>

          <div class="sticky top-24 hidden h-min lg:col-span-2 lg:flex">
            <MapNavigation />
          </div>
        </div>
      </div>
    </main>
  </main>
</template>
