// * https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
// * Basic Array Transformations

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const newArr: number[] = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
}
