<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";
import { type ICode } from "~/components/_default/code-block";
import { postion } from "~/utils/codes/position";
import { IconVue } from "~/assets/icons/managers";

import { useToastManager } from "~/composables/useSequenceToast";
import { Toast } from "vue-toastfic";

const Code = defineAsyncComponent(() => import("~/components/_default/code-block/code.vue"));

const { $i18n } = useNuxtApp();

useHead({
  title: `Vue Toastfic - ${$i18n.t("pages.use.position.title-position")}`,
  meta: [
    {
      name: "description",
      content: $i18n.t("pages.use.position.desc-position"),
    },
  ],
});

const codePostion: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: postion,
    lang: "vue",
  },
];

const { showNextToast } = useToastManager();
</script>

<template>
  <Toast position="top-left" :theme="$colorMode.preference === 'dark' ? 'dark' : 'light'" />

  <Header>
    <HeaderTitle> {{ $t("pages.use.position.title-position") }} </HeaderTitle>

    <HeaderDescription>
      {{ $t("pages.use.position.desc-position-2") }}
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">position</b>.

      <p class="mt-3">
        {{ $t("pages.use.position.desc-positions") }}
      </p>
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle :id="$t('pages.use.position.subtitle-example')">
        01. {{ $t("pages.use.position.subtitle-example") }}
      </HeaderSubTitle>

      <HeaderSubDescription>
        {{ $t("pages.use.position.desc-example") }}
      </HeaderSubDescription>
    </Header>

    <Code :codes="codePostion">
      <template #preview>
        <div class="grid h-32 place-content-center">
          <Button variant="outline" @click="showNextToast"> Show </Button>
        </div>
      </template>
    </Code>
  </div>
</template>
