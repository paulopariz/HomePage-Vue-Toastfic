<script setup lang="ts">
import { useHighlighter } from "~/composables/useHighlighter";

type Lang = "typescript" | "vue" | "html" | "css";

const props = defineProps<{ code: string; lang: Lang }>();

const { highlightedCode } = useHighlighter(props.code, props.lang);
</script>

<template>
  <div class="flex h-12 items-center bg-muted-light px-4">
    <TabsContent value="default" class="mt-0 text-sm">
      <pre v-html="highlightedCode" />
    </TabsContent>
  </div>
</template>

<style scoped>
.shiki {
  background-color: transparent !important;
}
</style>
