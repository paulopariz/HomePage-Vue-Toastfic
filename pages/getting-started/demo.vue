<script setup lang="ts">
import {
  Header,
  HeaderBreadcrumb,
  HeaderDescription,
  HeaderTitle,
  HeaderSubDescription,
  HeaderSubTitle,
} from "~/components/_default/header";

const { $useToast } = useNuxtApp();

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
    description: "Descrição para o toast success!",
  });
}

function toastError() {
  $useToast.error("Error", {
    description: "Descrição para o toast error!",
  });
}

function toastInfo() {
  $useToast.info("Info", {
    description: "Descrição para o toast info!",
  });
}

function toastWarning() {
  $useToast.warning("Warning", {
    description: "Descrição para o toast warning!",
  });
}

function toastDefault() {
  $useToast.default("Default", {
    description: "Descrição para o toast default!",
  });
}
</script>

<template>
  <Header>
    <HeaderBreadcrumb />

    <HeaderTitle> Demostração </HeaderTitle>

    <HeaderDescription>
      Uma demostração dos diferentes tipos de toast que você pode encontrar aqui. Inclui cinco tipos variados de toast:
      success, error, info, warning e default.
    </HeaderDescription>
  </Header>

  <div>
    <Header>
      <HeaderSubTitle id="Toasts"> Toasts </HeaderSubTitle>

      <HeaderSubDescription> Clique nos botões para acioná-los: </HeaderSubDescription>
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
