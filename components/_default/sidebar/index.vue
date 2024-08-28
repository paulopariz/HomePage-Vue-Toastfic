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

const style: Link[] = [{ to: "/style/palette", text: "Paleta de cores" }];

const use: Link[] = [
  { to: "/use/position", text: "Posição" },
  { to: "/use/close-toast", text: "Fechar toast" },
  { to: "/use/duration", text: "Tempo de fechamento" },
  { to: "/use/colorful", text: "Ativar/Desativar cores" },
  { to: "/use/maximum", text: "Máximo de toasts" },
  { to: "/use/theme", text: "Tema" },
  { to: "/use/event", text: "Lidar com eventos" },
  { to: "/use/personalize", text: "Personalização do toast" },
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
