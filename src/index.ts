import { FormKitPlugin } from "@formkit/core";
import imageDefinition from "./inputs/image";

const formkitInputs: FormKitPlugin = () => {};

formkitInputs.library = (node) => {
  switch (node.props.type) {
    case "image":
      return node.define(imageDefinition);
  }
};

export default formkitInputs;
