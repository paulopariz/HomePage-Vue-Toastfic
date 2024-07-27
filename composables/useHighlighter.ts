import { ref, onMounted } from "vue";
import { createHighlighter } from "shiki";

export function useHighlighter(code: string, lang: string, theme: string = "min-dark") {
  const highlightedCode = ref<string>("");

  onMounted(async () => {
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
