---
home: true
tagline: "Enhanced input types for FormKit"
actions:
  - text: Get started
    link: /guide/getting-started
---

A collection of additional input types to use with [FormKit](https://formkit.com).

### How to use

Install it in your project

<CodeGroup>
<CodeGroupItem title="NPM" active>

```bash
npm install @kgierke/formkit-inputs
```

</CodeGroupItem>

<CodeGroupItem title="YARN">

```bash
# Install it in your project
yarn add @kgierke/formkit-inputs
```

</CodeGroupItem>
</CodeGroup>

Initialize FormKit with the plugin:

```ts
import createApp from "vue";
import App from "./App.vue";
import { defaultConfig, plugin } from "@formkit/vue";
import { createFormKitInputsPlugin } from "@kgierke/formkit-inputs";

const formKitInputPlugin = createFormKitInputsPlugin();

const app = createApp(App);
app
  .use(
    plugin,
    defaultConfig({
      plugins: [formKitInputPlugin],
    })
  )
  .mount("#app");
```

Enjoy!

```vue
<FormKit type="image" name="image" label="Image" />
```
