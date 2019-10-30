const { multiply } = require("./multiply");

describe("multiply testing", () => {
  test("it should ensure it receives two numbers", () => {
    // test some values that should fail

    expect(() => multiply(num1, num2)).toThrow();

    expect(() => multiply(a, 2)).toThrow("must be a number");
  });

  test("it returns the product of two numbers", () => {
    // test the type of the returned value
    expect(2 * 3).toBe(6);

    // test that the returned value is correct
    expect(2 * 3).toBe(6);

    // test some other values
    expect(2 * 2).toBe(4);
  });

  test("it is not hardcoded (hint: use random numbers)", () => {
    Math.random;
  });
});
