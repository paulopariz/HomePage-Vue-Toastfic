<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";

import { useToastManager } from "~/composables/useSequenceToast";
import { type ICode } from "~/components/_default/code-block";
import { progressBar } from "~/utils/codes/progress-bar";
import { IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";

const Code = defineAsyncComponent(() => import("~/components/_default/code-block/code.vue"));

const { $i18n } = useNuxtApp();

useHead({
  title: `Vue Toastfic - ${$i18n.t("pages.use.progress-bar.title-progress-bar")}`,
  meta: [
    {
      name: "description",
      content: $i18n.t("pages.use.progress-bar.desc-progress-bar"),
    },
  ],
});

const { showNextToast } = useToastManager();

const progressToast: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: progressBar,
    lang: "vue",
  },
];
</script>

<template>
  <Toast :progress-bar="false" position="bottom-right" :theme="$colorMode.preference === 'dark' ? 'dark' : 'light'" />

  <Header>
    <HeaderTitle> {{ $t("pages.use.progress-bar.title-progress-bar") }} </HeaderTitle>

    <HeaderDescription>
      {{ $t("pages.use.progress-bar.desc-progress-bar") }}
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">progress-bar</b>.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle :id="$t('pages.use.progress-bar.subtitle-example')">
        01. {{ $t("pages.use.progress-bar.subtitle-example") }}
      </HeaderSubTitle>

      <HeaderSubDescription>
        {{ $t("pages.use.progress-bar.desc-example") }}
      </HeaderSubDescription>
    </Header>

    <Code :codes="progressToast">
      <template #preview>
        <div class="grid h-32 place-content-center">
          <Button variant="outline" @click="showNextToast">Show</Button>
        </div>
      </template>
    </Code>
  </div>
</template>
