<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  class?: HTMLAttributes["class"];
}

const props = defineProps<SkeletonProps>();
</script>

<template>
  <div :class="cn('animate-pulse rounded-md bg-[#15151713] dark:bg-[#e2e2e213]', props.class)" />
</template>
