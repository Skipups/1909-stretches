const { multiply } = require("./multiply");

describe("multiply testing", () => {
  test("it should ensure it receives two numbers", () => {
    // test some values that should fail

    expect(() => multiply("string", 2)).toThrow();

    expect(() => multiply(3, { 3: 1 })).toThrow("must be a number");
  });

  test("it returns the product of two numbers", () => {
    // test the type of the returned value
    expect(typeof multiply(2 * 1)).toBe("number");

    // test that the returned value is correct
    expect(multiply(2 * 3)).toBe(6);

    // test some other values
    expect(multiply(9 * 2)).toBe(18);
  });

  test("it is not hardcoded (hint: use random numbers)", () => {
    const num1 = Math.floor(math.random() * 11);
    const num2 = Math.floor(math.random() * 11);
    expect(multiply(num1, num2)).toBe(num1 * num2);
  });
});
