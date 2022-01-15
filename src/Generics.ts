/**
 * Generics
 *
 *
 */
const names: Array<any> = [];

// //promise type
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

function merge<T, U>(objA: T, objB: U) {
  return [objA, objB];
}

const mergedObject = merge({ name: "Rajin" }, { age: 25 });

console.log(mergedObject);

console.log(typeof mergedObject);

const x = merge<string, number>("Nashid", 30);
console.log(x);

/**
 * Adding constraints in Generic types
 *
 * force the type to be a specific type
 */

interface Std {
  name: string;
  age: number;
}

function mergeOne<T extends Std>(objA: T) {
  //returning tuple
  return [typeof objA, objA.name, objA.age];
}

// const y = mergeOne(2); //Error
// const y = mergeOne("Hello");// Error
const y = mergeOne({ name: "rajin", age: 25 });
console.log(y);

/**
 * Keyof constraint
 */
function extractAndConvert<T extends object, U extends keyof T>(
  obj1: T,
  key: U
) {
  return obj1[key];
}

console.log(extractAndConvert({ name: "Rajin" }, "name"));

/**
 * Generic Classes
 */
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    //if item not find return
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("rajin");
textStorage.addItem("Max");
textStorage.addItem("jhon");

console.log(textStorage.getItems());
textStorage.removeItem("Max");
console.log(textStorage.getItems());

/**
 * Generic Utility Types
 *
 * Partial<T>
 * Readonly<T> : readonly generic type
 */
