export { default as Code } from "./code.vue";

type Lang = "typescript" | "vue" | "html" | "css" | "zsh";

export interface ICode {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  code: string;
  lang: Lang;
}
