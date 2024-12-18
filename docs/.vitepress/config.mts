import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "QuaQA",
  description: "O patinho do QA",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/docs" },
    ],

    sidebar: [
      {
        text: "Imersão",
        link: "/imersao/",
        items: [
          {
            text: "Canvas de Identificação do Domínio",
            link: "/imersao/domain-identification-model-canvas",
          },
          {
            text: "Canvas de Objetivos de Projeto",
            link: "/imersao/project-goals-model-canvas",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/silvercent011/QuaQA" },
    ],
    docFooter: {
      prev: "Página anterior",
      next: "Próxima página",
    },
  },
});
