export function isEmptyArray(arr: any) {
  return Array.isArray(arr) && arr.length === 0;
}

export function isSubArray(target: Array<any>, base: Array<any>) {
  const gate = [];
  for (const targetElement of target) {
    gate.push(base.includes(targetElement) ? 1 : 0);
  }
  const validate = new Set(gate);
  return validate.size === 1 && validate.has(1);
}

export function dropWhile(array: Array<any>, predicate: Function) {
  const result = [];
  for (const arrayElement of array) {
    if (!predicate(arrayElement)) {
      result.push(arrayElement);
    }
  }
  return result;
}
