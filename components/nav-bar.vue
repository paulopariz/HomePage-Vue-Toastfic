<script setup lang="ts">
import { Button } from "@/components/ui/button";
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
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  <nav
    class="fixed left-1/2 top-0 m-auto flex h-14 w-full -translate-x-1/2 items-center border-b border-border max-md:px-3"
  >
    <div class="container flex h-full items-center justify-between">
      <div class="flex items-center gap-1">
        <NuxtImg src="/logo.svg" alt="Vue Toasctfic" class="h-6 w-6" />

        <h1 class="text-xs font-extrabold leading-4">toastfic</h1>

        <Button
          size="xs"
          variant="outline"
          class="relative ml-5 inline-flex h-8 w-full items-center justify-start whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-xs font-normal text-muted-foreground shadow-none ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:pr-12 md:w-40 lg:w-64"
        >
          Pesquisar documentação...

          <kbd
            class="pointer-events-none absolute right-2 top-[0.3rem] inline-flex h-5 min-h-5 select-none items-center gap-0.5 rounded border border-border bg-muted px-1.5 pt-0.5 font-sans text-[11.4px] font-semibold opacity-100 sm:flex"
          >
            <span class="text-[11px] font-semibold">⌘</span>
            K
          </kbd>
        </Button>
      </div>

      <div class="flex h-full items-center">
        <NuxtLink
          to=""
          class="flex h-full cursor-pointer items-center border-l border-border px-5 text-sm font-medium opacity-80 transition-all hover:bg-green-light hover:text-green"
        >
          Iniciar
        </NuxtLink>

        <NuxtLink
          to=""
          class="flex h-full cursor-pointer items-center border-l border-border px-5 text-sm font-medium opacity-80 transition-all hover:bg-green-light hover:text-green"
        >
          Alterações
          <PhosphorIconArrowUpRight weight="bold" size="12" />
        </NuxtLink>

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
                      <img
                        :src="language.flag"
                        class="h-4 w-4 rounded-full border border-border"
                        :alt="language.name"
                      />
                      <span>{{ language.name }}</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button
                variant="outline"
                class="group flex h-full w-20 cursor-pointer items-center rounded-none border-y-0 border-l border-r-0 border-border px-5 text-sm font-medium opacity-80 transition-all hover:border-transparent hover:bg-green-light hover:text-green"
              >
                <PhosphorIconGithubLogo size="21" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Repositório no github</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button
                variant="outline"
                class="border-l-1 group flex h-full w-20 cursor-pointer items-center rounded-none border-x border-y-0 border-border px-5 text-sm font-medium opacity-80 transition-all hover:border-transparent hover:bg-green-light hover:text-green"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M4 10v4h2v-3h1v3h1v-4zm5 0v5h2v-1h2v-4zm3 1v2h-1v-2zm2-1v4h2v-3h1v3h1v-3h1v3h1v-4zM3 9h18v6h-9v1H8v-1H3z"
                  />
                </svg>
              </Button>
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
