const test = require("node:test");
const assert = require("node:assert");
const { slugify, truncate } = require("../src/text");

test("slugify makes URL-safe lowercase slugs", () => {
  assert.strictEqual(slugify("Hello World! 2026"), "hello-world-2026");
  assert.strictEqual(slugify("  Software Engineering: UCS503  "), "software-engineering-ucs503");
});

test("truncate keeps short text and shortens long text", () => {
  assert.strictEqual(truncate("short", 10), "short");
  assert.strictEqual(truncate("abcdefghij", 5), "abcd…");
});
