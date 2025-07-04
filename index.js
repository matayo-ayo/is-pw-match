/**
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @param {object} [options] - Configuration
 * @param {boolean} [options.caseSensitive=false] - Case sensitive comparison
 * @param {number} [options.minLength=0] - Minimum length to consider
 * @returns {number} Percentage match (0-100)
 */
function matchPercent(str1, str2, options = {}) {
  const { caseSensitive = false, minLength = 0 } = options;

  if (typeof str1 !== "string" || typeof str2 !== "string") return 0;
  if (str1.length < minLength || str2.length < minLength) return 0;

  const s1 = caseSensitive ? str1 : str1.toLowerCase();
  const s2 = caseSensitive ? str2 : str2.toLowerCase();

  if (s1 === s2) return 100;

  const distance = getLevenshteinDistance(s1, s2);
  const maxLen = Math.max(s1.length, s2.length);
  return Math.round((1 - distance / maxLen) * 100);
}

/**
 * Calculate Levenshtein distance between two strings
 * @param {string} a - First string
 * @param {string} b - Second string
 * @returns {number} Distance between strings
 */
function getLevenshteinDistance(a, b) {
  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const matrix = Array(b.length + 1)
    .fill(null)
    .map(() => Array(a.length + 1).fill(null));

  for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
  for (let j = 0; j <= b.length; j++) matrix[j][0] = j;

  for (let j = 1; j <= b.length; j++) {
    for (let i = 1; i <= a.length; i++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1,
        matrix[j - 1][i] + 1,
        matrix[j - 1][i - 1] + cost
      );
    }
  }

  return matrix[b.length][a.length];
}

module.exports = {
  matchPercent,
  getLevenshteinDistance,
  // React component is exported separately in react.js
};
