<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";

import { type ICode, Code } from "~/components/_default/code-block";
import { colorful } from "~/utils/codes/colorful";
import { IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";

import { useToastManager } from "~/composables/useSequenceToast";

useHead({
  title: "Vue Toastfic | Ativar/Desativar cores",
  meta: [
    {
      name: "description",
      content:
        "Você pode personalizar os toasts de acordo com sua preferência de cores. As cores podem estar ativadas ou desativadas; por padrão, estão ativadas. Para definir a cor, utilize a propriedade colorful.",
    },
  ],
});

const { showNextToast } = useToastManager();

const isColor: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: colorful,
    lang: "vue",
  },
];
</script>

<template>
  <Toast position="bottom-right" :colorful="false" :theme="$colorMode.preference === 'dark' ? 'dark' : 'light'" />

  <Header>
    <HeaderTitle> Ativar/Desativar cores </HeaderTitle>

    <HeaderDescription>
      Você pode personalizar os toasts de acordo com sua preferência de cores. As cores podem estar ativadas ou
      desativadas; por padrão, estão ativadas. Para definir a cor, utilize a propriedade
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">colorful</b>.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle id="Exemplo de uso"> 01. Exemplo de uso </HeaderSubTitle>
      <HeaderSubDescription> Use <b>true</b> ou <b>false</b>: </HeaderSubDescription>
    </Header>

    <Code :codes="isColor">
      <template #preview>
        <div class="grid h-32 place-content-center">
          <Button variant="outline" @click="showNextToast">Show</Button>
        </div>
      </template>
    </Code>
  </div>
</template>
