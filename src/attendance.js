const MIN_ATTENDANCE = 75; // percent required to sit the end-semester exam

/** Attendance percentage rounded to 1 decimal. No classes held -> 100. */
function attendancePercent(present, total) {
  if (total === 0) return 100;
  return Math.round((present / total) * 1000) / 10;
}

/** A student is eligible with attendance of at least MIN_ATTENDANCE percent. */
function isEligible(present, total) {
  return attendancePercent(present, total) >= MIN_ATTENDANCE;
}

module.exports = { attendancePercent, isEligible, MIN_ATTENDANCE };
