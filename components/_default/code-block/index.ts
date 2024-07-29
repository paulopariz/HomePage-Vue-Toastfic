export { default as Code } from "./code.vue";

type Lang = "typescript" | "vue" | "html" | "css";

export interface ICode {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  code: string;
  lang: Lang;
  key: string;
}
