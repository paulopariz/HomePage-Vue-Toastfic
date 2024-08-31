<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";

import { type ICode, Code } from "~/components/_default/code-block";
import { personalize, style } from "~/utils/codes/personalize";
import { IconCss, IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";
import { useToastManager } from "~/composables/useSequenceToast";

useHead({
  title: "Vue Toastfic | Personalização do toast",
  meta: [
    {
      name: "description",
      content:
        "Seus toasts podem ser altamente personalizados de acordo com suas preferências. Esse recurso pode ser implementado usando a prop classes. Todos os elementos, como title, description, buttonHandle, entre outros, podem ser ajustados conforme a sua necessidade.",
    },
  ],
});

const { showNextToast } = useToastManager();

const maximumToasts: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: personalize,
    lang: "vue",
  },
  {
    label: "main.css",
    icon: IconCss,
    code: style,
    lang: "css",
  },
];
</script>

<template>
  <Toast
    position="bottom-right"
    :classes="{
      toast: 'classe-toast',
      toasts: {
        success: 'classe-toast-success',
        error: 'classe-toast-error',
        info: 'classe-toast-info',
        warning: 'classe-toast-warning',
        default: 'classe-toast-default',
      },
      title: 'classe-title',
      description: 'classe-description',
      buttonHandle: 'classe-handle',
      buttonClose: 'classe-close',
      icon: 'classe-icon',
      icons: {
        success: 'classe-icon-success',
        error: 'classe-icon-error',
        info: 'classe-icon-info',
        warning: 'classe-icon-warning',
      },
    }"
  />

  <Header>
    <HeaderTitle> Personalização do toast </HeaderTitle>

    <HeaderDescription>
      Seus toasts podem ser altamente personalizados de acordo com suas preferências. Esse recurso pode ser implementado
      usando a prop <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">classes</b>. Todos os
      elementos, como title, description, buttonHandle, entre outros, podem ser ajustados conforme a sua necessidade.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle id="Exemplo de uso"> 01. Exemplo de uso </HeaderSubTitle>
      <HeaderSubDescription> Altere todo o estilo de seus toasts. </HeaderSubDescription>
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

<style scoped></style>
