import { cutNumber } from "../numberUtil";

test("cutNumber: #1", () => {
  expect(cutNumber(22.223, 2, false)).toBe(22.22);
});

test("cutNumber: #2", () => {
  expect(cutNumber(22.226, 2, true)).toBe(22.23);
});
