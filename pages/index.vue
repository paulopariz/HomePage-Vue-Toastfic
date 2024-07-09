<script setup lang="ts"></script>

<template>
  <button
    @click="
      () =>
        $useToast.error('mweorm', {
          description: 'ewrewrwer',
        })
    "
  >
    useToast
  </button>
</template>
