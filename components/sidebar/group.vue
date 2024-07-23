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
  <div>
    <h1 class="flex items-center gap-3 font-semibold">
      <PhosphorIconFolderOpen color="var(--icon)" weight="fill" class="-mt-1" />
      {{ title }}
    </h1>

    <div class="ml-2 mt-2 grid gap-3 border-l border-dashed pl-5">
      <NuxtLink
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
        class="text-sm text-muted-foreground hover:underline"
        :class="{ '!text-green': isActive(link.to) }"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </div>
</template>
