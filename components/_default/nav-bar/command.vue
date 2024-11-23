<script setup lang="ts">
import { useMagicKeys } from "@vueuse/core";

import { ref, watch } from "vue";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { IconNpmLight } from "~/assets/icons/managers";

import { useLinks } from "~/composables/useLinks";

const { getting_started, style, use } = useLinks();
const colorMode = useColorMode();

const open = ref(false);

const { Meta_J, Ctrl_J } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.key === "j" && (e.metaKey || e.ctrlKey)) e.preventDefault();
  },
});

watch([Meta_J, Ctrl_J], (v) => {
  if (v[0] || v[1]) openCommand();
});

function openCommand() {
  open.value = !open.value;
}

function redirectForm() {
  window.open("https://tally.so/r/w4jjPk", "_blank");
}
</script>

<template>
  <div>
    <Button
      size="xs"
      variant="outline"
      class="relative inline-flex h-10 w-full min-w-48 items-center justify-start whitespace-nowrap rounded-md border border-border bg-background px-4 py-2 text-xs font-normal text-muted-foreground shadow-none ring-offset-background transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:pr-12"
      @click="openCommand"
    >
      <div class="pr-2">
        <PhosphorIconMagnifyingGlass color="var(--icon)" size="16" />
      </div>
      {{ $t("components.nav-bar.command.searchPlaceholder") }}

      <kbd
        class="pointer-events-none absolute right-2 top-2 inline-flex h-5 min-h-5 select-none items-center gap-0.5 rounded border border-border bg-muted px-1.5 pt-0.5 font-sans text-xs font-semibold opacity-100 sm:flex"
      >
        <span class="font-semibold">⌘</span>
        J
      </kbd>
    </Button>
    <CommandDialog v-model:open="open">
      <CommandInput :placeholder="$t('components.nav-bar.command.inputPlaceholder')" />
      <CommandList>
        <CommandEmpty>{{ $t("components.nav-bar.command.noResults") }}</CommandEmpty>

        <CommandGroup :heading="$t('components.nav-bar.command.form')">
          <CommandItem value="form" class="group flex items-center gap-3" @click="redirectForm">
            <PhosphorIconPaperPlaneTilt color="var(--icon)" size="16" weight="fill" />
            {{ $t("components.nav-bar.command.suggestions") }}
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup :heading="$t('components.nav-bar.command.utilities')">
          <NuxtLink href="https://github.com/paulopariz/vue-toastfic" target="_blank">
            <CommandItem value="github" class="group flex items-center gap-4">
              <PhosphorIconGithubLogo size="21" />
              {{ $t("components.nav-bar.command.githubRepo") }}
            </CommandItem>
          </NuxtLink>

          <NuxtLink href="https://www.npmjs.com/package/vue-toastfic" target="_blank">
            <CommandItem value="npm" class="group flex items-center gap-3">
              <IconNpmLight class="size-7" />
              {{ $t("components.nav-bar.command.npmPackage") }}
            </CommandItem>
          </NuxtLink>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup :heading="$t('components.nav-bar.command.documentation')">
          <CommandGroup :heading="$t('components.nav-bar.command.gettingStarted')">
            <div class="flex flex-wrap gap-2">
              <NuxtLink v-for="(link, index) in getting_started" :key="index" :to="link.to">
                <CommandItem
                  :value="link.text"
                  class="w-min text-nowrap rounded-sm border px-2 text-xs"
                  @select="open = false"
                >
                  {{ link.text }}
                </CommandItem>
              </NuxtLink>
            </div>
          </CommandGroup>

          <CommandGroup :heading="$t('components.nav-bar.command.style')">
            <div class="flex flex-wrap gap-2">
              <NuxtLink v-for="(link, index) in style" :key="index" :to="link.to">
                <CommandItem
                  :value="link.text"
                  class="w-min text-nowrap rounded-sm border px-2 text-xs"
                  @select="open = false"
                >
                  {{ link.text }}
                </CommandItem>
              </NuxtLink>
            </div>
          </CommandGroup>

          <CommandGroup :heading="$t('components.nav-bar.command.use')">
            <div class="flex flex-wrap gap-2">
              <NuxtLink v-for="(link, index) in use" :key="index" :to="link.to">
                <CommandItem
                  :value="link.text"
                  class="inline-block text-nowrap rounded-sm border px-2 text-xs"
                  @select="open = false"
                >
                  {{ link.text }}
                </CommandItem>
              </NuxtLink>
            </div>
          </CommandGroup>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup :heading="$t('components.nav-bar.command.theme')">
          <CommandItem value="light" class="group flex items-center gap-3" @select="colorMode.preference = 'light'">
            <PhosphorIconSun size="16" weight="duotone" color="var(--icon)" />
            {{ $t("components.nav-bar.command.themeLight") }}
          </CommandItem>

          <CommandItem value="dark" class="group flex items-center gap-3" @select="colorMode.preference = 'dark'">
            <PhosphorIconMoonStars size="16" weight="duotone" color="var(--icon)" />
            {{ $t("components.nav-bar.command.themeDark") }}
          </CommandItem>

          <CommandItem value="system" class="group flex items-center gap-3" @select="colorMode.preference = 'system'">
            <PhosphorIconMonitor size="16" weight="duotone" color="var(--icon)" />
            {{ $t("components.nav-bar.command.themeSystem") }}
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </div>
</template>
