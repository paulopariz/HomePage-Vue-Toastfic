import { ref } from "vue";
import { useToast } from "vue-toastfic";

type ToastMethod = "success" | "error" | "info" | "warning" | "default";

interface ToastType {
  type: ToastMethod;
  title: string;
  description: string;
  method: ToastMethod;
}

const toastTypes: ToastType[] = [
  {
    type: "success",
    title: "Success",
    description: "Descrição para o toast success!",
    method: "success",
  },
  {
    type: "error",
    title: "Error",
    description: "Descrição para o toast error!",
    method: "error",
  },
  {
    type: "info",
    title: "Info",
    description: "Descrição para o toast info!",
    method: "info",
  },
  {
    type: "warning",
    title: "Warning",
    description: "Descrição para o toast warning!",
    method: "warning",
  },
  {
    type: "default",
    title: "Default",
    description: "Descrição para o toast default!",
    method: "default",
  },
];

export function useToastManager() {
  const currentToastIndex = ref(0);

  function showNextToast() {
    const currentToast = toastTypes[currentToastIndex.value];
    const toastMethod = useToast[currentToast.method as ToastMethod];

    if (toastMethod) {
      toastMethod(currentToast.title, {
        description: currentToast.description,
      });
    }

    currentToastIndex.value = (currentToastIndex.value + 1) % toastTypes.length;
  }

  return {
    showNextToast,
  };
}
