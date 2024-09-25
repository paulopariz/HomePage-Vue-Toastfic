// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

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
        {
          name: "keywords",
          content: "Vue, Nuxt, toast library, simple toast, Vue Toastfic",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          property: "og:title",
          content: "Vue Toastfic | 💬 Light and simple toast library for Vue and Nuxt",
        },
        {
          property: "og:description",
          content: "Light and simple toast library for Vue and Nuxt, customizable and easy to use.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://vue-toastfic.vercel.app/",
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
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxt/content",
  ],

  plugins: ["~/plugins/date.ts", "~/plugins/toast.ts"],

  css: ["vue-toastfic/style.css", "@/assets/css/main.css"],

  colorMode: {
    classSuffix: "",
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

  content: {
    highlight: {
      theme: "github-dark", // Você pode escolher outros temas suportados pelo Shiki
      preload: ["javascript", "typescript", "vue"], // Linguagens a serem pré-carregadas
    },
  },
});
