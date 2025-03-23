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
            text: "Identificação do Domínio",
            link: "/imersao/domain-identification-model-canvas",
          },
          {
            text: "Objetivos de Projeto",
            link: "/imersao/project-goals-model-canvas",
          },
          {
            text: "Persona Model",
            link: "/imersao/persona-model-canvas",
          },
        ],
      },
      {
        text: "Ideação",
        link: "/ideacao/",
        items: [
          {
            text: "Ideação de Soluções",
            link: "/ideacao/solution-ideation-model-canvas",
          },
          {
            text: "Design de Prompts",
            link: "/ideacao/prompts-design-model-canvas",
          },
        ],
      },
      {
        text: "Produção",
        link: "/producao/",
        items: [
          {
            text: "Nível de Componente",
            link: "/producao/component-level",
          },
          {
            text: "Nível de Contêiner",
            link: "/producao/container-level",
          },
          {
            text: "Nível de Contexto",
            link: "/producao/context-level",
          },
          {
            text: "Testes e Validação",
            link: "/producao/testing-and-validation",
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
