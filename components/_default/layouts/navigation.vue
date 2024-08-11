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
  { path: "/getting-started/palette", name: "Paleta de cores" },
  { path: "/getting-started/position", name: "Posição" },
  { path: "/getting-started/close-toast", name: "Fechar toast" },
  { path: "/getting-started/colorful", name: "Ativar/Desativar cores" },
  { path: "/getting-started/duration", name: "Tempo de fechamento" },
  { path: "/getting-started/maximum", name: "Máximo de toasts" },
  { path: "/getting-started/theme", name: "Tema" },
  { path: "/getting-started/", name: "Lidar com eventos" },
  { path: "/getting-started/", name: "Opções" },
  { path: "/getting-started/", name: "Personalização do toast" },
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

    <Button :disabled="!nextRoute" variant="secondary" class="flex items-center gap-2" @click="navigateTo(nextRoute)">
      {{ nextRouteName }}
      <PhosphorIconCaretRight color="var(--icon)" weight="bold" />
    </Button>
  </div>
</template>
