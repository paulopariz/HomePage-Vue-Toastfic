<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const { $router, $i18n } = useNuxtApp();
const { t } = $i18n;

interface IRoutes {
  path: string;
  name: string;
}

const routes: IRoutes[] = [
  { path: "/getting-started", name: t("routes-name.install") },
  { path: "/getting-started/demo", name: t("routes-name.demo") },
  { path: "/style/palette", name: t("routes-name.palette") },
  { path: "/use/position", name: t("routes-name.position") },
  { path: "/use/close-toast", name: t("routes-name.close-toast") },
  { path: "/use/duration", name: t("routes-name.duration") },
  { path: "/use/progress-bar", name: t("routes-name.progress-bar") },
  { path: "/use/colorful", name: t("routes-name.colorful") },
  { path: "/use/maximum", name: t("routes-name.maximum") },
  { path: "/use/theme", name: t("routes-name.theme") },
  { path: "/use/event", name: t("routes-name.event") },
  { path: "/use/personalize", name: t("routes-name.personalize") },
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
      {{ prevRouteName ?? $t("additionals.home-page") }}
    </Button>

    <Button v-if="nextRoute" variant="secondary" class="flex items-center gap-2" @click="navigateTo(nextRoute)">
      {{ nextRouteName }}
      <PhosphorIconCaretRight color="var(--icon)" weight="bold" />
    </Button>
  </div>
</template>
