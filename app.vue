<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <Toast
    :duration="4000"
    position="top-right"
    :close="true"
    :colorful="true"
    theme="dark"
    :max-toasts="7"
    :progress-bar="true"
    :classes="{
      toast: 'classe-toast',
      title: 'classe-title',
      description: 'classe-description',
      buttonHandle: 'classe-handle',
      buttonClose: 'classe-close',
      icon: 'classe-icon',
      icons: {
        success: 'classe-icon-success',
        error: 'classe-icon-error',
        info: 'classe-icon-info',
        warning: 'classe-icon-warning',
      },
    }"
  />
</template>

<style>
::-webkit-scrollbar {
  width: 0px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
