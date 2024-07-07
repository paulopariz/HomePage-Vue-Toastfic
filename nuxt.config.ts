// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Vue Toastfic | 💬 Light and simple toast library for Vue and Nuxt",
      meta: [
        {
          name: "description",
          content: "Light and simple toast library for Vue and Nuxt",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.svg" }],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  css: ["vue-toastfic/style.css"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
