/**
 * Shopping cart helpers for the campus store.
 * items: [{ name, price, qty }]
 */
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].qty;
  }
  return Math.round(total * 100) / 100;
}

/** Apply a percentage discount (0-100) to a total. */
function applyDiscount(total, percent) {
  if (percent < 0 || percent > 100) throw new RangeError("percent must be between 0 and 100");
  return Math.round(total * (1 + percent / 100) * 100) / 100;
}

module.exports = { calculateTotal, applyDiscount };
