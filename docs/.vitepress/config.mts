import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/QuaQA/",
  title: "QuaQA",
  description: "O patinho do QA",
  themeConfig: {
    outline: {
      level: "deep",
      label: "Conteúdo",
    },
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
          {
            text: "Persona Model Canvas",
            link: "/imersao/persona-model-canvas",
          },
        ],
      },
      {
        text: "Ideação",
        link: "/ideacao/",
        items: [
          {
            text: "Canvas de Ideação de Soluções",
            link: "/ideacao/solution-ideation-model-canvas",
          },
          {
            text: "Canvas de Design de Prompts",
            link: "/ideacao/prompts-design-model-canvas",
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
