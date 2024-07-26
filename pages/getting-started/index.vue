<script setup lang="ts">
import {
  Header,
  HeaderBreadcrumb,
  HeaderDescription,
  HeaderTitle,
  HeaderSubDescription,
  HeaderSubTitle,
} from "@/components/_default/header";
import { Tag } from "@/components/ui/tag";
import { Terminal, ImportCss } from "~/components/pages";
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
</template>
