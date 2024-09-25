<script setup lang="ts">
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Group from "./group.vue";
import Card from "../sidebar/card.vue";

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
  { to: "/use/progress-bar", text: "Barra de progresso" },
  { to: "/use/colorful", text: "Ativar/Desativar cores" },
  { to: "/use/maximum", text: "Máximo de toasts" },
  { to: "/use/theme", text: "Tema" },
  { to: "/use/event", text: "Lidar com eventos" },
  { to: "/use/personalize", text: "Personalização do toast" },
];
</script>

<template>
  <section>
    <Sheet>
      <SheetTrigger
        as-child
        class="container fixed top-16 flex h-9 w-full items-center border-b bg-background max-sm:px-4"
      >
        <div class="flex items-center gap-1">
          <p class="cursor-pointer text-sm text-muted-foreground hover:text-foreground hover:underline">Documentação</p>
          <PhosphorIconCaretRight size="14" color="var(--icon)" />
        </div>
      </SheetTrigger>

      <SheetContent side="bottom" class="h-[93%]">
        <SheetHeader class="items-start">
          <SheetTitle> Documentação </SheetTitle>
        </SheetHeader>

        <div class="mt-5 grid w-min gap-3">
          <SheetClose>
            <Group title="Iniciar" :links="getting_started" />
          </SheetClose>

          <SheetClose>
            <Group title="Style" :links="style" />
          </SheetClose>

          <SheetClose>
            <Group title="Uso" :links="use" />
          </SheetClose>
        </div>

        <Card />
      </SheetContent>
    </Sheet>
  </section>
</template>
