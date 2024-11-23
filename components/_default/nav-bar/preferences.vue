<script lang="ts" setup>
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";

import { brazil, english, france, italy, spain } from "@/assets/icons/flags";

const { locale, setLocale } = useI18n();
const colorMode = useColorMode();

const languages = ref([
  { code: "pt", name: "Português", flag: brazil },
  { code: "es", name: "Español", flag: spain },
  { code: "en", name: "English", flag: english },
  { code: "fr", name: "Français", flag: france },
  { code: "it", name: "Italiano", flag: italy },
]);

const languageSelected = computed(() => {
  const selectedLanguage = languages.value.find((lang) => lang.code === locale.value);
  return selectedLanguage;
});

function selectLanguage(code: string) {
  localStorage?.setItem("language", code);
  setLocale(code);
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      as-child
      aria-label="Theme and Language preferences"
      class="group grid h-full w-20 cursor-pointer place-content-center place-items-center rounded-none border-y-0 border-l border-r-0 border-border bg-transparent px-5 text-sm font-medium opacity-80 transition-all hover:border-transparent hover:bg-green-light hover:text-green max-md:h-9 max-md:w-10 max-md:rounded-sm max-md:border max-md:p-0"
    >
      <section class="grid justify-center">
        <PhosphorIconGearSix size="21" class="max-md:hidden" />
        <PhosphorIconList size="18" class="md:hidden" />
      </section>
    </DropdownMenuTrigger>

    <DropdownMenuContent class="w-56" align="end">
      <DropdownMenuLabel class="max-md:hidden"> {{ $t("components.nav-bar.preferences.title") }} </DropdownMenuLabel>
      <DropdownMenuSeparator class="max-md:hidden" />

      <DropdownMenuGroup class="md:hidden">
        <DropdownMenuLabel> {{ $t("components.nav-bar.preferences.links") }} </DropdownMenuLabel>

        <DropdownMenuItem class="flex items-center gap-4 text-xs">
          <PhosphorIconArrowUpRight weight="bold" size="18" />
          <NuxtLink to="/getting-started"> {{ $t("components.nav-bar.preferences.start") }} </NuxtLink>
        </DropdownMenuItem>

        <DropdownMenuItem class="flex items-center gap-4 text-xs">
          <PhosphorIconArrowUpRight weight="bold" size="18" />
          <NuxtLink
            target="_blank"
            href="/https://github.com/paulopariz/vue-toastfic/releases"
            aria-label="Open changelog of Vue Toastfic project on GitHub"
          >
            {{ $t("components.nav-bar.preferences.changelog") }}
          </NuxtLink>
        </DropdownMenuItem>

        <DropdownMenuItem
          class="flex items-center gap-4 text-xs"
          aria-label="Open Vue Toastfic project repository on GitHub"
        >
          <PhosphorIconArrowUpRight weight="bold" size="18" />
          <NuxtLink target="_blank" href="https://github.com/paulopariz/vue-toastfic" rel="noopener noreferrer">
            {{ $t("components.nav-bar.preferences.github") }}
          </NuxtLink>
        </DropdownMenuItem>

        <DropdownMenuItem class="flex items-center gap-4 text-xs" aria-label="Open Vue Toastfic package in NPM">
          <PhosphorIconArrowUpRight weight="bold" size="18" />
          <NuxtLink target="_blank" href="https://www.npmjs.com/package/vue-toastfic" rel="noopener noreferrer">
            {{ $t("components.nav-bar.preferences.npm") }}
          </NuxtLink>
        </DropdownMenuItem>
      </DropdownMenuGroup>

      <DropdownMenuSeparator class="md:hidden" />

      <DropdownMenuGroup>
        <DropdownMenuLabel> {{ $t("components.nav-bar.preferences.theme") }} </DropdownMenuLabel>

        <DropdownMenuItem class="flex items-center gap-4 text-xs" @click="colorMode.preference = 'light'">
          <PhosphorIconSun size="18" weight="duotone" color="var(--icon)" />
          {{ $t("components.nav-bar.preferences.light") }}
        </DropdownMenuItem>

        <DropdownMenuItem class="flex items-center gap-4 text-xs" @click="colorMode.preference = 'dark'">
          <PhosphorIconMoonStars size="18" weight="duotone" color="var(--icon)" />
          {{ $t("components.nav-bar.preferences.dark") }}
        </DropdownMenuItem>

        <DropdownMenuItem class="flex items-center gap-4 text-xs" @click="colorMode.preference = 'system'">
          <PhosphorIconMonitor size="18" weight="duotone" color="var(--icon)" />
          {{ $t("components.nav-bar.preferences.system") }}
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuLabel> {{ $t("components.nav-bar.preferences.language") }} </DropdownMenuLabel>

        <DropdownMenuSub>
          <DropdownMenuSubTrigger class="flex items-center gap-2">
            <img
              :src="languageSelected?.flag"
              class="h-4 w-4 rounded-full border border-border"
              :alt="languageSelected?.name"
            />
            <span>{{ languageSelected?.name }}</span>
          </DropdownMenuSubTrigger>

          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem
                v-for="language in languages"
                :key="language.code"
                class="flex items-center gap-2"
                @click="selectLanguage(language.code)"
              >
                <img :src="language.flag" class="h-4 w-4 rounded-full border border-border" :alt="language.name" />
                <span>{{ language.name }}</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
