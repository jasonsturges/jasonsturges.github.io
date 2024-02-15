import { MotionType } from "./types/MotionType.ts";
import { changeMotion } from "./motion";
import { pauseCamera, resumeCamera } from "./camera.ts";

let lock = false;

const toggleLock = () => {
  lock ? resumeCamera() : pauseCamera();
  lock = !lock;
};

const keyDownHandler = (event: KeyboardEvent) => {
  const keyCode = event.key;

  switch (keyCode) {
    case "1":
      changeMotion(MotionType.CYLINDER);
      break;
    case "2":
      changeMotion(MotionType.SPHERE);
      break;
    case "3":
      changeMotion(MotionType.CUBE);
      break;
    case "4":
      changeMotion(MotionType.LINE);
      break;
    case "5":
      changeMotion(MotionType.PLANE);
      break;
    case "6":
      changeMotion(MotionType.GRAVITY);
      break;
    case "7":
      changeMotion(MotionType.ANTIGRAVITY);
      break;
    case "f":
      if (!!document.fullscreenElement) void document.exitFullscreen();
      else document.querySelector<HTMLBodyElement>("body")?.requestFullscreen();
      break;
    case "l":
    case "s":
      toggleLock();
      break;
  }
};

const pointerDownHandler = () => {
  pauseCamera();
};

const pointerUpHandler = () => {
  if (!lock) resumeCamera();
};

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("pointerdown", pointerDownHandler);
document.addEventListener("pointerup", pointerUpHandler);
document.addEventListener("pointerout", pointerUpHandler);
