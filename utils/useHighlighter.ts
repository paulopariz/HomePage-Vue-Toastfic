import { createHighlighter } from "shiki";

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
