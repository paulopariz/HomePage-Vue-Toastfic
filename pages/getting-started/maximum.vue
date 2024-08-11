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
import { maximum } from "~/utils/codes/maximum";
import { IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";
import { useToastManager } from "~/composables/useSequenceToast";

const { showNextToast } = useToastManager();

const maximumToasts: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: maximum,
    lang: "vue",
  },
];
</script>

<template>
  <Toast position="bottom-right" :max-toasts="3" :theme="$colorMode.preference === 'dark' ? 'light' : 'dark'" />

  <Header>
    <HeaderBreadcrumb />

    <HeaderTitle> Máximo de toasts </HeaderTitle>

    <HeaderDescription>
      Para evitar o acúmulo de toasts na tela, você pode configurar o número máximo de toasts exibidos simultaneamente
      utilizando a prop <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">maxToasts</b>.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle id="Exemplo de uso"> 01. Exemplo de uso </HeaderSubTitle>
      <HeaderSubDescription> Use um valor maior que 0: </HeaderSubDescription>
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
