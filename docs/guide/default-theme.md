---
prev:
  text: Gettings Started
  link: /guide/getting-started
next:
  text: Configuration
  link: /reference/configuration
---

# Default theme

The library ships with a default theme that can be used as a starting point. It build upon the [Genesis theme](https://formkit.com/essentials/styling) of FormKit.

## Using the theme

If you'd like to use the default theme for your project, you simply need to install the genesis theme from FormKit and import the necessary `css` files into your project.

<CodeGroup>
<CodeGroupItem title="NPM" active>

```bash
npm install @formkit/themes
```

</CodeGroupItem>

<CodeGroupItem title="YARN">

```bash
yarn add @formkit/themes
```

</CodeGroupItem>
</CodeGroup>

```ts
//...
import "@formkit/themes/genesis";
import "@kgierke/formkit-inputs/dist/theme.css";
//...
```
