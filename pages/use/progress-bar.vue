<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";

useHead({
  title: "Vue Toastfic | Barra de progresso",
  meta: [
    {
      name: "description",
      content:
        "A barra de progresso oferece uma maneira visual de monitorar a duração do seu toast. Se preferir desativar esse recurso, você pode fazê-lo usando a prop progress-bar",
    },
  ],
});

import { type ICode, Code } from "~/components/_default/code-block";
import { progressBar } from "~/utils/codes/progress-bar";
import { IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";

import { useToastManager } from "~/composables/useSequenceToast";
const { showNextToast } = useToastManager();

const progressToast: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: progressBar,
    lang: "vue",
  },
];
</script>

<template>
  <Toast :progress-bar="false" position="bottom-right" :theme="$colorMode.preference === 'dark' ? 'dark' : 'light'" />

  <Header>
    <HeaderTitle> Barra de progresso </HeaderTitle>

    <HeaderDescription>
      A barra de progresso oferece uma maneira visual de monitorar a duração do seu toast. Se preferir desativar esse
      recurso, você pode fazê-lo usando a prop
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">progress-bar</b>.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle id="Exemplo de uso"> 01. Exemplo de uso </HeaderSubTitle>
      <HeaderSubDescription> Desativando a barra de progresso. </HeaderSubDescription>
    </Header>

    <Code :codes="progressToast">
      <template #preview>
        <div class="grid h-32 place-content-center">
          <Button variant="outline" @click="showNextToast">Show</Button>
        </div>
      </template>
    </Code>
  </div>
</template>
