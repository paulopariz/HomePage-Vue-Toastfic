<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";

import { type ICode, Code } from "~/components/_default/code-block";
import { event } from "~/utils/codes/event";
import { IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";

useHead({
  title: "Vue Toastfic | Lidar com eventos",
  meta: [
    {
      name: "description",
      content:
        "Você pode usar eventos dentro de um useToast passando um handle com o evento de clique(click) para executar uma outra função, além de definir o texto do botão(text).",
    },
  ],
});

const { $useToast } = useNuxtApp();

const maximumToasts: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: event,
    lang: "vue",
  },
];

function handle() {
  $useToast.success("Sucesso", {
    description: "Agora execute outra função, clicando em 'ok'.",
    handle: {
      click: () => hello(),
      text: "Ok",
    },
  });
}

function hello() {
  $useToast.default("Hello World!");
}
</script>

<template>
  <Toast position="bottom-right" theme="light" />

  <Header>
    <HeaderTitle> Lidar com eventos </HeaderTitle>

    <HeaderDescription>
      Você pode usar eventos dentro de um useToast passando um
      <b class="rounded-[6px] bg-white/15 px-2 py-1 text-sm">handle</b> com o evento de clique(click) para executar uma
      outra função, além de definir o texto do botão(text).
    </HeaderDescription>
  </Header>

  <div class="grid gap-5">
    <Header>
      <HeaderSubTitle id="Execute uma outra função"> 01. Execute uma outra função </HeaderSubTitle>
      <HeaderSubDescription> Crie um toast adicionando um evento nas opções do useToast: </HeaderSubDescription>
    </Header>

    <div class="flex w-full items-center gap-4 rounded-md border border-dashed border-yellow-600 bg-yellow-600/10 p-3">
      <PhosphorIconWarning size="24" weight="fill" class="text-yellow-600" />

      <p class="text-sm tracking-wide text-yellow-600">
        Toasts com eventos não fecham automaticamente; eles permanecem na tela até que o botão seja clicado.
      </p>
    </div>

    <Code :codes="maximumToasts">
      <template #preview>
        <div class="flex h-32 items-center justify-center gap-10">
          <Button variant="outline" class="w-min" @click="handle">Show</Button>
        </div>
      </template>
    </Code>
  </div>
</template>
