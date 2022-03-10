import { FormKitTypeDefinition } from "@formkit/core";
import features from "./features";
import schema from "./schema";

export const imageDefinition: FormKitTypeDefinition = {
  type: "input",
  schema: schema,
  features: [features],
};

export default imageDefinition;
