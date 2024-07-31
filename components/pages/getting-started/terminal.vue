<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IconNpm, IconYarn, IconPnpm, IconBun } from "@/assets/icons/managers";

const { $useToast } = useNuxtApp();

type Tab = {
  value: string;
  label: string;
  icon: typeof IconNpm | typeof IconYarn | typeof IconPnpm | typeof IconBun;
  command: string;
  installCommand: string;
};

const tabs: Tab[] = [
  {
    value: "npm",
    label: "npm",
    icon: IconNpm,
    command: "npm",
    installCommand: "install vue-toastfic",
  },
  {
    value: "yarn",
    label: "yarn",
    icon: IconYarn,
    command: "yarn",
    installCommand: "add vue-toastfic",
  },
  {
    value: "pnpm",
    label: "pnpm",
    icon: IconPnpm,
    command: "pnpm",
    installCommand: "add vue-toastfic",
  },
  {
    value: "bun",
    label: "bun",
    icon: IconBun,
    command: "bun",
    installCommand: "add vue-toastfic",
  },
];

const commandSpan = ref<HTMLElement[]>([]);

function copyCommand() {
  if (commandSpan.value) {
    const text = commandSpan.value[0].textContent || "";
    navigator.clipboard.writeText(text).then(() => {
      $useToast.default("Comando copiado!");
    });
  }
}
</script>

<template>
  <Tabs defaultValue="npm" class="mt-5 w-full overflow-hidden rounded-md border">
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

      <Button variant="ghost" class="ml-auto size-8 rounded-[6px] p-0" @click="copyCommand">
        <PhosphorIconCopySimple size="18" weight="fill" color="var(--icon)" />
      </Button>
    </TabsList>

    <div class="flex h-12 items-center bg-muted-light px-4">
      <TabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value" class="mt-0 text-sm">
        <span class="text-xs text-blue-700 dark:text-blue-300"> $ </span>

        <span ref="commandSpan">
          <span class="text-blue-700 dark:text-blue-300"> {{ tab.command }} </span>
          {{ tab.installCommand }}
        </span>
      </TabsContent>
    </div>
  </Tabs>
</template>
