---
next:
  text: Configuration
  link: /reference/configuration
---

# How to use

## Install the package

In order to use this package you have to install it first, use your preferred package manager to install it.

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

## Setup the plugin

After you've installed the package it's time to set it up. The minimal setup requires you only to import the `createFormKitInputsPlugin` function and use the resulting output as plugin in your FormKit configuration. Below is an example of the minimal setup.

```ts
import createApp from "vue";
import App from "./App.vue";
import { defaultConfig, plugin } from "@formkit/vue";
import createFormKitInputsPlugin from "@kgierke/formkit-inputs";

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

## Passing options

The library can be configured by passing an configuration object to the `createFormKitInputsPlugin` function. More details can be found in the [Configuration](/reference/configuration) section.

```ts
const formKitInputPlugin = createFormKitInputsPlugin({
  // Configure the plugin here
});
```

## Use it

Now you're all set up and can use the library input types in your project.

```vue
<FormKit type="image" name="image" label="Image" />
```
