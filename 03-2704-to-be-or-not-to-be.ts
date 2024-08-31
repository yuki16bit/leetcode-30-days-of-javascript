// * https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript
// * Closure

type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  return {
    toBe: (testCase) => {
      if (testCase === val) return true;
      throw new Error('Not Equal');
    },
    notToBe: (testCase) => {
      if (testCase !== val) return true;
      throw new Error('Equal');
    },
  };
}
