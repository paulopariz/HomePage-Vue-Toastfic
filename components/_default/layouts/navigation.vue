<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const { $router } = useNuxtApp();

interface IRoutes {
  path: string;
  name: string;
}

const routes: IRoutes[] = [
  { path: "/getting-started", name: "Instalar" },
  { path: "/getting-started/demo", name: "Demonstração" },
  { path: "/style/palette", name: "Paleta de cores" },
  { path: "/use/position", name: "Posição" },
  { path: "/use/close-toast", name: "Fechar toast" },
  { path: "/use/duration", name: "Tempo de fechamento" },
  { path: "/use/colorful", name: "Ativar/Desativar cores" },
  { path: "/use/maximum", name: "Máximo de toasts" },
  { path: "/use/theme", name: "Tema" },
  { path: "/use/event", name: "Lidar com eventos" },
  { path: "/use/personalize", name: "Personalização do toast" },
];

const currentIndex = computed(() => {
  return routes.findIndex((r) => r.path === route.path);
});

const prevRoute = computed(() => {
  return routes[currentIndex.value - 1]?.path;
});

const nextRoute = computed(() => {
  return routes[currentIndex.value + 1]?.path;
});

const prevRouteName = computed(() => {
  return routes[currentIndex.value - 1]?.name;
});

const nextRouteName = computed(() => {
  return routes[currentIndex.value + 1]?.name;
});

function navigateTo(path: string) {
  $router.push(path);
}
</script>

<template>
  <div class="flex w-full items-center justify-between gap-3">
    <Button variant="secondary" class="flex items-center gap-2" @click="navigateTo(prevRoute ?? '/')">
      <PhosphorIconCaretLeft color="var(--icon)" weight="bold" />
      {{ prevRouteName ?? "Página inicial" }}
    </Button>

    <Button v-if="nextRoute" variant="secondary" class="flex items-center gap-2" @click="navigateTo(nextRoute)">
      {{ nextRouteName }}
      <PhosphorIconCaretRight color="var(--icon)" weight="bold" />
    </Button>
  </div>
</template>
