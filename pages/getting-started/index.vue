<script setup lang="ts">
import {
  Header,
  HeaderBreadcrumb,
  HeaderDescription,
  HeaderTitle,
  HeaderSubDescription,
  HeaderSubTitle,
} from "@/components/_default/header";
import { Tag } from "@/components/ui/tag";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { IconNpmColorful, IconYarn, IconPnpm, IconBun } from "@/assets/icons/managers";

type Tab = {
  value: string;
  label: string;
  icon: typeof IconNpmColorful | typeof IconYarn | typeof IconPnpm | typeof IconBun;
  command: string;
  installCommand: string;
};

const tabs: Tab[] = [
  {
    value: "npm",
    label: "npm",
    icon: IconNpmColorful,
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
</script>

<template>
  <Header>
    <HeaderBreadcrumb />

    <HeaderTitle> Instalar </HeaderTitle>

    <HeaderDescription> Instale e aproveite o vue-toastfic em seus projetos Vue.js e Nuxt.js. </HeaderDescription>
  </Header>

  <div class="grid gap-3">
    <HeaderSubTitle> Pré-requisitos: </HeaderSubTitle>
    <div class="ml-4 grid gap-2">
      <HeaderSubDescription class="flex items-center gap-1.5">
        - Node.js
        <Tag> v18.0.0 </Tag>
        ou maior;
      </HeaderSubDescription>

      <HeaderSubDescription class="flex items-center gap-1.5">
        - Vue.js
        <Tag> v3.0.0 </Tag>
        ou maior;
      </HeaderSubDescription>
    </div>
  </div>

  <div>
    <Header>
      <HeaderSubTitle> 01. Instalar vue-toastfic </HeaderSubTitle>

      <HeaderSubDescription> Instale o pacote usando algum desses comandos: </HeaderSubDescription>
    </Header>

    <Tabs defaultValue="npm" class="mt-5 w-1/2 overflow-hidden rounded-md border">
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
      </TabsList>

      <div class="bg-muted-light flex h-12 items-center px-4">
        <TabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value" class="mt-0 text-sm">
          <span class="text-xs text-blue-700 dark:text-blue-400"> $ </span>
          <span class="text-blue-700 dark:text-blue-400"> {{ tab.command }} </span>
          {{ tab.installCommand }}
        </TabsContent>
      </div>
    </Tabs>
  </div>
</template>
