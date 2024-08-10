<script setup lang="ts">
import Command from "../nav-bar/command.vue";
import Card from "./card.vue";
import Group from "./group.vue";

interface Link {
  to: string;
  text: string;
}

const getting_started: Link[] = [
  { to: "/getting-started", text: "Instalar" },
  { to: "/getting-started/demo", text: "Demonstração" },
];

const style: Link[] = [{ to: "/getting-started/palette", text: "Paleta de cores" }];

const use: Link[] = [
  { to: "/getting-started/position", text: "Posição" },
  { to: "/getting-started/close-toast", text: "Fechar toast" },
  { to: "/getting-started/colorful", text: "Ativar/Desativar cores" },
  { to: "/getting-started/", text: "Tempo de fechamento" },
  { to: "/getting-started/", text: "Máximo de toasts" },
  { to: "/getting-started/", text: "Tema" },
  { to: "/getting-started/", text: "Lidar com eventos" },
  { to: "/getting-started/", text: "Opções" },
  { to: "/getting-started/", text: "Personalização do toast" },
];
</script>

<template>
  <aside
    class="fixed hidden h-screen overflow-y-auto overflow-x-hidden border-r bg-background py-8 pr-6 lg:sticky lg:top-16 lg:-mx-4 lg:block lg:max-h-[calc(100vh-4rem)]"
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
