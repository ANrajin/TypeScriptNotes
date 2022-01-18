/**
 * Index Properties
 *
 */
interface ErrorContainer {
  //key:value
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email",
  username: "Must start with a capital character",
};

interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["Hello", "World"];
console.log(arr[0]);
console.log(arr[1]);
