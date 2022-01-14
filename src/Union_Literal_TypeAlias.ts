/**
 * Union Types
 */
function combine(input1: number | string, input2: string | number) {
  if (typeof input1 === "number" && typeof input2 === "number")
    return input1 + input2;
  else return input1.toString() + input2.toString();
}

const combineAges = combine(30, 30);
console.log(combineAges);

const combineNames = combine("Hello", "World");
console.log(combineNames);

/**
 * Literal Type
 */
function Print(param: "as-number" | "as-text") {
  if (param === "as-number") console.log(1);
  else console.log("foo");
}

/**
 * Type Alias
 */
type Human = {
  name: string;
  speaks: boolean;
};

interface Dog {
  name: string;
  barks: boolean;
}

type HumanAndDog = Human & Dog;

let humanAndDog: HumanAndDog = {
  name: "Jack",
  barks: false,
  speaks: false,
};

console.log(humanAndDog);
