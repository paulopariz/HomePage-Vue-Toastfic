<script setup lang="ts">
interface Link {
  to: string;
  text: string;
}

defineProps<{
  title: string;
  links: Link[];
}>();

const route = useRoute();

function isActive(link: string) {
  return route.path === link;
}
</script>

<template>
  <div class="w-min">
    <h1 class="text-nowrap text-start font-semibold">{{ title }}</h1>

    <div class="ml-2 mt-2 grid gap-2">
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="text-nowrap text-start text-sm text-muted-foreground hover:underline"
        :class="{ '!text-green': isActive(link.to) }"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </div>
</template>
