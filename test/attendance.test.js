const test = require("node:test");
const assert = require("node:assert");
const { attendancePercent, isEligible } = require("../src/attendance");

test("attendance percentage", () => {
  assert.strictEqual(attendancePercent(30, 40), 75);
  assert.strictEqual(attendancePercent(0, 0), 100);
});

test("exactly 75% attendance is eligible", () => {
  assert.strictEqual(isEligible(30, 40), true);
  assert.strictEqual(isEligible(29, 40), false);
});
