import { FormKitNode } from "@formkit/core";

export type UploadHandler = (
  file: File,
  node: FormKitNode
) => Promise<string> | string;

export interface createFormKitInputsPluginOptions {
  uploadHandler?: UploadHandler;
}
