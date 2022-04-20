import { FormKitNode, FormKitPlugin } from "@formkit/core";
import imageSingleDefinition from "./inputs/image/single";
import imageMultipleDefinition from "./inputs/image/multiple";
import { createFormKitInputsPluginOptions } from "./typings";
import "./theme.css";

export function createFormKitInputsPlugin({
  uploadHandler = undefined,
  image = {},
}: createFormKitInputsPluginOptions = {}): FormKitPlugin {
  const plugin = (node: FormKitNode): void => {
    if (node.props.type === "image") {
      node.config.uploadHandler = uploadHandler;
      node.config.idKey = image.idKey || "_id";
      node.config.nameKey = image.nameKey || "name";
      node.config.srcKey = image.srcKey || "src";
    }
  };

  plugin.library = (node: FormKitNode) => {
    switch (node.props.type) {
      case "image":
        return Object.hasOwnProperty.call(node.props.attrs, "multiple")
          ? node.define(imageMultipleDefinition)
          : node.define(imageSingleDefinition);
    }
  };

  return plugin;
}
