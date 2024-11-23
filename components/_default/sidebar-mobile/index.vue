<script setup lang="ts">
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Group from "./group.vue";
import Card from "../sidebar/card.vue";

import { useLinks } from "~/composables/useLinks";

const { getting_started, style, use } = useLinks();
</script>

<template>
  <section>
    <Sheet>
      <SheetTrigger
        as-child
        class="container fixed top-16 flex h-9 w-full items-center border-b bg-background max-sm:px-4"
      >
        <div class="flex items-center gap-1">
          <p class="cursor-pointer text-sm text-muted-foreground hover:text-foreground hover:underline">
            {{ $t("additionals.documentation") }}
          </p>
          <PhosphorIconCaretRight size="14" color="var(--icon)" />
        </div>
      </SheetTrigger>

      <SheetContent side="bottom" class="h-[93%]">
        <SheetHeader class="items-start">
          <SheetTitle> {{ $t("additionals.documentation") }} </SheetTitle>
        </SheetHeader>

        <div class="mt-5 grid w-min gap-3">
          <SheetClose>
            <Group :title="$t('components.nav-bar.command.gettingStarted')" :links="getting_started" />
          </SheetClose>

          <SheetClose>
            <Group :title="$t('components.nav-bar.command.style')" :links="style" />
          </SheetClose>

          <SheetClose>
            <Group :title="$t('components.nav-bar.command.use')" :links="use" />
          </SheetClose>
        </div>

        <Card />
      </SheetContent>
    </Sheet>
  </section>
</template>
