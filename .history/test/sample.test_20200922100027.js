var assert = require("chai").assert;
import sampletest from "../src/Files/sampletest.mjs";
describe("Checking the result", () => {
  it("Should return true if the number is divisible by 2", () => {
    assert.equal(sampletest(10), true);
  });
});
