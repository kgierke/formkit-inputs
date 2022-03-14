import { defineClientAppEnhance } from "@vuepress/client";
import { plugin, defaultConfig } from "@formkit/vue";
import createFormKitInputsPlugin from "../../src/index";

const formKitInputsPlugin = createFormKitInputsPlugin();

export default defineClientAppEnhance(({ app }) => {
  app.use(plugin, defaultConfig({ plugins: [formKitInputsPlugin] }));
});
