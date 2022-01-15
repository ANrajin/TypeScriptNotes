/**
 * interface (a pure ts feature)
 *
 *optional property and perameters
 * use <?> mark to define a optional property or parameter
 */

interface engine {
  //optional property
  readonly enginename?: string;
}

/**
 * we can also create an interface extending from another one
 */
interface vehicle extends engine {
  readonly name: string;
  speed: string;

  start(phrase: string): void;
}

/**
 * interface as variable signature
 */
let car: vehicle;

car = {
  enginename: "engine",
  name: "Toyota Alion",
  speed: "1500cc",

  start(phrase: string) {
    console.log(phrase);
  },
};

car.start("Car started");

/**
 * interface in a class
 *
 * class <className> implements <interface>, <interface>, <interface>
 */
class bike implements vehicle {
  readonly enginename?: string;
  readonly name: string;
  speed: string;

  constructor(enginename: string, name: string, speed: string) {
    this.enginename = enginename;
    this.name = name;
    this.speed = speed;
  }

  start(phrase: string): void {
    console.log(`${this.name} ${phrase}`);
  }
}

let suzuki = new bike("sample engine", "Suzuki", "200cc");
// suzuki.name = "Yamaha";
suzuki.start("Bike started");

/**
 * Interface as function type
 *
 * we can use interface to declear a function signature
 */
interface addFn {
  //an annonymous method as signature
  (a: number, b: number): number;
}

let sum: addFn = (n1: number, n2: number) => {
  return n1 + n2;
};

console.log(sum(15, 20));
