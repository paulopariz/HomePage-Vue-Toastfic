<script setup lang="ts">
import { highlightCode } from "~/utils/useHighlighter";
import { type ICode } from "~/components/_default/code-block";

const props = defineProps<{
  codes: ICode[];
}>();

const tabContents = ref<{ [key: string]: string }>({});

async function setCodes() {
  for (const tab of props.codes) {
    tabContents.value[tab.key] = await highlightCode(tab.code, tab.lang);
  }
}

onMounted(async () => {
  await setCodes();
});
</script>

<template>
  <Tabs :defaultValue="codes[0].key" class="mt-5 w-3/4 overflow-hidden rounded-md border border-[#1c1c1f]">
    <TabsList
      class="border-muted- flex h-12 w-full items-center justify-start gap-3 rounded-none border-b border-[#1c1c1f] bg-[#0a0a0a] px-2"
    >
      <TabsTrigger
        v-for="tab in codes"
        :key="tab.key"
        :value="tab.key"
        :class="{ '!bg-transparent': codes.length === 1 }"
        class="flex w-min items-center gap-2 rounded-[6px] bg-transparent !text-[#e2e2e2] !shadow-none hover:bg-[#1c1c1f] data-[state=active]:bg-[#1c1c1f]"
      >
        <component :is="tab.icon" />
        {{ tab.label }}
      </TabsTrigger>

      <Button variant="ghost" class="ml-auto size-8 rounded-[6px] p-0 hover:bg-[#1c1c1f]">
        <PhosphorIconCopySimple size="18" weight="fill" color="#e2e2e2" />
      </Button>
    </TabsList>

    <div class="flex min-h-12 items-center bg-[#0d0d0d] p-4">
      <TabsContent v-for="tab in codes" :key="tab.key" :value="tab.key" class="mt-0 text-sm">
        <pre v-html="tabContents[tab.key]" />
      </TabsContent>
    </div>
  </Tabs>
</template>
