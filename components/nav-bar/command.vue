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
import { IconNpm } from "~/assets/icons/managers";

const colorMode = useColorMode();

const open = ref(false);
const value = ref("");

const links = ref([
  { name: "Iniciar", value: "start" },
  { name: "Versões", value: "versions" },
  { name: "Instalar", value: "install" },
]);

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
</script>

<template>
  <div>
    <Button
      size="xs"
      variant="outline"
      class="relative ml-5 inline-flex h-8 w-full items-center justify-start whitespace-nowrap rounded-md border border-border bg-background px-4 py-2 text-xs font-normal text-muted-foreground shadow-none ring-offset-background transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:pr-12 md:w-40 lg:w-64"
      @click="openCommand"
    >
      Pesquisar documentação...

      <kbd
        class="pointer-events-none absolute right-2 top-[0.3rem] inline-flex h-5 min-h-5 select-none items-center gap-0.5 rounded border border-border bg-muted px-1.5 pt-0.5 font-sans text-[11.4px] font-semibold opacity-100 sm:flex"
      >
        <span class="text-[11px] font-semibold">⌘</span>
        J
      </kbd>
    </Button>
    <CommandDialog v-model:open="open">
      <CommandInput placeholder="Pesquisar documentação...." />
      <CommandList>
        <CommandEmpty>Sem resultados.</CommandEmpty>

        <CommandGroup heading="Formulário">
          <CommandItem value="form" class="group flex items-center gap-3">
            <PhosphorIconPaperPlaneTilt color="var(--icon)" size="16" weight="fill" />
            Sugestões e melhorias
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Utilitários">
          <CommandItem value="github" class="group flex items-center gap-[21px]">
            <PhosphorIconGithubLogo size="21" />
            Repositório no github
          </CommandItem>

          <CommandItem value="npm" class="group flex items-center gap-3">
            <IconNpm />
            Pacote no npm
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links">
          <CommandItem
            v-for="(link, index) in links"
            :key="index"
            :value="link.value"
            class="group flex items-center gap-3"
            @select="
              (ev) => {
                if (typeof ev.detail.value === 'string') {
                  value = ev.detail.value;
                }
                open = false;
              }
            "
          >
            <PhosphorIconFolder
              class="transition-opacity duration-300 group-hover:opacity-0"
              color="var(--icon)"
              size="16"
              weight="fill"
            />
            <PhosphorIconFolderOpen
              class="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              color="var(--icon)"
              size="16"
              weight="fill"
            />
            {{ link.name }}
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Tema">
          <CommandItem value="light" class="group flex items-center gap-3" @select="colorMode.preference = 'light'">
            <PhosphorIconSun size="16" weight="duotone" color="var(--icon)" />
            Light
          </CommandItem>

          <CommandItem value="dark" class="group flex items-center gap-3" @select="colorMode.preference = 'dark'">
            <PhosphorIconMoonStars size="16" weight="duotone" color="var(--icon)" />
            Dark
          </CommandItem>

          <CommandItem value="system" class="group flex items-center gap-3" @select="colorMode.preference = 'system'">
            <PhosphorIconMonitor size="16" weight="duotone" color="var(--icon)" />
            System
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  </div>
</template>
