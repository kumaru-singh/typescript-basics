import { displayMember } from "../members/displayMember";
import { calculateFines } from "../fines/calculateFines";
import { membershipFee } from "../fees/membershipFee";

describe("Library Functions", () => {
  it("displayMember handles optional email", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    displayMember(1, "Alice");
    expect(consoleSpy).toHaveBeenCalledWith("ID: 1, Name: Alice");
    consoleSpy.mockRestore();
  });

  it("calculateFines sums fines correctly", () => {
    expect(calculateFines(5, 10, 2.5)).toBe(17.5);
  });

  it("membershipFee applies discount correctly", () => {
    expect(membershipFee(100)).toBe(90);
    expect(membershipFee(100, 0.2)).toBe(80);
  });
});
