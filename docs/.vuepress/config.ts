import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  title: "FormKit Inputs",
  description: "A collection of additional input types to use with FormKit.",
  theme: defaultTheme({
    repo: "kgierke/formkit-inputs",
    docsDir: "docs",
    navbar: [
      { text: "Home", link: "/" },
      {
        text: "Guide",
        children: [
          { text: "Getting started", link: "/guide/getting-started" },
          { text: "Default theme", link: "/guide/default-theme" },
        ],
      },
      {
        text: "Reference",
        children: [
          { text: "Configuration", link: "/reference/configuration" },
          {
            text: "Inputs",
            children: [
            children: [{ text: "Image", link: "/reference/inputs/image" }],
            ],
          },
        ],
      },
    ],
    editLink: true,
  }),
  base: "/formkit-inputs/",
});
