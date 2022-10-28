import { createMessage, FormKitNode } from "@formkit/core";
import localize from "../../../utils/localize";
import { nanoid } from "nanoid";
import { isBrowser, preventStrayDrop, removeHover } from "../shared";

declare global {
  interface Window {
    _FormKit_File_Drop: boolean;
  }
}

function mergeArrays(arr1: any[], arr2: any[], idKey: string) {
  return arr2.concat(
    arr1.filter((v) => !arr2.some((v2) => v2[idKey] === v[idKey]))
  );
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

    const hasUploadHandler =
      node.props.uploadHandler && node.props.uploadHandler instanceof Function;
    const idKey = node.props.idKey;
    const nameKey = node.props.nameKey;
    const srcKey = node.props.srcKey;

    node.context.handlers.files = (e: Event) => {
      if (e.target instanceof HTMLInputElement && e.target.files) {
        for (let i = 0; i < e.target.files.length; i++) {
          let file = e.target.files[i];

          if (file) {
            const _id = nanoid();
            let uploadStatus = {};
            if (hasUploadHandler) {
              uploadStatus = { uploading: true };
            }

            node.input(
              mergeArrays(
                node._value as any[],
                [
                  {
                    [idKey]: _id,
                    [nameKey]: file.name,
                    [srcKey]: file,
                    ...uploadStatus,
                  },
                ],
                idKey
              )
            );

            if (hasUploadHandler) {
              node.store.set(
                createMessage({
                  blocking: true,
                  key: `filesUploading_${_id}`,
                  type: "boolean",
                  value: `filesUploading_${_id}`,
                  visible: false,
                })
              );

              Promise.resolve(node.props.uploadHandler(file, node))
                .then((src) => {
                  node.input(
                    mergeArrays(
                      node._value as any[],
                      [{ [idKey]: _id, [nameKey]: file.name, [srcKey]: src }],
                      idKey
                    )
                  );
                })
                .catch((err) => {
                  console.error(
                    "File Could not be uploaded, see the following details:",
                    err
                  );
                  node.store.set(
                    createMessage({
                      blocking: true,
                      key: `filesUploadError_${_id}`,
                      type: "string",
                      value: err,
                      visible: true,
                    })
                  );
                })
                .finally(() => node.store.remove(`filesUploading_${_id}`));
            }
          }

          /**
           * Reset the input element. See: https://github.com/kgierke/formkit-inputs/issues/8
           */
          if (i === e.target.files.length - 1) {
            e.target.value = "";
          }
        }
      }

      if (typeof node.props.attrs?.onChange === "function") {
        node.props.attrs?.onChange(e);
      }
    };

    node.context.handlers.removeFile = (e: Event) => {
      if (e.target instanceof HTMLButtonElement) {
        const _id = e.target.dataset.id;
        if (
          Array.isArray(node.value) &&
          node.value.some((v) => v[idKey] === _id)
        ) {
          node.input(node.value.filter((v) => v[idKey] !== _id));
          node.store.remove(`filesUploadError_${_id}`);
        }
      }
    };

    node.context.fns.getPreviewUrl = (item: Record<string, string | File>) => {
      const src = item[srcKey];
      if (typeof src === "string") {
        return src;
      } else if (src instanceof File) {
        return URL.createObjectURL(src);
      }
    };

    node.context.fns.getKey = (
      item: Record<string, string | File>,
      key: string
    ) => {
      const keys: Record<string, string> = {
        id: idKey,
        name: nameKey,
        src: srcKey,
      };

      return item[keys[key]];
    };
  });
}
