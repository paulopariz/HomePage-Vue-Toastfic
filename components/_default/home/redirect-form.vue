<script setup lang="ts">
function redirectForm() {
  window.open("https://tally.so/r/w4jjPk", "_blank");
}
</script>

<template>
  <div
    class="relative flex h-48 w-full items-center justify-between gap-7 overflow-hidden rounded-3xl border bg-foreground"
  >
    <div class="grid gap-1 px-7">
      <h1 class="text-2xl font-medium -tracking-wide text-background">Sugestões e melhorias</h1>
      <p class="stracking-wide max-w-2xl text-sm text-background">
        Olá, sua opinião é muito importante para futuras versões do vue-toastfic. Suas sugestões de melhorias e
        relatórios de bugs contribuirão significativamente para nosso progresso.
      </p>

      <Button
        size="sm"
        class="mt-6 flex w-32 items-center justify-center gap-1 bg-background text-foreground"
        @click="redirectForm"
      >
        Formulário <PhosphorIconCaretRight color="var(--icon)" weight="bold" />
      </Button>
    </div>

    <div class="mr-6">
      <div
        class="h-48 w-[305px] bg-[url('~/assets/images/component-toast-dark.svg')] bg-cover bg-center bg-no-repeat dark:bg-[url('~/assets/images/component-toast-light.svg')]"
      />
    </div>
  </div>
</template>
