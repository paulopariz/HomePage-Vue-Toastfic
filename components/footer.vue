<template>
  <footer class="relative m-auto mt-28 h-32 w-full overflow-hidden border-t border-border bg-background max-md:px-3">
    <div class="container flex items-start justify-between py-5">
      <div class="flex cursor-pointer items-center gap-1">
        <NuxtImg src="/logo.svg" alt="Vue Toasctfic" class="h-9 w-9" />

        <h1 class="text-sm font-extrabold leading-4">toastfic</h1>
      </div>

      <div class="grid gap-2">
        <NuxtLink
          href="https://github.com/paulopariz/vue-toastfic"
          target="_blank"
          class="text-xs tracking-wide hover:underline"
        >
          Github
        </NuxtLink>

        <NuxtLink
          href="https://www.npmjs.com/package/vue-toastfic"
          target="_blank"
          class="text-xs tracking-wide hover:underline"
        >
          Npm
        </NuxtLink>

        <NuxtLink href="https://github.com/paulopariz" target="_blank" class="text-xs tracking-wide hover:underline">
          paulopariz
        </NuxtLink>
      </div>
    </div>

    <div
      class="absolute -top-36 left-1/2 flex size-48 -translate-x-1/2 items-center justify-center rounded-full bg-border blur-3xl"
    />
  </footer>
</template>
