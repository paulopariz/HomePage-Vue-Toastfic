import { createHighlighter } from "shiki";
import { useToast } from "vue-toastfic";

type Lang = "typescript" | "vue" | "html" | "css" | "zsh";

export async function highlightCode(code: string, lang: Lang, theme: string = "min-dark"): Promise<string> {
  const highlighter = await createHighlighter({
    themes: [theme],
    langs: ["typescript", "vue", "html", "css", "zsh"],
  });

  return highlighter.codeToHtml(code, {
    lang,
    theme,
  });
}

export function copyToClipboard(code: string) {
  if (code) {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        useToast.default("Comando copiado!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
}
