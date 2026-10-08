/** "Hello World! 2026" -> "hello-world-2026" */
function slugify(title) {
  return String(title)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Shorten text to at most `max` characters, ending with an ellipsis when cut. */
function truncate(text, max) {
  if (text.length <= max) return text;
  return text.slice(0, max - 1) + "…";
}

module.exports = { slugify, truncate };
