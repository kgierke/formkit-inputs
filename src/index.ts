import { FormKitPlugin } from "@formkit/core";
import imageDefinition from "./inputs/image";

const formkitInputs: FormKitPlugin = () => {};

formkitInputs.library = (node) => {
  if (node.props.type === "image") {
    node.define(imageDefinition);
  }
};

export default formkitInputs;
