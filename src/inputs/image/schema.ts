import { FormKitInputSchema } from "@formkit/inputs";

export const schema: FormKitInputSchema = {
  $el: "div",
  attrs: {
    class: "$classes.container",
  },
  children: [
    {
      $el: "div",
      attrs: {
        class: "$classes.uploader",
      },
      children: [
        "$ui.noFiles.value",
        {
          $el: "input",
          bind: "$attrs",
          attrs: {
            type: "file",
            disabled: "$disabled",
            class: "$classes.input",
            name: "$node.name",
            onChange: "$handlers.files",
            onBlur: "$handlers.blur",
            id: "$id",
          },
        },
      ],
    },
    {
      $el: "ul",
      if: "$value.length",
      attrs: {
        class: "$classes.fileList",
        "data-has-multiple": {
          if: "$value.length > 1",
          then: "true",
        },
      },
      children: [
        {
          $el: "li",
          for: ["file", "key", "$value"],
          attrs: {
            class: "$classes.fileItem",
          },
          children: [
            {
              $el: "img",
              attrs: {
                class: "$classes.fileItemImage",
                src: "$fns.getPreviewUrl($file.src)",
              },
            },
            {
              $el: "span",
              if: "$file.name",
              attrs: {
                class: "$classes.fileItemName",
              },
              children: "$file.name",
            },
            {
              $el: "span",
              children: {
                if: "$file.uploading",
                then: "$ui.uploading.value",
                else: "$ui.uploaded.value",
              },
            },
            {
              $el: "button",
              attrs: {
                type: "button",
                class: "$classes.fileItemRemove",
                "data-id": "$file._id",
                onClick: "$handlers.removeFile",
              },
              children: "$ui.remove.value",
            },
          ],
        },
      ],
    },
  ],
};

export default schema;
