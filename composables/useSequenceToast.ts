import { ref, onMounted } from "vue";
import { useToast } from "vue-toastfic";
import { useNuxtApp } from "#app";

type ToastMethod = "success" | "error" | "info" | "warning" | "default";

interface ToastType {
  type: ToastMethod;
  title: string;
  description: string;
  method: ToastMethod;
}

export function useToastManager() {
  const currentToastIndex = ref(0);
  const toastTypes = ref<ToastType[]>([]);

  onMounted(() => {
    const { $i18n } = useNuxtApp();
    const { t } = $i18n;

    toastTypes.value = [
      {
        type: "success",
        title: "Success",
        description: `${t("additionals.use-sequence-toast")} success!`,
        method: "success",
      },
      {
        type: "error",
        title: "Error",
        description: `${t("additionals.use-sequence-toast")} error!`,
        method: "error",
      },
      {
        type: "info",
        title: "Info",
        description: `${t("additionals.use-sequence-toast")} info!`,
        method: "info",
      },
      {
        type: "warning",
        title: "Warning",
        description: `${t("additionals.use-sequence-toast")} warning!`,
        method: "warning",
      },
      {
        type: "default",
        title: "Default",
        description: `${t("additionals.use-sequence-toast")} default!`,
        method: "default",
      },
    ];
  });

  function showNextToast() {
    const currentToast = toastTypes.value[currentToastIndex.value];
    const toastMethod = useToast[currentToast.method as ToastMethod];

    if (toastMethod) {
      toastMethod(currentToast.title, {
        description: currentToast.description,
      });
    }

    currentToastIndex.value = (currentToastIndex.value + 1) % toastTypes.value.length;
  }

  return {
    showNextToast,
  };
}
