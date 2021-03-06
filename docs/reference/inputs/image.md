---
title: Image Input
prev:
  text: Configuration
  link: /reference/configuration
---

# {{ $frontmatter.title }}

## Options

The image input accepts the following options:

| Property      | Type     | Default | Description                                                                                                                                                                                                                                            |
| ------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| uploadHandler | Function | -       | A function that receives the HTML5 `File` object as first argument and expects an src string as return value. The uploadHandler function can also be defined globally for all image uploads, see the plugin [Configuration](/reference/configuration). |
| multiple      | Boolean  | false   | Allow multiple images to be selected.                                                                                                                                                                                                                  |
| accept        | String   | -       | A comma separated list of accepted MIME types. [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept).                                                                                                                |

**_Note:_** _All other props are passed directly to the `<input type="file">` element._

## Examples

Below you can find some examples of the image input type.

### Single Image

In its standard form the image input type allows you to upload an image and have a preview directly in the form. It only accepts one image and selecting a new one will replace the old one.

**Source:**

```vue
<template>
  <FormKit type="image" label="Single Image" />
</template>
```

**Output:**

<FormKit type="image" label="Single Image" v-model="singleImageWithoutUploadHandler" />

**Value:**

<pre>
{{ singleImageWithoutUploadHandler }}
</pre>

### Single Image with uploader

The image input also accepts an optional uploadHandler function. If present, the uploadHandler receives the HTML5 `File` object as first argument and expects an src string as return value. You can use this to upload the image to your server before the user submits the form. The uploadHandler can also be defined globally in the configuration.

**Source:**

```vue
<template>
  <FormKit type="image" label="Single Image" upload-handler="fakeUpload" />
</template>
```

**Output:**

<FormKit type="image" label="Single Image" v-model="singleImageWithUploadHandler" :upload-handler="fakeUpload" />

**Value:**

<pre>
{{ singleImageWithUploadHandler }}
</pre>

### Multiple Images

You can also upload multiple images and get a list of all selected images with previews. It is also possible to remove images from the list by clicking the remove button.

**Source:**

```vue
<template>
  <FormKit type="image" label="Multiple Images" multiple />
</template>
```

**Output:**

<FormKit type="image" label="Multiple Images" multiple v-model="multipleImagesWithoutUploadHandler" />

**Value:**

<pre>
{{ multipleImagesWithoutUploadHandler }}
</pre>

### Multiple Images with uploader

Similar to the single image with uploader the multiple image input type also accepts an uploadHandler function. It gets called asynchronously for each selected image.

**Source:**

```vue
<template>
  <FormKit
    type="image"
    label="Multiple Images"
    multiple
    upload-handler="fakeUpload"
  />
</template>
```

**Output:**

<FormKit 
  v-model="multipleImagesWithUploadHandler"
  type="image"
  label="Multiple Images"
  multiple
  :upload-handler="fakeUpload"
/>

**Value:**

<pre>
{{ multipleImagesWithUploadHandler }}
</pre>

<script setup>
  import { ref } from 'vue';
  
  const singleImageWithoutUploadHandler = ref("");
  const singleImageWithUploadHandler = ref("");
  const multipleImagesWithoutUploadHandler = ref([]);
  const multipleImagesWithUploadHandler = ref([]);

  const fakeUpload = (file) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = URL.createObjectURL(file);
        resolve(result);
      }, 1000);
    });
  };
</script>
