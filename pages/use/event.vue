<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderSubDescription,
  HeaderSubTitle,
  HeaderTitle,
} from "~/components/_default/header";

import { type ICode, Code } from "~/components/_default/code-block";
import { event } from "~/utils/codes/event";
import { IconVue } from "~/assets/icons/managers";
import { Toast } from "vue-toastfic";

const { $i18n, $useToast } = useNuxtApp();

useHead({
  title: `Vue Toastfic - ${$i18n.t("pages.use.event.title-event")}`,
  meta: [
    {
      name: "description",
      content: $i18n.t("pages.use.event.desc-event"),
    },
  ],
});

const maximumToasts: ICode[] = [
  {
    label: "app.vue",
    icon: IconVue,
    code: event,
    lang: "vue",
  },
];

function handle() {
  $useToast.success($i18n.t("pages.use.event.toast-success"), {
    description: $i18n.t("pages.use.event.toast-description"),
    handle: {
      click: () => hello(),
      text: $i18n.t("pages.use.event.button-text"),
    },
  });
}

function hello() {
  $useToast.default($i18n.t("pages.use.event.hello-world"));
}
</script>

<template>
  <Toast position="bottom-right" theme="light" />

  <Header>
    <HeaderTitle> {{ $t("pages.use.event.title-event") }} </HeaderTitle>

    <HeaderDescription>
      {{ $t("pages.use.event.desc-event-1") }}
      <b class="rounded-[6px] bg-white/15 px-2 py-1 text-sm">handle</b> {{ $t("pages.use.event.desc-event-2") }}
    </HeaderDescription>
  </Header>

  <div class="grid gap-5">
    <Header>
      <HeaderSubTitle :id="$t('pages.use.event.subtitle-function')">
        01. {{ $t("pages.use.event.subtitle-function") }}
      </HeaderSubTitle>
      <HeaderSubDescription> {{ $t("pages.use.event.desc-function") }} </HeaderSubDescription>
    </Header>

    <div class="flex w-full items-center gap-4 rounded-md border border-dashed border-yellow-600 bg-yellow-600/10 p-3">
      <PhosphorIconWarning size="24" weight="fill" class="text-yellow-600" />

      <p class="text-sm tracking-wide text-yellow-600">
        {{ $t("pages.use.event.warning") }}
      </p>
    </div>

    <Code :codes="maximumToasts">
      <template #preview>
        <div class="flex h-32 items-center justify-center gap-10">
          <Button variant="outline" class="w-min" @click="handle">Show</Button>
        </div>
      </template>
    </Code>
  </div>
</template>
