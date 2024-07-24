<script setup lang="ts">
const status_card = ref(true);

const showCard = computed(() => status_card.value);

function redirectForm() {
  window.open("https://tally.so/r/w4jjPk", "_blank");
}

function hiddenCard() {
  status_card.value = false;
  sessionStorage.setItem("status_card", "false");
}

onMounted(() => {
  const storedStatus = sessionStorage.getItem("status_card");
  if (storedStatus !== null) {
    status_card.value = storedStatus === "true";
  }
});
</script>

<template>
  <div v-if="showCard" class="group absolute bottom-3 h-32 w-[90%]">
    <div class="relative flex size-full flex-col justify-between overflow-hidden rounded-lg border p-4">
      <div>
        <h1 class="font-semibold">Sugestões e melhorias</h1>
        <p class="mt-0.5 text-xs tracking-wide text-muted-foreground">Ajude a impulsionar o vue-toastfic</p>
      </div>

      <Button size="xs" class="text-sm" @click="redirectForm">Formulário</Button>

      <div
        class="absolute left-0 top-0 -z-10 flex h-16 w-32 items-center justify-center rounded-full bg-green-light blur-xl"
      />
      <div
        class="absolute right-0 top-0 -z-10 flex h-16 w-32 items-center justify-center rounded-full bg-red-600/20 blur-xl dark:bg-red-600/15"
      />
      <div
        class="absolute bottom-0 left-0 -z-10 flex h-16 w-32 items-center justify-center rounded-full bg-blue-600/20 blur-xl dark:bg-blue-600/15"
      />
      <div
        class="absolute bottom-0 right-0 -z-10 flex h-16 w-32 items-center justify-center rounded-full bg-yellow-600/20 blur-xl dark:bg-yellow-600/15"
      />
    </div>
    <button
      class="absolute -right-1 -top-1 z-10 flex size-4 items-center justify-center rounded-full bg-muted opacity-0 transition-all group-hover:opacity-100"
      @click="hiddenCard"
    >
      <PhosphorIconX color="var(--icon)" size="10" weight="bold" />
    </button>
  </div>
</template>
