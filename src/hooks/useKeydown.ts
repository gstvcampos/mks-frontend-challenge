"use client";

import { useEffect, useRef } from "react";

export const useKeyDown = (keyId: string, callback: (element: HTMLDivElement) => void) => {
    const ref = useRef(null);

  useEffect(() => {
    const handleUseKeydowm = (event: KeyboardEvent) => {
      if (ref.current && event.key === keyId) {
        if (callback) callback(ref.current);
      }
    };

    window.addEventListener("keydown", handleUseKeydowm);

    return () => {
      window.removeEventListener("keydown", handleUseKeydowm);
    };
  }, []);

  return ref;
};
