<script setup lang="ts">
import {
  Header,
  HeaderBreadcrumb,
  HeaderDescription,
  HeaderTitle,
  HeaderSubDescription,
  HeaderSubTitle,
} from "~/components/_default/header";
import { Tag } from "~/components/ui/tag";
import { type ICode, Code } from "~/components/_default/code-block";

import { IconTs, IconVue, IconNuxt, IconNpm, IconYarn, IconPnpm, IconBun } from "@/assets/icons/managers";
import { pluginNuxt, appNuxt, configNuxt, appVue, install, importCss } from "~/utils/codes/getting-started";

const codeInstall: ICode[] = [
  {
    label: "npm",
    icon: IconNpm,
    code: install.npm,
    lang: "zsh",
  },
  {
    label: "yarn",
    icon: IconYarn,
    code: install.yarn,
    lang: "zsh",
  },
  {
    label: "pnpm",
    icon: IconPnpm,
    code: install.pnpm,
    lang: "zsh",
  },
  {
    label: "bun",
    icon: IconBun,
    code: install.bun,
    lang: "zsh",
  },
];

const codeImportCss: ICode[] = [
  {
    label: "main.ts",
    icon: IconTs,
    code: importCss.main,
    lang: "typescript",
  },
  {
    label: "nuxt.config.ts",
    icon: IconNuxt,
    code: importCss.nuxt,
    lang: "typescript",
  },
];

const codeUseVue: ICode[] = [
  {
    label: "App.vue",
    icon: IconVue,
    code: appVue,
    lang: "vue",
  },
];

const codeUseNuxt: ICode[] = [
  {
    label: "plugins/toastfic.ts",
    icon: IconTs,
    code: pluginNuxt,
    lang: "typescript",
  },
  {
    label: "nuxt.config.ts",
    icon: IconNuxt,
    code: configNuxt,
    lang: "typescript",
  },
  {
    label: "app.vue",
    icon: IconVue,
    code: appNuxt,
    lang: "vue",
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
      <HeaderSubTitle id="Instalar vue-toastfic"> 01. Instalar vue-toastfic </HeaderSubTitle>

      <HeaderSubDescription> Instale o pacote usando algum desses comandos: </HeaderSubDescription>
    </Header>

    <Code :codes="codeInstall" />
  </div>

  <div>
    <Header>
      <HeaderSubTitle id="Importe o arquivo CSS"> 02. Importe o arquivo CSS </HeaderSubTitle>

      <HeaderSubDescription>
        É necessário importar o arquivo de estilo no <b>main.ts</b> ou no <b>nuxt.config.ts</b> caso esteja no Nuxt:
      </HeaderSubDescription>
    </Header>

    <Code :codes="codeImportCss" />
  </div>

  <div>
    <Header>
      <HeaderSubTitle id="Para Vue 3"> 03. Para Vue 3 </HeaderSubTitle>

      <HeaderSubDescription> Uso simples para seu app Vue.js 3: </HeaderSubDescription>
    </Header>

    <Code :codes="codeUseVue" />
  </div>

  <div>
    <Header>
      <HeaderSubTitle id="Para Nuxt 3"> 04. Para Nuxt 3 </HeaderSubTitle>

      <HeaderSubDescription> Uso para seu app Nuxt.js 3: </HeaderSubDescription>
    </Header>

    <Code :codes="codeUseNuxt" />
  </div>
</template>
