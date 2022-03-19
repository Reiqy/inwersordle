import { testingFunction } from "../src/Example";

describe("testingFunction", () => {
  it("returns 5 when given 5", () => {
    expect(testingFunction(5)).toBe(5);
  });

  it("returns 6 when given 6", () => {
    expect(testingFunction(6)).toBe(6);
  });
});

test("1 + 2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});
