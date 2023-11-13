"use client";

import { RefObject, useCallback, useEffect, useState } from "react";

export const useClientSize = (ref: RefObject<HTMLDivElement>) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = useCallback(() => {
    if (ref?.current) {
      setWidth(ref.current.clientWidth);
      setHeight(ref.current.clientHeight);
    }
  }, [ref]);

  // Initial size
  useEffect(() => {
    handleResize();
  }, [handleResize]);

  // Update on resize
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return {
    width: width,
    height: height,
  };
};
