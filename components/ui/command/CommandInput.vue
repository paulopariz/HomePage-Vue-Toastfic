<script setup lang="ts">
import { type HTMLAttributes, computed } from "vue";
import { ComboboxInput, type ComboboxInputProps, useForwardProps } from "radix-vue";
import { cn } from "@/lib/utils";

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<
  ComboboxInputProps & {
    class?: HTMLAttributes["class"];
  }
>();

const delegatedProps = computed(() => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <div class="flex items-center border-b px-3" cmdk-input-wrapper>
    <PhosphorIconMagnifyingGlass color="var(--icon)" class="mr-2 h-4 w-4 shrink-0 opacity-50" />

    <ComboboxInput
      v-bind="{ ...forwardedProps, ...$attrs }"
      auto-focus
      :class="
        cn(
          'flex h-10 w-full rounded-md bg-transparent py-3 text-xs outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          props.class
        )
      "
    />
  </div>
</template>
