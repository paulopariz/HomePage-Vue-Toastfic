<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";

import { type ICode, Code } from "~/components/_default/code-block";
import { personalize, style } from "~/utils/codes/personalize";
import { IconCss, IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";
import { useToastManager } from "~/composables/useSequenceToast";

const { $i18n } = useNuxtApp();
const { showNextToast } = useToastManager();

useHead({
  title: `Vue Toastfic - ${$i18n.t("pages.use.personalize.title-personalize")}`,
  meta: [
    {
      name: "description",
      content: $i18n.t("pages.use.personalize.desc-personalize"),
    },
  ],
});

const maximumToasts: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: personalize,
    lang: "vue",
  },
  {
    label: "main.css",
    icon: IconCss,
    code: style,
    lang: "css",
  },
];
</script>

<template>
  <Toast
    position="bottom-right"
    :classes="{
      toast: 'classe-toast',
      toasts: {
        success: 'classe-toast-success',
        error: 'classe-toast-error',
        info: 'classe-toast-info',
        warning: 'classe-toast-warning',
        default: 'classe-toast-default',
      },
      title: 'classe-title',
      description: 'classe-description',
      buttonHandle: 'classe-handle',
      buttonClose: 'classe-close',
      icon: 'classe-icon',
      icons: {
        success: 'classe-icon-success',
        error: 'classe-icon-error',
        info: 'classe-icon-info',
        warning: 'classe-icon-warning',
      },
    }"
  />

  <Header>
    <HeaderTitle> {{ $t("pages.use.personalize.title-personalize") }} </HeaderTitle>

    <HeaderDescription>
      {{ $t("pages.use.personalize.desc-personalize-1") }}
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">classes</b>.
      {{ $t("pages.use.personalize.desc-personalize-2") }}
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle :id="$t('pages.use.personalize.subtitle-example')">
        01. {{ $t("pages.use.personalize.subtitle-example") }}
      </HeaderSubTitle>
      <HeaderSubDescription> {{ $t("pages.use.personalize.desc-example") }} </HeaderSubDescription>
    </Header>

    <Code :codes="maximumToasts">
      <template #preview>
        <div class="flex h-32 items-center justify-center gap-10">
          <Button variant="outline" class="w-min" @click="showNextToast">Show</Button>
        </div>
      </template>
    </Code>
  </div>
</template>
