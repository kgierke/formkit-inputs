import { defineClientConfig } from "@vuepress/client";
import { plugin, defaultConfig } from "@formkit/vue";
import { createFormKitInputsPlugin } from "../../src/index";
import "@formkit/themes/genesis";
import "../../src/theme.css";

const formKitInputsPlugin = createFormKitInputsPlugin();

export default defineClientConfig({
  enhance({ app }) {
    app.use(plugin, defaultConfig({ plugins: [formKitInputsPlugin] }));
  },
});
