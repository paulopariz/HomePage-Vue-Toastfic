<script setup lang="ts">
import Preferences from "./preferences.vue";
import Command from "./command.vue";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { IconNpmLight } from "~/assets/icons/managers";

import { useRoute } from "vue-router";

const route = useRoute();

// function openDialog(event: KeyboardEvent) {
//   if (event.ctrlKey && event.key.toLowerCase() === "k") {
//   }
// }
</script>

<template>
  <nav class="sticky top-0 z-10 flex h-16 w-full items-center border-b border-border backdrop-blur-2xl">
    <div class="container flex h-full items-center justify-between max-sm:px-4">
      <div class="flex items-center gap-10">
        <NuxtLink to="/" class="flex items-center gap-1">
          <NuxtImg src="/logo.svg" :alt="$t('components.nav-bar.logoAlt')" class="h-6 w-6" />
          <h1 class="text-xs font-extrabold leading-4">toastfic</h1>
        </NuxtLink>

        <Command v-if="route.path === '/'" />
      </div>

      <div class="flex h-full items-center max-md:hidden">
        <NuxtLink
          to="/getting-started"
          class="flex h-full cursor-pointer items-center border-l border-border px-5 text-sm font-medium opacity-80 transition-all hover:bg-green-light hover:text-green"
        >
          {{ $t("components.nav-bar.gettingStarted") }}
        </NuxtLink>

        <NuxtLink
          href="https://github.com/paulopariz/vue-toastfic/releases"
          target="_blank"
          class="flex h-full cursor-pointer items-center border-l border-border px-5 text-sm font-medium opacity-80 transition-all hover:bg-green-light hover:text-green"
        >
          {{ $t("components.nav-bar.changelog") }}
          <PhosphorIconArrowUpRight weight="bold" size="12" />
        </NuxtLink>

        <Preferences />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <NuxtLink
                href="https://github.com/paulopariz/vue-toastfic"
                target="_blank"
                class="group flex h-full w-20 cursor-pointer items-center justify-center rounded-none border-y-0 border-l border-r-0 border-border px-5 text-sm font-medium opacity-80 transition-all hover:border-transparent hover:bg-green-light hover:text-green"
                aria-label="Open Vue Toastfic project repository on GitHub"
              >
                <PhosphorIconGithubLogo size="21" />
              </NuxtLink>
            </TooltipTrigger>
            <TooltipContent>
              <p>{{ $t("components.nav-bar.githubTooltip") }}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <NuxtLink
                href="https://www.npmjs.com/package/vue-toastfic"
                target="_blank"
                class="border-l-1 group flex h-full w-20 cursor-pointer items-center justify-center rounded-none border-x border-y-0 border-border px-5 text-sm font-medium opacity-80 transition-all hover:border-transparent hover:bg-green-light hover:text-green"
                aria-label="Open Vue Toastfic project repository on GitHub"
              >
                <IconNpmLight class="size-9" />
              </NuxtLink>
            </TooltipTrigger>
            <TooltipContent>
              <p>{{ $t("components.nav-bar.npmTooltip") }}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div class="md:hidden">
        <Preferences />
      </div>
    </div>
  </nav>
</template>
