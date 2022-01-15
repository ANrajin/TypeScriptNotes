/**
 * Intersection Types
 *
 * allow us to combine other types
 */
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type combinable = string | number;
type Numeric = number | boolean;

type universal = combinable & Numeric;

/**
 * Type Guards
 *
 * Type Guards help us to determine
 * if a certain function or property type exist
 * before we use it
 */
function addNumber(a: combinable, b: combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

type unknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: unknownEmployee) {
  console.log("Name: " + emp.name);

  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation({ name: "Rajin", startDate: new Date() });

/**
 * More example
 */
class Bus {
  drive() {
    console.log("Driving a bus");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck");
  }
}

type Vehicle = Bus | Truck;

const v1 = new Bus();
const v2 = new Truck();

function useVehicle(Vehicle: Vehicle) {
  Vehicle.drive();
}

useVehicle(v1);
useVehicle(v2);
