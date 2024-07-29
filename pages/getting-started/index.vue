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
import { Terminal, ImportCss } from "~/components/pages";

import { IconTs, IconVue, IconNuxt } from "@/assets/icons/managers";
import { pluginNuxt, appNuxt, configNuxt, appVue } from "~/utils/codes/getting-started";

const useVue: ICode[] = [
  {
    key: "app",
    label: "App.vue",
    icon: IconVue,
    code: appVue,
    lang: "vue",
  },
];

const useNuxt: ICode[] = [
  {
    key: "plugin",
    label: "plugins/toastfic.ts",
    icon: IconTs,
    code: pluginNuxt,
    lang: "typescript",
  },
  {
    key: "app",
    label: "app.vue",
    icon: IconVue,
    code: appNuxt,
    lang: "vue",
  },
  {
    key: "nuxt",
    label: "nuxt.config.ts",
    icon: IconNuxt,
    code: configNuxt,
    lang: "typescript",
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
      <HeaderSubTitle> 01. Instalar vue-toastfic </HeaderSubTitle>

      <HeaderSubDescription> Instale o pacote usando algum desses comandos: </HeaderSubDescription>
    </Header>

    <Terminal />
  </div>

  <div>
    <Header>
      <HeaderSubTitle> 02. Importe o arquivo CSS </HeaderSubTitle>

      <HeaderSubDescription>
        É necessário importar o arquivo de estilo no <b>main.ts</b> ou no <b>nuxt.config.ts</b> caso esteja no Nuxt:
      </HeaderSubDescription>
    </Header>

    <ImportCss />
  </div>

  <div>
    <Header>
      <HeaderSubTitle> 03. Para Vue 3 </HeaderSubTitle>

      <HeaderSubDescription> Uso simples para seu app Vue.js 3: </HeaderSubDescription>
    </Header>

    <Code :codes="useVue" />
  </div>

  <div>
    <Header>
      <HeaderSubTitle> 04. Para Nuxt 3 </HeaderSubTitle>

      <HeaderSubDescription> Uso para seu app Nuxt.js 3: </HeaderSubDescription>
    </Header>

    <Code :codes="useNuxt" />
  </div>
</template>
