---
prev:
  text: Getting Started
  link: /guide/getting-started
next:
  text: Image input
  link: /reference/inputs/image
---

# Configuration

The library can be configured by passing an configuration object to the `createFormKitInputsPlugin` function.

```ts
const formKitInputPlugin = createFormKitInputsPlugin({
  // Configure the plugin here
});
```

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
    uploadHandler: (file: File, node: FormKitNode) => Promise<string> | string = undefined,
    /**
     * Default image input type configuration can be overwritten with the following properties.
     */
    image: {
      /**
       * Overwrites the default key for the image id in the form data.
       * (Only applies for image inputs which accept *multiple images.)
       */
      idKey: string = "_id",
      /**
       * Overwrites the default key for the image name in the form data.
       * (Only applies for image inputs which accept multiple images.)
       */
      nameKey: string = "name",
      /**
       * Overwrites the default key for the image src in the form data.
       * (Only applies for image inputs which accept multiple images.)
       */
      srcKey: string = "src",
    }
}
```

## Options

### uploadHandler

- Type: `Function`
- Default: `undefined`

To use the image input type with an automatic upload function you have to pass an uploadHandler function. This can also be passed as a property to the `image` input type. The uploadHandler receives the HTML5 `File` object as first argument and expects an src string as return value.

```ts
{
    uploadHandler: (file: File, node: FormKitNode) => Promise<string> | string,
}
```
