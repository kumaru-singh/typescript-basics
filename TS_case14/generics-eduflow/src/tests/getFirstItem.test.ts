import { getFirstItem } from "../utils/getFirstItem";

describe("getFirstItem<T>", () => {
  test("returns first element", () => {
    expect(getFirstItem([1, 2, 3])).toBe(1);
  });

  test("returns undefined for empty array", () => {
    expect(getFirstItem([])).toBeUndefined();
  });
});
