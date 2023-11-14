"use client";

import { useEffect, useRef } from "react";

export const useKeyDown = (
  keyId: string,
  callback: (element: HTMLDivElement) => void
) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleUseKeydown = (event: KeyboardEvent) => {
      if (ref.current && event.key === keyId) {
        if (callback) callback(ref.current);
      }
    };

    window.addEventListener("keydown", handleUseKeydown);

    return () => {
      window.removeEventListener("keydown", handleUseKeydown);
    };
  }, []);

  return ref;
};
