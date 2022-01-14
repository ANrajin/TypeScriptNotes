/**
 * Spread Operator
 *
 * ...Array / ...Object
 *
 */

const oldHobbies: string[] = ["Cooking", "Singing"];

//add old habits to new habbit array
const hobbies: string[] = ["Coding", "Photography", ...oldHobbies];
console.log(hobbies);

const Student = {
  name: "Rajin",
  age: "25",
  address: "Dhaka",
};

//add old student datas to new object
const updatedStd = {
  ...Student,
  phone: ["123654789", "987456321"],
  roll: "123",
};

console.log(updatedStd);

/**
 * Rest Parameters
 *
 * ...params
 */
const addingNumbers = (...num: number[]) => {
  return num.reduce((prev, curr) => {
    return prev + curr;
  });
};

console.log(`Sum of all numbers: ${addingNumbers(1, 52, 46, 12, 36)}`);

//using tuples with rest
const sumOfThreeNumbers = (...num: [number, number, number]) => {
  return num.reduce((prev, curr) => {
    return prev + curr;
  });
};

console.log(`Sum of three numbers: ${sumOfThreeNumbers(10, 20, 30)}`);

/**
 * Array Destructuring
 */
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1);
console.log(hobby2);
console.log(remainingHobbies);

/**
 * Object Destructuring
 *
 */
const { name: username, age, ...infos } = updatedStd;
console.log(username);
console.log(age);
console.log(infos);
