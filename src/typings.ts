export type UploadHandler = (file: File) => Promise<string> | string;

export interface createFormKitInputsPluginOptions {
  uploadHandler?: UploadHandler;
}
