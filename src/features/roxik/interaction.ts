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
      changeMotion(MotionType.TUBE);
      break;
    case "5":
      changeMotion(MotionType.WAVE);
      break;
    case "6":
      changeMotion(MotionType.GRAVITY);
      break;
    case "7":
      changeMotion(MotionType.ANTIGRAVITY);
      break;
    case "l":
    case "s":
      toggleLock();
      break;
  }
};

const pointerDownHandler = (event: PointerEvent | MouseEvent | TouchEvent) => {
  pauseCamera();
};

const pointerUpHandler = (event: PointerEvent | MouseEvent | TouchEvent) => {
  if (!lock) resumeCamera();
};

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("pointerdown", pointerDownHandler);
document.addEventListener("pointerup", pointerUpHandler);
document.addEventListener("pointerout", pointerUpHandler);
