/**
 * function overloads
 *
 * Same name function but different type params
 */
type combinableParam = string | number;

function multiply(num1: string, num2: string): string;
function multiply(num1: number, num2: number): number;
function multiply(num1: combinableParam, num2: combinableParam) {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return num1.toString() + " " + num2.toString();
  }
  return num1 * num2;
}

console.log(multiply("hello", "world"));
console.log(multiply(7, 5));
