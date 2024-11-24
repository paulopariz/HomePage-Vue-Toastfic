<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";

import { type ICode } from "~/components/_default/code-block";
import { theme } from "~/utils/codes/theme";
import { IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";
import { useToastManager } from "~/composables/useSequenceToast";

const Code = defineAsyncComponent(() => import("~/components/_default/code-block/code.vue"));

const { $i18n } = useNuxtApp();

useHead({
  title: `Vue Toastfic - ${$i18n.t("pages.use.theme.title-theme")}`,
  meta: [
    {
      name: "description",
      content: $i18n.t("pages.use.theme.desc-theme"),
    },
  ],
});

const { showNextToast } = useToastManager();

const maximumToasts: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: theme,
    lang: "vue",
  },
];
</script>

<template>
  <Toast position="bottom-center" :max-toasts="4" theme="dark" />
  <Toast position="top-center" :max-toasts="4" theme="light" />

  <Header>
    <HeaderTitle> {{ $t("pages.use.theme.title-theme") }} </HeaderTitle>

    <HeaderDescription>
      {{ $t("pages.use.theme.desc-theme") }}
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">theme</b>.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle id="Exemplo de uso"> 01. {{ $t("pages.use.theme.subtitle-example") }} </HeaderSubTitle>
      <HeaderSubDescription> {{ $t("pages.use.theme.desc-example") }} </HeaderSubDescription>
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

<style scoped></style>
