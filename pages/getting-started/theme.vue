<script setup lang="ts">
import {
  Header,
  HeaderBreadcrumb,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";

import { type ICode, Code } from "~/components/_default/code-block";
import { theme } from "~/utils/codes/theme";
import { IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";
import { useToastManager } from "~/composables/useSequenceToast";

useHead({
  title: "Vue Toastfic | Tema",
  meta: [
    {
      name: "description",
      content:
        "Uma ótima funcionalidade para integrar ao seu projeto é a possibilidade de escolher entre os temas light e dark para os toasts. Esses temas podem ser alterados facilmente através da prop theme",
    },
  ],
});

const { showNextToast } = useToastManager();

const maximumToasts: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: theme,
    lang: "vue",
  },
];
</script>

<template>
  <Toast position="bottom-left" theme="dark" />
  <Toast position="bottom-right" theme="light" />

  <Header>
    <HeaderBreadcrumb />

    <HeaderTitle> Tema </HeaderTitle>

    <HeaderDescription>
      Uma ótima funcionalidade para integrar ao seu projeto é a possibilidade de escolher entre os temas <b>light</b> e
      <b>dark</b> para os toasts. Esses temas podem ser alterados facilmente através da prop
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">theme</b>.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle id="Exemplo de uso"> 01. Exemplo de uso </HeaderSubTitle>
      <HeaderSubDescription> Usando os temas: </HeaderSubDescription>
    </Header>

    <Code :codes="maximumToasts">
      <template #preview>
        <div class="flex h-32 items-center justify-center gap-10">
          <Button variant="outline" class="w-min" @click="showNextToast">Show</Button>
        </div>
      </template>
    </Code>
  </div>
</template>
