<script setup lang="ts">
import { IconNuxt, IconVue } from "~/assets/icons/managers";
import { Button } from "~/components/ui/button";
import { useNpmInfo } from "~/composables/apiNpm";

const { npmInfo } = useNpmInfo();

onMounted(() => {
  console.log(npmInfo.value);
});
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
  <div class="h-[75dvh] w-full">
    <section class="absolute left-1/2 top-[45%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
      <span class="flex items-center gap-1 rounded-sm px-2 py-1 text-start text-xs underline">
        <PhosphorIconLightning color="#eede2b" weight="fill" /> Última versão
        <span class="font-semibold">v{{ npmInfo?.last_version }}</span>
      </span>
      <h1 class="text-6xl font-black -tracking-wide">Vue Toastfic</h1>
      <p class="text-lg tracking-wide opacity-70">Light and simple toast library for Vue and Nuxt</p>
      <div class="mt-4 flex items-center gap-4">
        <Button size="lg" class="font-medium">Get Started</Button>
        <Button size="lg" variant="secondary" class="flex items-center gap-2 font-medium">
          <PhosphorIconGithubLogo size="16" color="var(--icon)" /> Github</Button
        >
      </div>

      <!-- circles -->
      <div
        class="circle absolute -left-36 -top-28 -z-10 flex size-80 items-center justify-center rounded-full bg-green-light blur-3xl"
      />
      <div
        class="circle absolute -right-32 -top-28 -z-10 flex size-80 items-center justify-center rounded-full bg-red-600/10 blur-3xl"
      />
      <div
        class="circle absolute -bottom-48 -left-36 -z-10 flex size-80 items-center justify-center rounded-full bg-blue-600/10 blur-3xl"
      />
      <div
        class="circle delay-500-z-10 absolute -bottom-48 -right-32 flex size-80 items-center justify-center rounded-full bg-yellow-600/10 blur-3xl"
      />

      <!-- icons -->
      <!-- <div
        class="absolute -left-12 -top-9 flex size-11 items-center justify-center rounded-md bg-green-light text-green"
      >
        <PhosphorIconCheck size="22" />
      </div>

      <div
        class="absolute -right-10 -top-4 flex size-11 items-center justify-center rounded-md bg-red-500/10 text-red-600"
      >
        <PhosphorIconX size="22" />
      </div>

      <div
        class="absolute -bottom-20 -left-10 flex size-11 items-center justify-center rounded-md bg-blue-500/10 text-blue-600"
      >
        <PhosphorIconInfo size="22" />
      </div>

      <div
        class="absolute -bottom-24 -right-0 flex size-11 items-center justify-center rounded-md bg-yellow-500/10 text-yellow-600"
      >
        <PhosphorIconWarningCircle size="22" />
      </div> -->
    </section>
  </div>

  <section>
    <span class="mb-3 flex items-center justify-center text-xs">
      Versão suportada: <PhosphorIconArrowUp color="var(--green)" class="ml-1" weight="bold" />
      <span class="font-semibold"> v3.0.0</span>
    </span>
    <div class="flex items-center gap-7">
      <div class="line h-px w-1/2" />
      <IconVue />
      <IconNuxt />
      <div class="line h-px w-1/2" />
    </div>
  </section>
</template>

<style scoped>
.circle {
  animation: show-circle 0.3s both;
}

@keyframes show-circle {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

.line {
  transition: all 0.3s;
  background: rgb(198, 198, 198);
  background: radial-gradient(circle, rgba(198, 198, 198, 1) 25%, rgba(0, 0, 0, 0) 100%);
}
.dark .line {
  background: rgb(28, 28, 31);
  background: radial-gradient(circle, rgba(28, 28, 31, 1) 25%, rgba(0, 0, 0, 0) 100%);
}
</style>
