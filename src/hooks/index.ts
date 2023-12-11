import { useEffect, RefObject } from "react";
export function useOnClickOutside(
  ref: RefObject<HTMLElement>,
  handler: (target: HTMLElement) => void
) {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref.current) return;
      // Do nothing if clicking ref's element or descendent elements
      const target: any = event.target;
      if (!ref.current || ref.current.contains(target)) {
        return;
      }
      handler(target);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);
}
