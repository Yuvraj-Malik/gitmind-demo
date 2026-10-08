/** Sequential order ids: ORD-0001, ORD-0002, ... */
let counter = 0;

function nextOrderId() {
  counter += 1;
  return `ORD-${String(counter).padStart(4, "0")}`;
}

/** Restart numbering (used at the start of each day and in tests). */
function reset() {
  counter = 0;
}

module.exports = { nextOrderId, reset };
