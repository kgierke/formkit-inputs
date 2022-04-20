import { createMessage, FormKitNode } from "@formkit/core";
import localize from "../../../utils/localize";
import { isBrowser, preventStrayDrop, removeHover } from "../shared";

declare global {
  interface Window {
    _FormKit_File_Drop: boolean;
  }
}

export default function (node: FormKitNode): void {
  localize("noFiles", "No files")(node);
  localize("remove")(node);
  localize("uploading", "Uploading...")(node);
  localize("uploaded", "Uploaded")(node);

  if (isBrowser) {
    if (!window._FormKit_File_Drop) {
      window.addEventListener(
        "dragover",
        preventStrayDrop.bind(null, "dragover")
      );
      window.addEventListener("drop", preventStrayDrop.bind(null, "drop"));
      window.addEventListener("dragleave", removeHover);
      window._FormKit_File_Drop = true;
    }
  }

  node.on("created", () => {
    if (typeof node.value !== "string") {
      node.input("", false);
    }

    if (!node.context) return;

    const hasUploadHandler =
      node.props.uploadHandler && node.props.uploadHandler instanceof Function;

    node.context.handlers.files = (e: Event) => {
      if (e.target instanceof HTMLInputElement && e.target.files) {
        for (let i = 0; i < e.target.files.length; i++) {
          let file = e.target.files[i];

          if (file) {
            node.input(file);

            if (hasUploadHandler) {
              node.store.set(
                createMessage({
                  blocking: true,
                  key: "fileUploading",
                  type: "boolean",
                  value: "fileUploading",
                  visible: false,
                })
              );

              Promise.resolve(node.props.uploadHandler(file, node))
                .then((src) => {
                  node.input(src);
                })
                .catch((err) => {
                  console.error(
                    "File Could not be uploaded, see the following details:",
                    err
                  );
                  node.store.set(
                    createMessage({
                      blocking: true,
                      key: "fileUploadError",
                      type: "string",
                      value: err,
                      visible: true,
                    })
                  );
                })
                .finally(() => node.store.remove("fileUploading"));
            }
          }

          /**
           * Reset the input element. See: https://github.com/kgierke/formkit-inputs/issues/8
           */
          e.target.value = "";
        }
      }

      if (typeof node.props.attrs?.onChange === "function") {
        node.props.attrs?.onChange(e);
      }
    };

    node.context.handlers.removeFile = (e: Event) => {
      if (e.target instanceof HTMLButtonElement) {
        node.input("", false);
        node.store.remove("fileUploadError");
      }
    };

    node.context.fns.getPreviewUrl = (src: string | File) => {
      if (typeof src === "string") {
        return src;
      } else if (src instanceof File) {
        return URL.createObjectURL(src);
      }
    };
  });
}
