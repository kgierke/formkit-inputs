export const isBrowser = typeof window !== "undefined";

/**
 * Remove the data-file-hover attribute from the target.
 * @param e - Event
 */
export function removeHover(e: Event) {
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
export function preventStrayDrop(type: string, e: Event) {
  if (!(e.target instanceof HTMLInputElement)) {
    e.preventDefault();
  } else if (type === "dragover") {
    e.target.setAttribute("data-file-hover", "true");
  }
  if (type === "drop") {
    removeHover(e);
  }
}
