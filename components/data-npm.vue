<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CurveType } from "@unovis/ts";
import { AreaChart } from "@/components/ui/chart-area";

import { ref, onMounted, watch } from "vue";

import { useNpmInfo } from "~/composables/apiNpm";
import { useNpmDownloads } from "~/composables/apiNpmDownloads";

const dayActive = ref(7);
const { npmInfo } = useNpmInfo();
const { fetchNpmDownloads } = useNpmDownloads();

const downloads = ref<{ day: string; downloads: number }[]>([]);

const limitedVersions = computed(() => {
  return npmInfo.value?.versions?.slice(0, 17).reverse() || [];
});

async function setDays(days: number) {
  dayActive.value = days;
  downloads.value = await fetchNpmDownloads(days);
}

onMounted(async () => {
  await setDays(dayActive.value);
});

watch(
  () => dayActive.value,
  async (newValue) => {
    await setDays(newValue);
  }
);
</script>
<template>
  <div class="grid gap-5">
    <h1 class="flex items-center gap-2 text-3xl font-semibold">
      <PhosphorIconHash color="var(--green)" />
      Npm
    </h1>

    <p class="max-w-4xl leading-7 tracking-wider text-muted-foreground">
      Pacote oficial do vue-toastfic no npm. Aqui você pode baixar qualquer versão, acompanhar as atualizações e mais.
      Lembre-se de que as versões anteriores à <span class="font-extrabold underline">v1.0.0</span> são apenas para
      testes.
    </p>

    <section class="mt-10 grid">
      <div class="flex size-full flex-col">
        <header class="flex items-center justify-between">
          <div>
            <h1 class="font-semibold">Downloads:</h1>
            <p class="text-sm leading-7 tracking-wider text-muted-foreground">
              Quantidade de downloads feitas nos últimos {{ dayActive }} dias.
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline"> Versões </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" class="max-h-72 w-32 overflow-auto">
              <DropdownMenuItem
                v-for="(version, index) in limitedVersions"
                :key="index"
                class="flex items-center justify-between gap-4"
              >
                {{ version.version }}

                <span v-if="index === 0" class="rounded-full px-1 text-[11px] text-green"> latest </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <div class="mt-10 flex items-center gap-3">
          <button
            class="flex h-7 items-center justify-center gap-3 rounded-sm border px-3 text-xs tracking-wider transition-all hover:scale-95"
            :disabled="dayActive === 7"
            @click="setDays(7)"
          >
            <span class="size-2 rounded-full bg-border" :class="{ 'bg-green': dayActive === 7 }" /> 7 dias
          </button>

          <button
            class="flex h-7 items-center justify-center gap-3 rounded-sm border px-3 text-xs tracking-wider transition-all hover:scale-95"
            :disabled="dayActive === 30"
            @click="setDays(30)"
          >
            <span class="size-2 rounded-full bg-border" :class="{ 'bg-green': dayActive === 30 }" /> 30 dias
          </button>
        </div>

        <AreaChart
          class="mt-5 h-40 w-full"
          index="day"
          :data="downloads.length > 0 ? downloads : [{ day: '15/06/2024', downloads: 0 }]"
          :colors="['var(--green)']"
          :categories="['downloads']"
          :show-grid-line="false"
          :show-legend="false"
          :show-x-axis="false"
          :show-y-axis="false"
          :curve-type="CurveType.Linear"
        />
      </div>
    </section>
  </div>
</template>
