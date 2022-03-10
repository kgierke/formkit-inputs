import { FormKitTypeDefinition } from "@formkit/core";
import { useSchema } from "@formkit/inputs";
import features from "./features";
import schema from "./schema";

export const imageDefinition: FormKitTypeDefinition = {
  type: "input",
  schema: useSchema(schema),
  features: [features],
};

export default imageDefinition;
