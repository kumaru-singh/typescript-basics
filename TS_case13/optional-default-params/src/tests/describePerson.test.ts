import { describePerson } from "../functions/describePerson";

describe("describePerson", () => {
  test("prints unknown age when not provided", () => {
    expect(describePerson("Eve")).toBe("Name: Eve, Age: Unknown");
  });

  test("prints age when provided", () => {
    expect(describePerson("Frank", 28)).toBe("Name: Frank, Age: 28");
  });
});
