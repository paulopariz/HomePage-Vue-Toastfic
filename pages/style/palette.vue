<script setup lang="ts">
import {
  Header,
  HeaderDescription,
  HeaderTitle,
  HeaderSubDescription,
  HeaderSubTitle,
} from "~/components/_default/header";
import { type ICode, Code } from "~/components/_default/code-block";

import { vars } from "~/utils/codes/palette";
import { IconCss } from "~/assets/icons/managers";

const { $i18n } = useNuxtApp();

useHead({
  title: `Vue Toastfic - ${$i18n.t("pages.style.title-pallete-colors")}`,
  meta: [
    {
      name: "description",
      content: $i18n.t("pages.style.desc-pallete-colors"),
    },
  ],
});

interface ICurrentVars {
  hex: string;
  name: string;
}

const newVars: ICode[] = [
  {
    label: "main.css",
    icon: IconCss,
    code: vars,
    lang: "css",
  },
];

const currentVarsDark = ref<ICurrentVars[]>([
  {
    name: "--toastfic-bg",
    hex: "#171b22",
  },
  {
    name: "--toastfic-icon",
    hex: "#ffffff",
  },
  {
    name: "--toastfic-text",
    hex: "#ffffff",
  },
  {
    name: "--toastfic-success-icon",
    hex: "#388e3c",
  },
  {
    name: "--toastfic-info-icon",
    hex: "#1976d2",
  },
  {
    name: "--toastfic-warning-icon",
    hex: "#f57c00",
  },
  {
    name: "--toastfic-error-icon",
    hex: "#d32f2f",
  },
]);

const currentVarsLight = ref<ICurrentVars[]>([
  {
    name: "--toastfic-bg",
    hex: "#ffffff",
  },
  {
    name: "--toastfic-icon",
    hex: "#171b22",
  },
  {
    name: "--toastfic-text",
    hex: "#171b22",
  },
  {
    name: "--toastfic-success-icon",
    hex: "#388e3c",
  },
  {
    name: "--toastfic-info-icon",
    hex: "#1976d2",
  },
  {
    name: "--toastfic-warning-icon",
    hex: "#f57c00",
  },
  {
    name: "--toastfic-error-icon",
    hex: "#d32f2f",
  },
]);
</script>

<template>
  <Header>
    <HeaderTitle> {{ $t("pages.style.title-pallete-colors") }} </HeaderTitle>

    <HeaderDescription>
      {{ $t("pages.style.desc-pallete-colors") }}
    </HeaderDescription>
  </Header>

  <div class="grid gap-5">
    <Header>
      <HeaderSubTitle :id="$t('pages.style.default-variables')">
        01. {{ $t("pages.style.default-variables") }}
      </HeaderSubTitle>

      <HeaderSubDescription>
        {{ $t("pages.style.subdesc-variable-default") }}
      </HeaderSubDescription>
    </Header>

    <div class="grid grid-cols-1 gap-20">
      <div>
        <HeaderSubTitle class="mb-5 text-sm"> {{ $t("pages.style.subtitle-light") }} </HeaderSubTitle>

        <div class="grid gap-y-4">
          <div
            v-for="(variable, index) in currentVarsLight"
            :key="index"
            class="flex h-16 max-w-80 items-center justify-between gap-3 rounded-sm border bg-muted-light pl-3 max-sm:w-full max-sm:max-w-full"
          >
            <div class="grid gap-1">
              <h2 class="text-sm font-bold tracking-wide">{{ variable.name }}</h2>
              <p class="ml-3 text-xs tracking-wide text-muted-foreground">{{ variable.hex }}</p>
            </div>

            <span :style="{ backgroundColor: variable.hex }" class="h-full w-14 rounded-e-sm" />
          </div>
        </div>
      </div>

      <div>
        <HeaderSubTitle class="mb-5 text-sm"> {{ $t("pages.style.subtitle-dark") }} </HeaderSubTitle>

        <div class="grid gap-y-4">
          <div
            v-for="(variable, index) in currentVarsDark"
            :key="index"
            class="flex h-16 max-w-80 items-center justify-between gap-3 rounded-sm border bg-muted-light pl-3 max-sm:w-full max-sm:max-w-full"
          >
            <div class="grid gap-1">
              <h2 class="text-sm font-bold tracking-wide">{{ variable.name }}</h2>
              <p class="ml-3 text-xs tracking-wide text-muted-foreground">{{ variable.hex }}</p>
            </div>

            <span :style="{ backgroundColor: variable.hex }" class="h-full w-14 rounded-e-sm" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid gap-5">
    <Header>
      <HeaderSubTitle :id="$t('pages.style.subtitle-personalization')">
        02. {{ $t("pages.style.subtitle-personalization") }}
      </HeaderSubTitle>

      <HeaderSubDescription>
        {{ $t("pages.style.subdesc-colors-1") }} <b>global.css</b>, <b>main.css</b>,
        {{ $t("pages.style.subdesc-colors-2") }}
      </HeaderSubDescription>
    </Header>

    <div class="flex w-full items-center gap-4 rounded-md border border-dashed border-yellow-600 bg-yellow-600/10 p-3">
      <PhosphorIconWarning size="24" weight="fill" class="text-yellow-600" />

      <p class="text-sm tracking-wide text-yellow-600">
        {{ $t("pages.style.desc-warning-1") }} <b>!important</b> {{ $t("pages.style.desc-warning-2") }}
      </p>
    </div>

    <Code :codes="newVars" />
  </div>
</template>
