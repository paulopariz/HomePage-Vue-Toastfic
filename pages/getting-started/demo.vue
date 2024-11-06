<script setup lang="ts">
import { Toast } from "vue-toastfic";
import {
  Header,
  HeaderDescription,
  HeaderTitle,
  HeaderSubDescription,
  HeaderSubTitle,
} from "~/components/_default/header";

const { $useToast, $i18n } = useNuxtApp();

useHead({
  title: `Vue Toastfic - ${$i18n.t("pages.getting-started.title-demo")}`,
  meta: [
    {
      name: "description",
      content: $i18n.t("pages.getting-started.desc-demo-1"),
    },
  ],
});

const buttons = ref([
  {
    label: "success",
    class: "bg-green-light text-green",
    action: () => toastSuccess(),
  },
  {
    label: "error",
    class: "bg-red-600/10 text-red-600",
    action: () => toastError(),
  },
  {
    label: "info",
    class: "bg-blue-600/10 text-blue-600",
    action: () => toastInfo(),
  },
  {
    label: "warning",
    class: "bg-yellow-600/10 text-yellow-600",
    action: () => toastWarning(),
  },
  {
    label: "default",
    class: "bg-muted-light text-foreground",
    action: () => toastDefault(),
  },
]);

function toastSuccess() {
  $useToast.success("Success", {
    description: $i18n.t("pages.getting-started.desc-toast-to") + "success!",
  });
}

function toastError() {
  $useToast.error("Error", {
    description: $i18n.t("pages.getting-started.desc-toast-to") + "error!",
  });
}

function toastInfo() {
  $useToast.info("Info", {
    description: $i18n.t("pages.getting-started.desc-toast-to") + "info!",
  });
}

function toastWarning() {
  $useToast.warning("Warning", {
    description: $i18n.t("pages.getting-started.desc-toast-to") + "warning!",
  });
}

function toastDefault() {
  $useToast.default("Default", {
    description: $i18n.t("pages.getting-started.desc-toast-to") + "default!",
  });
}
</script>

<template>
  <Toast position="bottom-right" :theme="$colorMode.preference === 'dark' ? 'dark' : 'light'" />

  <Header>
    <HeaderTitle> {{ $t("pages.getting-started.title-demo") }} </HeaderTitle>

    <HeaderDescription>
      {{ $t("pages.getting-started.desc-demo-2") }}
      <b>success</b>, <b>error</b>, <b>info</b>, <b>warning</b> {{ $t("pages.getting-started.and") }} <b>default</b>.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle id="Toasts"> Toasts </HeaderSubTitle>

      <HeaderSubDescription> {{ $t("pages.getting-started.dispatch-toasts") }} </HeaderSubDescription>
    </Header>

    <div class="mt-5 grid grid-cols-2 gap-4 max-sm:grid-cols-1">
      <div
        v-for="(button, index) in buttons"
        :key="index"
        class="flex h-48 w-full items-center justify-center rounded-md border transition-all hover:bg-muted-light max-sm:h-20"
      >
        <Button class="w-24" :class="button.class" @click="button.action">
          {{ button.label }}
        </Button>
      </div>
    </div>
  </div>
</template>
