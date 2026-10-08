/** Average of a list of scores, rounded to 2 decimals. Empty list -> 0. */
function average(scores) {
  if (scores.length === 0) return 0;
  const sum = scores.reduce((acc, s) => acc + s, 0);
  return Math.round((sum / scores.length) * 100) / 100;
}

/** Letter grade: 90+ A, 80+ B, 70+ C, 60+ D, otherwise F. Boundaries are inclusive. */
function letterGrade(score) {
  if (score > 90) return "A";
  if (score > 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

module.exports = { average, letterGrade };
