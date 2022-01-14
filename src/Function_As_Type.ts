/**
 * Function As Type
 *
 * help us to assign a function into a varible
 * and add function signature
 *
 * similar to C-Sharp Delegate feature
 */

let combineValues: (a: number, b: number) => number;

const add = (a: number, b: number): number => {
  return a + b;
};

const printResult = (): void => {
  console.log("Hello");
};

combineValues = add;
// combineValues = printResult; //Error

console.log(combineValues(6, 8));

/**
 * Using call back function
 * as a function param
 */
const addAndHandle = (a: number, b: number, callBack: (c: number) => void) => {
  const result = a + b;
  callBack(result);
};

addAndHandle(6, 12, (res) => {
  console.log(`Callback result: ${res}`);
});
