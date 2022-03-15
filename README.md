# FormKit Inputs

A collection of some additional input types to use with [FormKit](https://formkit.com). Most of these additional input types are based on my personal needs, but feel free to submit PRs to add more.

## How to use

### Install the package

In order to use this package you have to install it first, use your preferred package manager to install it.

```bash
npm install @kgierke/formkit-inputs
```

### Setup the package

After you've installed the package it's time to set it up. The minimal setup requires you only to import the `createFormKitInputsPlugin` function and use the resulting output as plugin in your FormKit configuration. Below is an example of the minimal setup.

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

### Passing options

The `createFormKitInputsPlugin` function accepts an optional `options` argument. The following options are available:

```ts
{
    /**
     * To use the image input type with an automatic upload function
     * you have to pass an uploadHandler function.
     * This can also be passed as a property to the `image` input type.
     *
     * The uploadHandler receives the HTML5 `File` object
     * as first argument and expects an src string as return value.
     */
    uploadHandler: (file: File) => Promise<string> | string,
}
```

## Included Inputs

### Image

The `image` input type is an alternative to the `file` input type. It allows you to upload images and have a preview directly in the form. It also allows you to individually add and remove images (Possible with the `multiple` property). It is also possible to directly upload images to your server once they are selected and block the form from submitting until the upload is finished. To do so you have to pass an uploadHandler function as property or through the global configuration. The uploadHandler receives the HTML5 `File` object as first argument and expects an src string as return value.

```vue
<template>
  <FormKit type="form">
    <FormKit
      type="image"
      name="image"
      label="Image"
      multiple
      uploadHandler="uploadHandler"
    />
  </FormKit>
</template>

<script setup lang="ts">
import { FormKit } from "@formkit/vue";

const uploadHandler = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch("/upload", {
    method: "POST",
    body: formData,
  });

  return response.url;
};
</script>
```
