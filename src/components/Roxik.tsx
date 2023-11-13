"use client";

import { useScene } from "@/hooks/useScene";
import { Canvas } from "@/components/Canvas";

export const Roxik = () => {
  const { canvas, resizeHandler } = useScene();

  return (
    <>
      <Canvas
        canvas={canvas}
        width="100vw"
        height="100vh"
        resizeHandler={resizeHandler}
      />
    </>
  );
};
