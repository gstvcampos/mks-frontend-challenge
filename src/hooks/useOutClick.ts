import { useEffect, useRef } from "react";

export const useOutClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutclick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        if (callback) callback();
      }
    };

    window.addEventListener("mousedown", handleOutclick);

    return () => {
      window.removeEventListener("mousedown", handleOutclick);
    };
  }, []);

  return ref;
};
