<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";

const { $i18n, $useToast } = useNuxtApp();

useHead({
  title: `Vue Toastfic - ${$i18n.t("pages.use.duration.title-duration")}`,
  meta: [
    {
      name: "description",
      content: $i18n.t("pages.use.duration.desc-duration"),
    },
  ],
});

import { type ICode, Code } from "~/components/_default/code-block";
import { duration, durationOption } from "~/utils/codes/duration";
import { IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";

const durationToast: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: duration,
    lang: "vue",
  },
];

const durationOptionToast: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: durationOption,
    lang: "vue",
  },
];

function handleFour() {
  $useToast.default(`${$i18n.t("pages.use.duration.duration-toast")} 4000ms`, {
    duration: 4000,
  });
}
function handleEight() {
  $useToast.default(`${$i18n.t("pages.use.duration.duration-toast")} 8000ms`, {
    duration: 8000,
  });
}
function handleTwelve() {
  $useToast.default(`${$i18n.t("pages.use.duration.duration-toast")} 12000ms`, {
    duration: 12000,
  });
}
</script>

<template>
  <Toast position="bottom-right" :colorful="false" :theme="$colorMode.preference === 'dark' ? 'dark' : 'light'" />

  <Header>
    <HeaderTitle> {{ $t("pages.use.duration.title-duration") }} </HeaderTitle>

    <HeaderDescription>
      {{ $t("pages.use.duration.desc-duration") }}
      <b class="rounded-[6px] bg-green-light px-2 py-1 text-sm text-green">duration</b>
      {{ $t("pages.use.duration.or") }}
      useToast.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle :id="$t('pages.use.duration.subtitle-prop')">
        01. {{ $t("pages.use.duration.subtitle-prop") }}
      </HeaderSubTitle>
      <HeaderSubDescription>
        {{ $t("pages.use.duration.desc-prop") }}
      </HeaderSubDescription>
    </Header>

    <Code :codes="durationToast" />
  </div>

  <div>
    <Header>
      <HeaderSubTitle :id="$t('pages.use.duration.subtitle-useToast')">
        02. {{ $t("pages.use.duration.subtitle-useToast") }}
      </HeaderSubTitle>
      <HeaderSubDescription>
        {{ $t("pages.use.duration.desc-useToast") }}
      </HeaderSubDescription>
    </Header>

    <Code :codes="durationOptionToast">
      <template #preview>
        <div class="flex h-32 items-center justify-center gap-10">
          <Button variant="outline" class="w-min" @click="handleFour">4000ms</Button>
          <Button variant="outline" class="w-min" @click="handleEight">8000ms</Button>
          <Button variant="outline" class="w-min" @click="handleTwelve">12000ms</Button>
        </div>
      </template>
    </Code>
  </div>
</template>
