<script setup lang="ts">
import Preferences from "./preferences.vue";
import Command from "./command.vue";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { IconNpmLight } from "~/assets/icons/managers";

// function openDialog(event: KeyboardEvent) {
//   if (event.ctrlKey && event.key.toLowerCase() === "k") {
//   }
// }
</script>

<template>
  <nav class="sticky top-0 z-30 flex h-16 w-full items-center border-b border-border bg-background max-md:px-3">
    <div class="container flex h-full items-center justify-between">
      <div class="flex items-center gap-10">
        <NuxtLink to="/" class="flex items-center gap-1">
          <NuxtImg src="/logo.svg" alt="Vue Toasctfic" class="h-6 w-6" />
          <h1 class="text-xs font-extrabold leading-4">toastfic</h1>
        </NuxtLink>

        <Command v-if="$route.path === '/'" />
      </div>

      <div class="flex h-full items-center">
        <NuxtLink
          to="/getting-started"
          class="flex h-full cursor-pointer items-center border-l border-border px-5 text-sm font-medium opacity-80 transition-all hover:bg-green-light hover:text-green"
        >
          Iniciar
        </NuxtLink>

        <NuxtLink
          href="https://github.com/paulopariz/vue-toastfic/releases"
          target="_blank"
          class="flex h-full cursor-pointer items-center border-l border-border px-5 text-sm font-medium opacity-80 transition-all hover:bg-green-light hover:text-green"
        >
          Alterações
          <PhosphorIconArrowUpRight weight="bold" size="12" />
        </NuxtLink>

        <Preferences />

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <NuxtLink
                href="https://github.com/paulopariz/vue-toastfic"
                target="_blank"
                variant="outline"
                class="group flex h-full w-20 cursor-pointer items-center justify-center rounded-none border-y-0 border-l border-r-0 border-border px-5 text-sm font-medium opacity-80 transition-all hover:border-transparent hover:bg-green-light hover:text-green"
              >
                <PhosphorIconGithubLogo size="21" />
              </NuxtLink>
            </TooltipTrigger>
            <TooltipContent>
              <p>Repositório no github</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <NuxtLink
                href="https://www.npmjs.com/package/vue-toastfic"
                target="_blank"
                variant="outline"
                class="border-l-1 group flex h-full w-20 cursor-pointer items-center justify-center rounded-none border-x border-y-0 border-border px-5 text-sm font-medium opacity-80 transition-all hover:border-transparent hover:bg-green-light hover:text-green"
              >
                <IconNpmLight />
              </NuxtLink>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pacote no npm</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  </nav>
</template>
