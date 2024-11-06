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

const { $i18n } = useNuxtApp();

useHead({
  title: `Vue Toastfic - ${$i18n.t("pages.use.colorful.title-colorful")}`,
  meta: [
    {
      name: "description",
      content: $i18n.t("pages.use.colorful.desc-colorful"),
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
    <HeaderTitle> {{ $t("pages.use.colorful.title-colorful") }} </HeaderTitle>

    <HeaderDescription>
      {{ $t("pages.use.colorful.desc-colorful") }}
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">colorful</b>.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle :id="$t('pages.use.colorful.subtitle-example')">
        01. {{ $t("pages.use.colorful.subtitle-example") }}
      </HeaderSubTitle>
      <HeaderSubDescription>
        {{ $t("pages.use.colorful.use-true-false") }} <b>true</b> {{ $t("pages.use.colorful.or") }} <b>false</b>:
      </HeaderSubDescription>
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
