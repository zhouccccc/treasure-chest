import { isPlainObject } from "lodash";

export function isEmptyPlainObject(obj: Object) {
  return isPlainObject(obj) && Object.keys(obj).length === 0;
}
