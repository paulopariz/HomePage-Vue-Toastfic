<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";
import { type ICode } from "~/components/_default/code-block";
import { close, automaticClose } from "~/utils/codes/close-toast";
import { IconVue } from "~/assets/icons/managers";

const Code = defineAsyncComponent(() => import("~/components/_default/code-block/code.vue"));

const { $i18n } = useNuxtApp();

useHead({
  title: `Vue Toastfic - ${$i18n.t("pages.use.close-toast.title-close")}`,
  meta: [
    {
      name: "description",
      content: $i18n.t("pages.use.close-toast.desc-close-toast-1"),
    },
  ],
});

const codeClose: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: close,
    lang: "vue",
  },
];

const codeAutomaticClose: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: automaticClose,
    lang: "vue",
  },
];
</script>

<template>
  <Header>
    <HeaderTitle> {{ $t("pages.use.close-toast.title-close") }} </HeaderTitle>

    <HeaderDescription>
      {{ $t("pages.use.close-toast.desc-close-toast-2") }}
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">close</b>
      {{ $t("pages.use.close-toast.desc-close-toast-3") }}
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">automatic-close</b>.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle :id="$t('pages.use.close-toast.subtitle-use')">
        01. {{ $t("pages.use.close-toast.subtitle-use") }}
      </HeaderSubTitle>
      <HeaderSubDescription>
        {{ $t("pages.use.close-toast.use") }} <b>true</b> {{ $t("pages.use.close-toast.or") }} <b>false</b>:
      </HeaderSubDescription>
    </Header>

    <Code :codes="codeClose" />
  </div>

  <div>
    <Header>
      <HeaderSubTitle :id="$t('pages.use.close-toast.subtitle-disabled')">
        02. {{ $t("pages.use.close-toast.subtitle-disabled") }}
      </HeaderSubTitle>
      <HeaderSubDescription>
        {{ $t("pages.use.close-toast.use") }} <b>true</b> {{ $t("pages.use.close-toast.or") }} <b>false</b>:
      </HeaderSubDescription>
    </Header>

    <Code :codes="codeAutomaticClose" />
  </div>
</template>
