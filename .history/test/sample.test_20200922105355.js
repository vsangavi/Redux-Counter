const sampletest = require("../src/Files/sampletest.cjs");
var assert = require("chai").assert;

describe("Checking the result", () => {
  it("Should return true if the number is divisible by 2", () => {
    assert.equal(sampletest.checkNumber(1), true);
  });
});
