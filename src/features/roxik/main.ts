import { MotionType } from "./types/MotionType.ts";
import { changeMotion } from "./motion.ts";
import { resize } from "./resize.ts";
import "./keyboard.ts";

changeMotion(MotionType.CUBE);
resize();
