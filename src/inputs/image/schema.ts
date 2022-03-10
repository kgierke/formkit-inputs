import {
  FormKitExtendableSchemaRoot,
  FormKitSchemaCondition,
  FormKitSchemaNode,
} from "@formkit/core";

export const schema:
  | FormKitSchemaNode[]
  | FormKitExtendableSchemaRoot
  | FormKitSchemaCondition = [
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
            attrs: {
              class: "$classes.fileItemName",
            },
            children: "$file.name",
          },
          {
            $el: "button",
            attrs: {
              type: "button",
              class: "$classes.fileItemRemove",
              "data-index": "$key",
              onClick: "$handlers.removeFile",
            },
            children: "$ui.remove.value",
          },
        ],
      },
    ],
  },
];

export default schema;
