<script setup lang="ts">
const NavBar = defineAsyncComponent(() => import("~/components/_default/nav-bar/index.vue"));
const Navigation = defineAsyncComponent(() => import("~/components/_default/layouts/navigation.vue"));
const MapNavigation = defineAsyncComponent(() => import("~/components/_default/layouts/map-navigation.vue"));
const Sidebar = defineAsyncComponent(() => import("~/components/_default/sidebar/index.vue"));
const SidebarMobile = defineAsyncComponent(() => import("~/components/_default/sidebar-mobile/index.vue"));
</script>

<template>
  <main>
    <NavBar />
    <SidebarMobile class="lg:hidden" />

    <main>
      <div class="container mx-auto max-lg:mt-12 max-sm:px-4">
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
          <div class="lg:col-span-2">
            <Sidebar />
          </div>

          <div class="overflow-hidden py-3.5 lg:col-span-6">
            <div class="flex flex-col gap-12 break-words">
              <slot />

              <div class="flex items-center justify-between gap-2">
                <Navigation />
              </div>
            </div>
          </div>

          <div class="sticky top-24 z-[1] hidden h-min lg:col-span-2 lg:flex">
            <MapNavigation />
          </div>
        </div>
      </div>
    </main>
  </main>
</template>
