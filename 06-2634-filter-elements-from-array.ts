// * https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
// * Basic Array Transformations

type FilterFn = (n: number, i: number) => any;

function filter(arr: number[], fn: FilterFn): number[] {
  const filteredArr: number[] = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
