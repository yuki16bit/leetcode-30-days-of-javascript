// * https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript
// * Closure

function createCounter(n: number): () => number {
  let prev = 0
  return function() {
    const result = n + prev;
    prev += 1;
    return result;
  }
}