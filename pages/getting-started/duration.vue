<script setup lang="ts">
import {
  Header,
  HeaderBreadcrumb,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";

useHead({
  title: "Vue Toastfic | Tempo de fechamento",
  meta: [
    {
      name: "description",
      content: "O tempo de fechamento pode ser personalizado utilizando a prop duration ou pelo useToast.",
    },
  ],
});

import { type ICode, Code } from "~/components/_default/code-block";
import { duration, durationOption } from "~/utils/codes/duration";
import { IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";

const { $useToast } = useNuxtApp();

const durationToast: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: duration,
    lang: "vue",
  },
];

const durationOptionToast: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: durationOption,
    lang: "vue",
  },
];

function handleFour() {
  $useToast.default("Duration: 4000ms", {
    duration: 4000,
  });
}
function handleEight() {
  $useToast.default("Duration: 8000ms", {
    duration: 8000,
  });
}
function handleTwelve() {
  $useToast.default("Duration: 12000ms", {
    duration: 12000,
  });
}
</script>

<template>
  <Toast position="bottom-right" :colorful="false" :theme="$colorMode.preference === 'dark' ? 'light' : 'dark'" />

  <Header>
    <HeaderBreadcrumb />

    <HeaderTitle> Tempo de fechamento </HeaderTitle>

    <HeaderDescription>
      O tempo de fechamento pode ser personalizado utilizando a prop
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">duration</b> ou pelo useToast.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle id="Através da prop"> 01. Através da prop </HeaderSubTitle>
      <HeaderSubDescription>
        Use a prop <b>duration</b> para definir o tempo de fechamento do toast globalmente:
      </HeaderSubDescription>
    </Header>

    <Code :codes="durationToast" />
  </div>

  <div>
    <Header>
      <HeaderSubTitle id="Através do useToast"> 02. Através do useToast </HeaderSubTitle>
      <HeaderSubDescription> A <b>duration</b> pode ser configurada no useToast: </HeaderSubDescription>
    </Header>

    <Code :codes="durationOptionToast">
      <template #preview>
        <div class="flex h-32 items-center justify-center gap-10">
          <Button variant="outline" class="w-min" @click="handleFour">4000ms</Button>
          <Button variant="outline" class="w-min" @click="handleEight">8000ms</Button>
          <Button variant="outline" class="w-min" @click="handleTwelve">12000ms</Button>
        </div>
      </template>
    </Code>
  </div>
</template>
