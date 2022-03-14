export default {
  title: "FormKit Inputs",
  description: "A collection of additional input types to use with FormKit.",
  theme: "@vuepress/theme-default",
  base: "/formkit-inputs/",
  themeConfig: {
    repo: "kgierke/formkit-inputs",
    docsDir: "docs",
    navbar: [
      { text: "Home", link: "/" },
      {
        text: "Reference",
        children: [
          { text: "Configuration", link: "/config" },
          {
            text: "Inputs",
            children: [{ text: "Image", link: "/inputs/image" }],
          },
        ],
      },
    ],
    editLink: true,
  },
};
