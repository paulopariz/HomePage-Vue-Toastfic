<template>
  <main>
    <NavBar />

    <main>
      <div class="container mx-auto">
        <div class="flex flex-col lg:grid lg:grid-cols-10 lg:gap-8">
          <div class="lg:col-span-2">
            <Sidebar v-if="$route.path !== '/'" />
          </div>

          <div class="overflow-hidden lg:col-span-8" :class="{ 'lg:!col-span-10': $route.path === '/' }">
            <div class="break-words p-4">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer v-if="$route.path === '/'" />
  </main>
</template>
