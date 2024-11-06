<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";

import { type ICode, Code } from "~/components/_default/code-block";
import { maximum } from "~/utils/codes/maximum";
import { IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";
import { useToastManager } from "~/composables/useSequenceToast";

const { $i18n } = useNuxtApp();
const { showNextToast } = useToastManager();

useHead({
  title: `Vue Toastfic - ${$i18n.t("pages.use.maximum.title-maximum")}`,
  meta: [
    {
      name: "description",
      content: $i18n.t("pages.use.maximum.desc-maximum"),
    },
  ],
});

const maximumToasts: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: maximum,
    lang: "vue",
  },
];
</script>

<template>
  <Toast position="bottom-right" :max-toasts="3" :theme="$colorMode.preference === 'dark' ? 'dark' : 'light'" />

  <Header>
    <HeaderTitle> {{ $t("pages.use.maximum.title-maximum") }} </HeaderTitle>

    <HeaderDescription>
      {{ $t("pages.use.maximum.toast-description") }}
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">maxToasts</b>.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle :id="$t('pages.use.maximum.subtitle-example')">
        01. {{ $t("pages.use.maximum.subtitle-example") }}
      </HeaderSubTitle>
      <HeaderSubDescription> {{ $t("pages.use.maximum.desc-example") }} </HeaderSubDescription>
    </Header>

    <Code :codes="maximumToasts">
      <template #preview>
        <div class="flex h-32 items-center justify-center gap-10">
          <Button variant="outline" class="w-min" @click="showNextToast"> Show </Button>
        </div>
      </template>
    </Code>
  </div>
</template>
