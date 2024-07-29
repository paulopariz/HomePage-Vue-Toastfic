import { createHighlighter } from "shiki";

import { useToast } from "vue-toastfic";

const highlightedCode = ref<string>("");
const codeCopied = ref<string>("");

export function useHighlighter(code: string, lang: string, theme: string = "min-dark") {
  onMounted(async () => {
    codeCopied.value = code;

    const highlighter = await createHighlighter({
      themes: [theme],
      langs: ["typescript", "vue", "html", "css"],
    });

    highlightedCode.value = highlighter.codeToHtml(code, {
      lang,
      theme,
    });
  });

  return { highlightedCode };
}

export function copyToClipboard() {
  console.log("copyToClipboard function called");

  if (codeCopied.value) {
    navigator.clipboard
      .writeText(codeCopied.value)
      .then(() => {
        useToast.default("Comando copiado!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
}
