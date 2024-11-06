<script setup lang="ts">
function redirectForm() {
  window.open("https://tally.so/r/w4jjPk", "_blank");
}
</script>

<template>
  <div
    class="relative flex h-48 w-full items-center justify-between gap-7 overflow-hidden rounded-3xl border bg-foreground max-md:h-56"
  >
    <div class="grid gap-1 px-7">
      <h1 class="text-2xl font-medium -tracking-wide text-background">{{ $t("pages.home.title-redirect-form") }}</h1>
      <p class="stracking-wide max-w-2xl text-sm text-background max-lg:text-sm">
        {{ $t("pages.home.desc-redirect-form") }}
      </p>

      <Button
        size="sm"
        class="mt-6 flex w-32 items-center justify-center gap-1 bg-background text-foreground"
        @click="redirectForm"
      >
        {{ $t("pages.home.form") }} <PhosphorIconCaretRight color="var(--icon)" weight="bold" />
      </Button>
    </div>

    <div class="mr-6 max-md:hidden">
      <div
        class="h-48 w-[305px] bg-[url('~/assets/images/component-toast-dark.svg')] bg-cover bg-center bg-no-repeat dark:bg-[url('~/assets/images/component-toast-light.svg')]"
      />
    </div>
  </div>
</template>
