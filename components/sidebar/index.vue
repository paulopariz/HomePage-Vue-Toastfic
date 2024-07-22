<script setup lang="ts">
import Command from "../nav-bar/command.vue";
import Group from "./group.vue";

interface Link {
  to: string;
  text: string;
}

const getting_started: Link[] = [
  { to: "/", text: "Demonstração" },
  { to: "/", text: "Instalar" },
  { to: "/", text: "Nuxt" },
];

const style: Link[] = [{ to: "/", text: "Paleta de cores" }];

const use: Link[] = [
  { to: "/", text: "Posição" },
  { to: "/", text: "Fechar toast" },
  { to: "/", text: "Ativar/Desativar cores" },
  { to: "/", text: "Tempo de fechamento" },
  { to: "/", text: "Máximo de toasts" },
  { to: "/", text: "Tema" },
  { to: "/", text: "Lidar com eventos" },
  { to: "/", text: "Opções" },
  { to: "/", text: "Personalização do toast" },
];

function redirectForm() {
  console.log("wew");

  window.open("https://tally.so/r/w4jjPk", "_blank");
}
</script>

<template>
  <aside
    class="fixed hidden h-screen overflow-y-auto overflow-x-hidden border-r bg-background py-8 pr-6 lg:sticky lg:top-14 lg:-mx-4 lg:block lg:max-h-[calc(100vh-4rem)]"
  >
    <div class="relative">
      <Command />

      <div class="mt-8 grid gap-10">
        <Group title="Iniciar" :links="getting_started" />
        <Group title="Style" :links="style" />
        <Group title="Uso" :links="use" />
      </div>
    </div>

    <div class="absolute bottom-3 h-32 w-[90%]">
      <div class="relative flex size-full flex-col justify-between overflow-hidden rounded-lg border p-4">
        <div>
          <h1 class="font-semibold">Sugestões e melhorias</h1>
          <p class="mt-0.5 text-xs tracking-wide text-muted-foreground">Ajude a impulsionar o vue-toastfic</p>
        </div>

        <Button size="xs" class="text-sm" @click="redirectForm">Formulário</Button>

        <div
          class="circle absolute left-0 top-0 -z-10 flex h-16 w-32 items-center justify-center rounded-full bg-green-light blur-xl"
        />
        <div
          class="circle absolute right-0 top-0 -z-10 flex h-16 w-32 items-center justify-center rounded-full bg-red-600/20 blur-xl dark:bg-red-600/15"
        />
        <div
          class="circle absolute bottom-0 left-0 -z-10 flex h-16 w-32 items-center justify-center rounded-full bg-blue-600/20 blur-xl dark:bg-blue-600/15"
        />
        <div
          class="circle absolute bottom-0 right-0 -z-10 flex h-16 w-32 items-center justify-center rounded-full bg-yellow-600/20 blur-xl dark:bg-yellow-600/15"
        />
      </div>
    </div>
  </aside>
</template>
