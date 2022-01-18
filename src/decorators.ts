/**
 * Decorator
 * A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression,
 * where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.
 *
 * <@DecoratorName>
 *
 * Decorator executes when js find class defination where it is used
 *
 * decorator can created for Class, Property, Method, Parameter
 *
 * target: es6
 * enable <experimentalDecorators> to true in tsconfig.json file
 */

function Logger(logString: string) {
  //decorator factory
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

//dynamically render html in dom
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    console.log("rendering template");

    const hookedElem = document.getElementById(hookId);
    const p = new constructor();
    if (hookedElem) {
      hookedElem.innerHTML = template;
      //   hookedElem.querySelector("h1")!.textContent = p.name;
    }
  };
}

//we can use multiple decorator as well
//the decorator executes bottom to up...
@Logger("Logging - NewPerson") //decorator
@WithTemplate("<h1>My Person Object</h1>", "app")
class NewPerson {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
  }
}

/**
 * @property decorator
 *
 * for property, a decorator accept two params
 */
function Log(target: any, propertyName: string) {
  console.log("Property decorator");
  console.log(propertyName, target);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  //assigning decorator in an Accessor
  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price - should be positive");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  //assigning decorator to a method
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}
