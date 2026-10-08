const test = require("node:test");
const assert = require("node:assert");
const { average, letterGrade } = require("../src/grades");

test("average of scores", () => {
  assert.strictEqual(average([80, 90, 100]), 90);
  assert.strictEqual(average([]), 0);
});

test("letter grade boundaries are inclusive", () => {
  assert.strictEqual(letterGrade(90), "A");
  assert.strictEqual(letterGrade(89.9), "B");
  assert.strictEqual(letterGrade(80), "B");
  assert.strictEqual(letterGrade(70), "C");
  assert.strictEqual(letterGrade(60), "D");
  assert.strictEqual(letterGrade(59), "F");
});
