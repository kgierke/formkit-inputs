import {
  FormKitExtendableSchemaRoot,
  FormKitSchemaCondition,
  FormKitSchemaNode,
} from "@formkit/core";

export type FormKitSchema =
  | FormKitSchemaNode[]
  | FormKitExtendableSchemaRoot
  | FormKitSchemaCondition;
