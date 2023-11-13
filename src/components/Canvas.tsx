"use client";

import { useEffect, useRef } from "react";
import { useClientSize } from "@/hooks/useClientSize";

interface Props {
  width?: number | string;
  height?: number | string;
  canvas?: HTMLCanvasElement;
  resizeHandler?: (width: number, height: number) => void;
}

export const Canvas = ({
  width = "100vw",
  height = "100vh",
  canvas,
  resizeHandler,
}: Props) => {
  const container = useRef<HTMLCanvasElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const { width: clientWidth, height: clientHeight } = useClientSize(divRef);

  useEffect(() => {
    if (!canvas || !container || !container.current) return;
    container.current.replaceWith(canvas);
  }, [canvas, container]);

  useEffect(() => {
    resizeHandler?.(clientWidth, clientHeight);
  }, [clientWidth, clientHeight, resizeHandler]);

  return (
    <>
      <div ref={divRef} style={{ width: width, height: height }}>
        <canvas ref={container} />
      </div>
    </>
  );
};
