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
import { postion } from "~/utils/codes/position";
import { IconVue } from "~/assets/icons/managers";

import { useToastManager } from "~/composables/useSequenceToast";
import { Toast } from "vue-toastfic";

useHead({
  title: "Vue Toastfic | Posição",
  meta: [
    {
      name: "description",
      content:
        "Todos os toasts são posicionados no canto superior direito por padrão. Esse comportamento pode ser alterado utilizando a prop position.",
    },
  ],
});

const codePostion: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: postion,
    lang: "vue",
  },
];

const { showNextToast } = useToastManager();
</script>

<template>
  <Toast position="top-left" :theme="$colorMode.preference === 'dark' ? 'light' : 'dark'" />

  <Header>
    <HeaderBreadcrumb />

    <HeaderTitle> Posição </HeaderTitle>

    <HeaderDescription>
      Todos os toasts são posicionados no canto superior direito por padrão. Esse comportamento pode ser alterado
      utilizando a prop <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">position</b>.

      <p class="mt-3">
        Posições: <b>top-left</b>, <b>top-center</b>, <b>top-right</b>, <b>bottom-left</b>, <b>bottom-center</b> e
        <b>bottom-right</b>.
      </p>
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle id="Exemplo de uso"> 01. Exemplo de uso </HeaderSubTitle>

      <HeaderSubDescription>
        Definindo um valor diferente do padrão através da prop <b>position</b>:
      </HeaderSubDescription>
    </Header>

    <Code :codes="codePostion">
      <template #preview>
        <div class="grid h-32 place-content-center">
          <Button variant="outline" @click="showNextToast"> Show </Button>
        </div>
      </template>
    </Code>
  </div>
</template>
