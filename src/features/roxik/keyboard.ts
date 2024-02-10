import { MotionType } from "./types/MotionType.ts";
import { changeMotion } from "./motion";

const keydownHandler = (event: KeyboardEvent) => {
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
  }
};

document.addEventListener("keydown", keydownHandler);
