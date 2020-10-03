//import sampletest from "../src/Files/sampletest.js";
const sampletest = require("../src/Files/sampletest.js");
var assert = require("chai").assert;

describe("Checking the result", () => {
  it("Should return true if the number is divisible by 2", () => {
    let storeVar = sampletest.numFormatter(10000);
    console.log(storeVar);
    assert.equal(storeVar, "100");
  });
});
