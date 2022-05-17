import { isEmptyArray, isSubArray } from "../arrayUtil";

test("Is Empty Array: true", () => {
  expect(isEmptyArray([])).toBe(true);
});

test("Is Empty Array: false", () => {
  expect(isEmptyArray([1])).toBe(false);
});

test("Is Sub Array: true", () => {
  expect(isSubArray([1, 2], [1, 2, 3])).toBe(true);
});

test("Is Sub Array: false #1", () => {
  expect(isSubArray([1, 4], [1, 2, 3])).toBe(false);
});

test("Is Sub Array: false #2", () => {
  expect(isSubArray([1, 4], [1])).toBe(false);
});
