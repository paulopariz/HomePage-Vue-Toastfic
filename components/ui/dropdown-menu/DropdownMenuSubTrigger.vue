<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { DropdownMenuSubTrigger, type DropdownMenuSubTriggerProps, useForwardProps } from "radix-vue";
import { cn } from "@/lib/utils";

const props = defineProps<DropdownMenuSubTriggerProps & { class?: HTMLAttributes["class"] }>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <DropdownMenuSubTrigger
    v-bind="forwardedProps"
    :class="
      cn(
        'flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
        props.class
      )
    "
  >
    <slot />
    <PhosphorIconCaretRight size="12" color="var(--icon)" weight="bold" class="ml-auto" />
  </DropdownMenuSubTrigger>
</template>
