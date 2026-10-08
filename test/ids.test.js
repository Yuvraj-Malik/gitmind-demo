const test = require("node:test");
const assert = require("node:assert");
const ids = require("../src/ids");

test("order ids are sequential and zero-padded", () => {
  ids.reset();
  assert.strictEqual(ids.nextOrderId(), "ORD-0001");
  assert.strictEqual(ids.nextOrderId(), "ORD-0002");
});

test("reset restarts numbering", () => {
  ids.nextOrderId();
  ids.reset();
  assert.strictEqual(ids.nextOrderId(), "ORD-0001");
});
