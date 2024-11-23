<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderTitle,
  HeaderSubDescription,
  HeaderSubTitle,
} from "~/components/_default/header";
import { Tag } from "~/components/ui/tag";
import { type ICode } from "~/components/_default/code-block";

import { IconTs, IconVue, IconNuxt, IconNpm, IconYarn, IconPnpm, IconBun } from "@/assets/icons/managers";
import { pluginNuxt, appNuxt, configNuxt, appVue, install, importCss } from "~/utils/codes/getting-started";

const Code = defineAsyncComponent(() => import("~/components/_default/code-block/code.vue"));

const { $i18n } = useNuxtApp();

useHead({
  title: `Vue Toastfic - ${$i18n.t("pages.getting-started.title-install")}`,
  meta: [
    {
      name: "description",
      content: $i18n.t("pages.getting-started.desc-install"),
    },
  ],
});

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
    <HeaderTitle> {{ $t("pages.getting-started.title-install") }} </HeaderTitle>

    <HeaderDescription> {{ $t("pages.getting-started.desc-install") }} </HeaderDescription>
  </Header>

  <div class="grid gap-3">
    <HeaderSubTitle> {{ $t("pages.getting-started.prerequisites") }} </HeaderSubTitle>
    <div class="ml-4 grid gap-2">
      <HeaderSubDescription class="flex items-center gap-1.5">
        - Node.js
        <Tag> v18.0.0 </Tag>
        {{ $t("pages.getting-started.or-greater") }}
      </HeaderSubDescription>

      <HeaderSubDescription class="flex items-center gap-1.5">
        - Vue.js
        <Tag> v3.0.0 </Tag>
        {{ $t("pages.getting-started.or-greater") }}
      </HeaderSubDescription>
    </div>
  </div>

  <div>
    <Header>
      <HeaderSubTitle :id="`${$t('pages.getting-started.title-install')} vue-toastfic`">
        01. {{ $t("pages.getting-started.title-install") }} vue-toastfic
      </HeaderSubTitle>

      <HeaderSubDescription> {{ $t("pages.getting-started.subdesc-install-packge") }} </HeaderSubDescription>
    </Header>

    <Code :codes="codeInstall" />
  </div>

  <div>
    <Header>
      <HeaderSubTitle :id="$t('pages.getting-started.subtitle-import-css')">
        02. {{ $t("pages.getting-started.subtitle-import-css") }}
      </HeaderSubTitle>

      <HeaderSubDescription>
        {{ $t("pages.getting-started.subdesc-import-css-1") }} <b>main.ts</b> {{ $t("pages.getting-started.or in") }}
        <b>nuxt.config.ts</b> {{ $t("pages.getting-started.case-is-not") }}
        Nuxt:
      </HeaderSubDescription>
    </Header>

    <Code :codes="codeImportCss" />
  </div>

  <div>
    <Header>
      <HeaderSubTitle :id="$t('pages.getting-started.to') + ' Vue 3'">
        03. {{ $t("pages.getting-started.to") }} Vue 3
      </HeaderSubTitle>

      <HeaderSubDescription> {{ $t("pages.getting-started.use-app") }} Vue.js 3: </HeaderSubDescription>
    </Header>

    <Code :codes="codeUseVue" />
  </div>

  <div>
    <Header>
      <HeaderSubTitle :id="$t('pages.getting-started.to') + ' Nuxt 3'">
        04. {{ $t("pages.getting-started.to") }} Nuxt 3
      </HeaderSubTitle>

      <HeaderSubDescription> {{ $t("pages.getting-started.use-app") }} Nuxt.js 3: </HeaderSubDescription>
    </Header>

    <Code :codes="codeUseNuxt" />
  </div>
</template>
