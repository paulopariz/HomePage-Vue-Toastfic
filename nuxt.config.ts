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

  build: {
    transpile: ["vue-toastfic"],
  },

  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
        "@assets": "/src/assets",
        "@utils": "/src/utils",
      },
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
    "nuxt-phosphor-icons",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],
  css: ["vue-toastfic/style.css"],

  colorMode: {
    classSuffix: "",
  },

  googleFonts: {
    families: {
      Poppins: [200, 400, 500, 600],
    },
  },

  i18n: {
    vueI18n: "./i18n",
  },

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
