// * https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
// * Closure

// * Arrow function
const createHelloWorld = (...args) => () => "Hello World";

// * Function
// function createHelloWorld() {
//   return function(...args): string {
//       return "Hello World";
//   };
// };