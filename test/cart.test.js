const test = require("node:test");
const assert = require("node:assert");
const { calculateTotal, applyDiscount } = require("../src/cart");

test("calculateTotal sums price x quantity", () => {
  const items = [
    { name: "Notebook", price: 45, qty: 2 },
    { name: "Pen", price: 10.5, qty: 3 },
  ];
  assert.strictEqual(calculateTotal(items), 121.5);
});

test("calculateTotal of an empty cart is 0", () => {
  assert.strictEqual(calculateTotal([]), 0);
});

test("applyDiscount reduces the total", () => {
  assert.strictEqual(applyDiscount(200, 10), 180);
  assert.strictEqual(applyDiscount(99.99, 0), 99.99);
});

test("applyDiscount rejects invalid percentages", () => {
  assert.throws(() => applyDiscount(100, 120), RangeError);
});
