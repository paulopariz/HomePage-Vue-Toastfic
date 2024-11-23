<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { highlightCode } from "~/utils/useHighlighter";
import { type ICode } from "~/components/_default/code-block";
import { Skeleton } from "~/components/ui/skeleton";

const props = defineProps<{
  codes: ICode[];
}>();

type ISlots = {
  preview?: boolean;
};

const slots = useSlots() as ISlots;

const tabContents = ref<{ [key: string]: string }>({});
const activeTab = ref(props.codes[0].label);
const currentCode = ref("");
const tooltipVisible = ref(false);

const loading = ref(true);

async function setCodes() {
  for (const tab of props.codes) {
    tabContents.value[tab.label] = await highlightCode(tab.code, tab.lang);
  }
}

function handleCopyClick() {
  if (!currentCode.value) return;
  navigator.clipboard.writeText(currentCode.value);
  tooltipVisible.value = true;

  setTimeout(() => {
    tooltipVisible.value = false;
  }, 3000);
}

watch(activeTab, (newTab) => {
  const tab = props.codes.find((t) => t.label === newTab);

  if (tab?.code) {
    currentCode.value = tab.code;
  }
});

onMounted(async () => {
  loading.value = true;
  await setCodes();
  currentCode.value = props.codes[0].code;
  loading.value = false;
});
</script>

<template>
  <Tabs
    :defaultValue="codes[0].label"
    class="mt-5 w-full overflow-hidden rounded-md border border-[#1c1c1f]"
    @update:modelValue="activeTab = String($event)"
  >
    <TabsList
      class="border-muted- flex h-12 w-full items-center justify-start gap-3 rounded-none border-b border-[#1c1c1f] bg-[#0a0a0a] px-2"
    >
      <TabsTrigger
        v-for="tab in codes"
        :key="tab.label"
        :value="tab.label"
        :class="{ '!bg-transparent': codes.length === 1 && !slots.preview }"
        class="flex w-min items-center gap-2 rounded-[6px] bg-transparent !text-[#e2e2e2] !shadow-none hover:bg-[#1c1c1f] data-[state=active]:bg-[#1c1c1f]"
        role="tab"
        :aria-selected="tab.label === activeTab ? 'true' : 'false'"
        :aria-controls="tab.label"
      >
        <component :is="tab.icon" />

        <span class="max-sm:hidden">
          {{ tab.label }}
        </span>
      </TabsTrigger>

      <TabsTrigger
        v-if="slots.preview"
        value="preview"
        class="flex w-min items-center gap-2 rounded-[6px] bg-transparent !text-[#e2e2e2] !shadow-none hover:bg-[#1c1c1f] data-[state=active]:bg-[#1c1c1f]"
        role="tab"
        aria-selected="false"
        aria-controls="preview"
      >
        <PhosphorIconBrowsers size="16" />
        {{ $t("components.code-block.preview") }}
      </TabsTrigger>

      <TooltipProvider>
        <Tooltip :open="tooltipVisible">
          <TooltipTrigger as-child>
            <button
              class="ml-auto flex size-8 items-center justify-center rounded-[6px] p-0 transition-all hover:bg-[#1c1c1f]"
              aria-label="Copy code"
              role="tab"
              @click="handleCopyClick"
            >
              <PhosphorIconCopySimple v-if="!tooltipVisible" size="18" weight="fill" color="#e2e2e2" />
              <PhosphorIconCheck v-else size="18" color="var(--green)" />
            </button>
          </TooltipTrigger>

          <TooltipContent>
            <p>{{ $t("components.code-block.copied") }}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </TabsList>

    <div v-if="!loading" class="flex min-h-12 items-center bg-[#0d0d0d] p-4">
      <TabsContent
        v-for="tab in codes"
        :key="tab.label"
        :value="tab.label"
        class="mt-0 text-sm"
        role="tabpanel"
        :aria-labelledby="tab.label"
      >
        <pre v-html="tabContents[tab.label]" />
      </TabsContent>

      <TabsContent
        v-if="slots.preview"
        id="preview"
        value="preview"
        class="w-full"
        role="tabpanel"
        aria-labelledby="preview"
      >
        <slot name="preview" />
      </TabsContent>
    </div>

    <div v-else class="grid w-full gap-1.5 bg-[#0d0d0d] p-4">
      <Skeleton class="h-3 w-72" />
      <Skeleton class="h-3 w-52" />
      <Skeleton class="h-3 w-32" />
    </div>
  </Tabs>
</template>
