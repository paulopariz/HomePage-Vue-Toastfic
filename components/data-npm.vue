<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { CurveType } from "@unovis/ts";
import { AreaChart } from "@/components/ui/chart-area";
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
  <div class="mt-56 grid gap-5">
    <h1 class="flex items-center gap-2 text-3xl font-semibold">
      <PhosphorIconHash color="var(--green)" />
      Npm
    </h1>

    <p class="max-w-4xl leading-7 tracking-wider text-muted-foreground">
      Pacote oficial do vue-toastfic no npm. Aqui você pode baixar qualquer versão, acompanhar as atualizações e mais.
      Lembre-se de que as versões anteriores à <span class="font-extrabold underline">v1.0.0</span> são apenas para
      testes.
    </p>

    <section class="mt-10 grid grid-cols-2 gap-x-10">
      <div class="flex size-full h-72 flex-col">
        <h1 class="font-semibold">Downloads:</h1>
        <p class="text-sm leading-7 tracking-wider text-muted-foreground">
          Quantidade de downloads feitas nos últimos {{ dayActive }} dias.
        </p>

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
          class="mt-5 h-40 w-3/4"
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

      <div class="flex size-full h-72 flex-col">
        <h1 class="pl-8 font-semibold">Versões:</h1>
        <p class="pl-8 text-sm leading-7 tracking-wider text-muted-foreground">Versões lançadas.</p>

        <div class="mt-7 grid grid-cols-6">
          <NuxtLink
            v-for="(version, index) in limitedVersions"
            :key="index"
            :href="`https://www.npmjs.com/package/vue-toastfic/v/${version.version}`"
            target="_blank"
            class="flex h-20 items-center justify-center rounded-md transition-all hover:bg-green-light hover:text-green hover:underline"
          >
            {{ version.version }}
          </NuxtLink>

          <NuxtLink
            href="https://www.npmjs.com/package/vue-toastfic/v/0.0.0?activeTab=versions"
            target="_blank"
            class="ml-6 mt-6 flex h-8 w-16 items-center justify-center rounded-md bg-primary text-xs text-background transition-all hover:opacity-90"
          >
            Todas
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
