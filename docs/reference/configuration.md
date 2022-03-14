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
    uploadHandler: (file: File) => Promise<string> | string,
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
