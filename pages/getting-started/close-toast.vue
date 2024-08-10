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
import { close, automaticClose } from "~/utils/codes/close-toast";
import { IconVue } from "~/assets/icons/managers";

const codeClose: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: close,
    lang: "vue",
  },
];

const codeAutomaticClose: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: automaticClose,
    lang: "vue",
  },
];
</script>

<template>
  <Header>
    <HeaderBreadcrumb />

    <HeaderTitle> Fechar toast </HeaderTitle>

    <HeaderDescription>
      Você pode configurar o fechamento do toast de duas maneiras: ocultando o ícone de fechar com a prop
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">close</b> e desativando o fechamento
      automático com a prop <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">automatic-close</b>.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle id="Esconder o botão"> 01. Esconder o botão </HeaderSubTitle>
      <HeaderSubDescription> Use <b>true</b> ou <b>false</b>: </HeaderSubDescription>
    </Header>

    <Code :codes="codeClose" />
  </div>

  <div>
    <Header>
      <HeaderSubTitle id="Desabilitar fechamento"> 02. Desabilitar fechamento </HeaderSubTitle>
      <HeaderSubDescription> Use <b>true</b> ou <b>false</b>: </HeaderSubDescription>
    </Header>

    <Code :codes="codeAutomaticClose" />
  </div>
</template>
