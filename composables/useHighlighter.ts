import { createHighlighter } from "shiki";

const highlightedCode = ref("");

export function useHighlighter(code: string, lang: string, theme: string = "min-dark") {
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
