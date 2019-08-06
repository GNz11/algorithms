/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix.length || !matrix[0].length) {
    return 0;
  }
  const m = matrix.length;
  const n = matrix[0].length;
  let dp = new Array(n).fill(0);
  for (let j = 0; j < n; j++) {
    dp[j] = matrix[0][j] === '1' ? 1 : 0;
  }
  let max = Math.max(...dp);
  for (let i = 1; i < m; i++) {
    const next = new Array(n).fill(0);
    next[0] = matrix[i][0] === '1' ? 1 : 0;
    for (let j = 1; j < n; j++) {
      next[j] = matrix[i][j] === '1' ? Math.min(next[j - 1], dp[j], dp[j - 1]) + 1 : 0;
    }
    dp = next;
    max = Math.max(max, ...dp);
  }
  return max ** 2;
};
