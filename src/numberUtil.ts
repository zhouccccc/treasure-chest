export function toInt(param: Array<string>) {
  if (!Array.isArray(param)) {
    return parseInt(param);
  }
  return param.map((i) => parseInt(i));
}

export function cutNumber(
  param: number,
  no: number = 2,
  round: boolean = false
) {
  if (round) {
    return Math.round(param * 10 ** no) / 10 ** no;
  } else {
    return Math.floor(param * 10 ** no) / 10 ** no;
  }
}
