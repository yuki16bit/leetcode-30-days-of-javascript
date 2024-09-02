// * https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript
// * Basic Array Transformations

type ReduceFn = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: ReduceFn, init: number): number {
  let result = init;
  for (let i = 0; i < nums.length; i += 1) {
    result = fn(result, nums[i]);
  }
  return result;
}
