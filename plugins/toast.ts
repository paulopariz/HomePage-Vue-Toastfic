import { Toast, useToast } from "vue-toastfic";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("Toast", Toast);

  return {
    provide: {
      useToast,
    },
  };
});
