<script setup lang="ts">
definePageMeta({
  layout: "home",
});
const { $router } = useNuxtApp();

import { IconNuxtLight, IconVueLight } from "~/assets/icons/managers";
import { Button } from "~/components/ui/button";

import { useNpmInfo } from "~/composables/apiNpm";

const DataGithub = defineAsyncComponent(() => import("~/components/_default/home/data-github.vue"));
const DataNpm = defineAsyncComponent(() => import("~/components/_default/home/data-npm.vue"));
const RedirectForm = defineAsyncComponent(() => import("~/components/_default/home/redirect-form.vue"));

const { npmInfo } = useNpmInfo();

function openRepository() {
  window.open("https://github.com/paulopariz/vue-toastfic", "_blank");
}
</script>

<template>
  <div class="h-dvh w-full">
    <section class="absolute left-1/2 top-[45%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3">
      <span
        v-if="npmInfo?.last_version"
        class="flex items-center gap-1 rounded-sm px-2 py-1 text-start text-xs underline"
      >
        <PhosphorIconLightning color="#eede2b" weight="fill" /> {{ $t("pages.home.last-version") }}
        <span class="font-semibold">v{{ npmInfo?.last_version }}</span>
      </span>

      <Skeleton v-else class="h-6 w-36" />

      <h1
        class="inline-flex animate-text text-nowrap bg-[linear-gradient(110deg,var(--foreground),45%,#a2a2a2,55%,var(--foreground))] bg-[length:200%_100%] bg-clip-text text-6xl font-black -tracking-wide text-transparent max-sm:text-5xl"
      >
        Vue Toastfic
      </h1>

      <p class="text-center text-lg tracking-wide text-muted-foreground max-sm:text-sm">
        {{ $t("pages.home.desc-lib") }}
      </p>

      <div class="z-40 mt-4 flex items-center gap-4">
        <Button size="lg" class="font-medium" @click="$router.push('/getting-started')">{{
          $t("pages.home.get-started")
        }}</Button>
        <Button size="lg" variant="secondary" class="flex items-center gap-2 font-medium" @click="openRepository">
          <PhosphorIconGithubLogo size="16" color="var(--icon)" />
          Github
        </Button>
      </div>

      <!-- circles -->
      <div
        class="circle absolute -left-36 -top-28 -z-10 flex size-80 items-center justify-center rounded-full bg-green-light blur-3xl max-sm:-left-24 max-sm:-top-20 max-sm:size-56"
      />
      <div
        class="circle absolute -right-32 -top-28 -z-10 flex size-80 items-center justify-center rounded-full bg-red-600/20 blur-3xl dark:bg-red-600/10 max-sm:-right-12 max-sm:-top-20 max-sm:size-56"
      />
      <div
        class="circle absolute -bottom-48 -left-36 -z-10 flex size-80 items-center justify-center rounded-full bg-blue-600/20 blur-3xl dark:bg-blue-600/10 max-sm:-bottom-36 max-sm:-left-24 max-sm:size-56"
      />
      <div
        class="circle absolute -bottom-48 -right-32 -z-10 flex size-80 items-center justify-center rounded-full bg-yellow-600/20 blur-3xl dark:bg-yellow-600/10 max-sm:-bottom-36 max-sm:-right-12 max-sm:size-56"
      />
    </section>
  </div>

  <section>
    <div class="absolute left-1/2 -z-20 size-14 -translate-x-1/2 rounded-full bg-foreground opacity-65 blur-3xl" />

    <span class="mb-3 flex items-center justify-center text-xs">
      {{ $t("pages.home.supported-version") }} <PhosphorIconArrowUp color="var(--green)" class="ml-1" weight="bold" />
      <span class="font-semibold"> v3.0.0</span>
    </span>
    <div class="flex items-center gap-7">
      <div class="line h-px w-1/2" />
      <IconVueLight />
      <IconNuxtLight />
      <div class="line h-px w-1/2" />
    </div>

    <div class="mt-56 grid gap-56">
      <DataGithub />

      <DataNpm />

      <RedirectForm />
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
