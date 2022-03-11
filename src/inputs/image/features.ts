import { createMessage, FormKitNode } from "@formkit/core";
import { UploadHandler } from "../../typings";
import localize from "../../utils/localize";
import { nanoid } from "nanoid";

declare global {
  interface Window {
    _FormKit_File_Drop: boolean;
  }
}

const isBrowser = typeof window !== "undefined";

/**
 * Remove the data-file-hover attribute from the target.
 * @param e - Event
 */
function removeHover(e: Event) {
  if (
    e.target instanceof HTMLElement &&
    e.target.hasAttribute("data-file-hover")
  ) {
    e.target.removeAttribute("data-file-hover");
  }
}

/**
 * Prevent stray drag/drop events from navigating the window.
 * @param e - Event
 */
function preventStrayDrop(type: string, e: Event) {
  if (!(e.target instanceof HTMLInputElement)) {
    e.preventDefault();
  } else if (type === "dragover") {
    e.target.setAttribute("data-file-hover", "true");
  }
  if (type === "drop") {
    removeHover(e);
  }
}

function mergeArrays(arr1: any[], arr2: any[]) {
  return arr2.concat(arr1.filter((v) => !arr2.some((v2) => v2.id === v.id)));
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
    if (!Array.isArray(node.value)) {
      node.input([], false);
    }

    if (!node.context) return;

    const isMultiple = Object.hasOwnProperty.call(node.props.attrs, "multiple");
    const hasUploadHandler =
      node.props.uploadHandler && node.props.uploadHandler instanceof Function;

    node.context.handlers.files = (e: Event) => {
      if (e.target instanceof HTMLInputElement && e.target.files) {
        for (let i = 0; i < e.target.files.length; i++) {
          let file = e.target.files[i];

          if (file) {
            const id = nanoid();
            let uploadStatus = {};
            if (hasUploadHandler) {
              uploadStatus = { uploading: true };
            }

            if (isMultiple && Array.isArray(node._value)) {
              node.input(
                mergeArrays(node._value, [
                  { id, name: file.name, src: file, ...uploadStatus },
                ])
              );
            } else {
              node.input([{ id, name: file.name, src: file, ...uploadStatus }]);
            }

            if (hasUploadHandler) {
              node.store.set(
                createMessage({
                  blocking: true,
                  key: `filesUploading_${id}`,
                  type: "boolean",
                  value: `filesUploading_${id}`,
                  visible: false,
                })
              );

              Promise.resolve(node.props.uploadHandler(file))
                .then((src) => {
                  if (isMultiple && Array.isArray(node._value)) {
                    node.input(
                      mergeArrays(node._value, [{ id, name: file.name, src }])
                    );
                  } else {
                    node.input([{ id, name: file.name, src }]);
                  }
                })
                .catch((err) => {
                  console.error(
                    "File Could not be uploaded, see the following details:",
                    err
                  );
                  node.store.set(
                    createMessage({
                      blocking: true,
                      key: `filesUploadError_${id}`,
                      type: "string",
                      value: err,
                      visible: true,
                    })
                  );
                })
                .finally(() => node.store.remove(`filesUploading_${id}`));
            }
          }
        }
      }

      if (typeof node.props.attrs?.onChange === "function") {
        node.props.attrs?.onChange(e);
      }
    };

    node.context.handlers.removeFile = (e: Event) => {
      if (e.target instanceof HTMLButtonElement) {
        const id = Number(e.target.dataset.id);
        if (Array.isArray(node.value) && node.value.some((v) => v.id === id)) {
          node.input(node.value.filter((v) => v.id !== id));
          node.store.remove(`filesUploadError_${id}`);
        }
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
