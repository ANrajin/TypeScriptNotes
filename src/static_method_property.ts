/**
 * static Method & Properties
 *
 */
class DepartmentTwo {
  static fiscalYear: number = 2022;

  static createEmployee(name: string) {
    return { name: name };
  }
}

const employee1 = DepartmentTwo.createEmployee("Rajin");
console.log(employee1);
console.log(DepartmentTwo.fiscalYear);
