<script setup lang="ts">
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Header,
  HeaderDescription,
  HeaderTitle,
  HeaderSubDescription,
  HeaderSubTitle,
} from "@/components/_default/header";

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
    <Header>
      <HeaderTitle class="flex items-center gap-2"> Npm </HeaderTitle>
      <HeaderDescription class="">
        {{ $t("pages.home.desc-package-npm-1") }} <b>v1.0.0</b> {{ $t("pages.home.desc-package-npm-2") }}
      </HeaderDescription>
    </Header>

    <section class="mt-10 grid">
      <div class="flex size-full flex-col">
        <div class="flex items-center justify-between">
          <Header>
            <HeaderSubTitle>Downloads:</HeaderSubTitle>
            <HeaderSubDescription>
              {{ $t("pages.home.download-last-days-1") }} {{ dayActive }} {{ $t("pages.home.download-last-days-2") }}.
            </HeaderSubDescription>
          </Header>

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline"> {{ $t("pages.home.versions-npm") }} </Button>
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
        </div>

        <div class="mt-10 flex items-center gap-3">
          <button
            class="flex h-7 items-center justify-center gap-3 rounded-sm border px-3 text-xs tracking-wider transition-all hover:scale-95"
            :disabled="dayActive === 7"
            @click="setDays(7)"
          >
            <span class="size-2 rounded-full bg-muted" :class="{ '!bg-green': dayActive === 7 }" /> 7
            {{ $t("pages.home.download-last-days-2") }}
          </button>

          <button
            class="flex h-7 items-center justify-center gap-3 rounded-sm border px-3 text-xs tracking-wider transition-all hover:scale-95"
            :disabled="dayActive === 30"
            @click="setDays(30)"
          >
            <span class="size-2 rounded-full bg-muted" :class="{ '!bg-green': dayActive === 30 }" /> 30
            {{ $t("pages.home.download-last-days-2") }}
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
