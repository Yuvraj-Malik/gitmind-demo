/** Sequential order ids: ORD-0001, ORD-0002, ... */
let counter = 0;

function nextOrderId() {
  counter += 1;
  return `ORD-${String(counter).padStart(4, "0")}`;
}

module.exports = { nextOrderId };
