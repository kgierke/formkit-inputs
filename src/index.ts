import { FormKitNode, FormKitPlugin } from "@formkit/core";
import imageDefinition from "./inputs/image";
import { createFormKitInputsPluginOptions } from "./typings";

export function createFormKitInputsPlugin({
  uploadHandler = undefined,
}: createFormKitInputsPluginOptions = {}): FormKitPlugin {
  const plugin = (node: FormKitNode): void => {
    if (node.props.type === "image") {
      node.config.uploadHandler = uploadHandler;
    }
  };

  plugin.library = (node: FormKitNode) => {
    switch (node.props.type) {
      case "image":
        return node.define(imageDefinition);
    }
  };

  return plugin;
}
