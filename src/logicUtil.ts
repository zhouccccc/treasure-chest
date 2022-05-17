export function isNull(value: any) {
  return value === null || value === undefined;
}

export function isStrictNull(value: any) {
  return isNull(value) || value === "";
}
