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
  localStorage.setItem("language", code);
  setLocale(code);
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger
      as-child
      class="group flex h-full w-20 cursor-pointer items-center rounded-none border-y-0 border-l border-r-0 border-border px-5 text-sm font-medium opacity-80 transition-all hover:border-transparent hover:bg-green-light hover:text-green"
    >
      <Button variant="outline"> <PhosphorIconGearSix size="21" /> </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent class="w-56" align="end">
      <DropdownMenuLabel> Preferências </DropdownMenuLabel>
      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuLabel> Tema </DropdownMenuLabel>

        <DropdownMenuItem class="flex items-center gap-4 text-xs" @click="colorMode.preference = 'light'">
          <PhosphorIconSun size="18" weight="duotone" color="var(--icon)" />
          Light
        </DropdownMenuItem>

        <DropdownMenuItem class="flex items-center gap-4 text-xs" @click="colorMode.preference = 'dark'">
          <PhosphorIconMoonStars size="18" weight="duotone" color="var(--icon)" />
          Dark
        </DropdownMenuItem>

        <DropdownMenuItem class="flex items-center gap-4 text-xs" @click="colorMode.preference = 'system'">
          <PhosphorIconMonitor size="18" weight="duotone" color="var(--icon)" />
          System
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuLabel> Idioma </DropdownMenuLabel>

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
