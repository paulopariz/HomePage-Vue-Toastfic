<script setup lang="ts">
import Command from "../nav-bar/command.vue";
import Card from "./card.vue";
import Group from "./group.vue";

interface Link {
  to: string;
  text: string;
}

const getting_started: Link[] = [
  { to: "/getting-started", text: "Demonstração" },
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

    <Card />
  </aside>
</template>
