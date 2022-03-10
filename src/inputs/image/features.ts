import { FormKitNode } from "@formkit/core";
import localize from "../../utils/localize";

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

export default function (node: FormKitNode): void {
  localize("noFiles", "No files")(node);
  localize("remove")(node);

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

    node.context.handlers.files = (e: Event) => {
      const files = [];

      if (e.target instanceof HTMLInputElement && e.target.files) {
        for (let i = 0; i < e.target.files.length; i++) {
          let file;

          if ((file = e.target.files.item(i))) {
            files.push({ name: file.name, src: file });
          }
        }

        if (
          Array.isArray(node.value) &&
          Object.hasOwnProperty.call(node.props.attrs, "multiple")
        ) {
          node.input([...files, ...node.value], false);
        } else {
          node.input(files);
        }
      }

      if (typeof node.props.attrs?.onChange === "function") {
        node.props.attrs?.onChange(e);
      }
    };

    node.context.handlers.removeFile = (e: Event) => {
      if (e.target instanceof HTMLButtonElement) {
        const index = Number(e.target.dataset.index);
        if (Array.isArray(node.value) && node.value[index]) {
          node.input(node.value.filter((_, i) => i !== index));
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
