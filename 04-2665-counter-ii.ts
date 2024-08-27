// * https://leetcode.com/problems/counter-ii/description/?envType=study-plan-v2&envId=30-days-of-javascript
// * Closure

type Counter = {
  increment: () => number,
  decrement: () => number,
  reset: () => number,
}

function createCounterII(init: number): Counter {
  let cur = init;
  return {
    increment: () => ++cur,
    decrement: () => --cur,
    reset: () => cur = init
  };
};