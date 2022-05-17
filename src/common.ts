// 弧度转角度
export function radToAngle(rad: number) {
  return (rad * 180) / Math.PI;
}

// 角度转弧度
export function angleToRad(angle: number) {
  return (angle * Math.PI) / 180;
}
