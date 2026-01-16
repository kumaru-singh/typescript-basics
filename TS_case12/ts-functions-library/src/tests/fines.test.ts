import { calculateFines } from "../fines/calculateFines";

test("calculate fines correctly", () => {
  expect(calculateFines(5, 10, 2.5)).toBe(17.5);
});
