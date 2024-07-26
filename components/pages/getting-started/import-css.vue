<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconTs, IconNuxt } from "@/assets/icons/managers";

type Tab = {
  value: string;
  label: string;
  icon: typeof IconTs | typeof IconNuxt;
};

const tabs: Tab[] = [
  {
    value: "ts",
    label: "main.ts",
    icon: IconTs,
  },
  {
    value: "nuxt",
    label: "nuxt.config.ts",
    icon: IconNuxt,
  },
];
</script>

<template>
  <Tabs defaultValue="ts" class="mt-5 w-3/4 overflow-hidden rounded-md border">
    <TabsList class="flex h-12 w-full items-center justify-start gap-3 rounded-none border-b bg-transparent px-2">
      <TabsTrigger
        v-for="tab in tabs"
        :key="tab.value"
        :value="tab.value"
        class="flex w-min items-center gap-2 rounded-[6px] hover:bg-muted data-[state=active]:bg-muted"
      >
        <component :is="tab.icon" class="size-4" />
        {{ tab.label }}
      </TabsTrigger>

      <Button variant="ghost" class="ml-auto size-8 rounded-[6px] p-0">
        <PhosphorIconCopySimple size="18" weight="fill" color="var(--icon)" />
      </Button>
    </TabsList>

    <div class="flex h-12 items-center bg-muted-light px-4">
      <TabsContent value="ts" class="mt-0 text-sm">
        <span ref="commandSpan" class="text-indigo-700 dark:text-indigo-300">
          <span class="text-red-700 dark:text-red-400"> import </span>
          "vue-toastfic/style.css";
        </span>
      </TabsContent>

      <TabsContent value="nuxt" class="mt-0 text-sm">
        <span ref="commandSpan" class="text-indigo-700 dark:text-indigo-300">
          <span class="text-red-700 dark:text-red-400"> css: </span>
          <span>[</span>
          "vue-toastfic/style.css"

          <span>]</span>
        </span>
      </TabsContent>
    </div>
  </Tabs>
</template>
