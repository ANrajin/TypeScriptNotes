/**
 * CORE DATATYPES
 *
 * Number   -> int, float, double, decimal
 * String   -> string, char
 * Array    -> string[], number[]
 * Object   -> {Name: "Rajin", age: 25}
 * Boolean  -> true, false
 * Tuples   -> [number, string, bool]
 * Enum     -> enum Names {RAJIN, KAMAL, JAMAL}
 * Any      -> any data type
 *
 */

// const add = (num1: number, num2: number) => {
//     if (typeof num1 == "number" && typeof num2 == "number")
//         return num1 + num2;
//     else
//         throw new Error("Incorrect type of parameter!");
// }

// const num1 = +"5";
// const num2 = 2.8;

// const result = add(num1, num2);

// console.log(result);

/**
 * Object Type
 */
const Person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Rajin",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

//defining Enum
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

//Without type define
const person = {
  name: "Rajin",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

//Adding new element in tuple
person.role = [3, "admin"]; //replace the existing value
Person.role.push("customer"); //add a new value

console.log(Person);
console.log(person);
console.log(Person.name);
console.log(person.age);

//defining an array explicitly
let fevouriteActivities: string[];

for (const hobby of person.hobbies) console.log(hobby.toUpperCase());
