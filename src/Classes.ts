/**
 * Class
 *
 * public, private, protected, readonly
 */
class Department {
  //   public id: number;
  //   private name: string;
  protected employees: string[] = [];
  constructor(private readonly id: number, public name: string) {
    // this.name = name;
    // this.id = id;
  }

  // explicitly defining the type for <this> keyword
  //So that it always point to this keyword
  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "3"; //compile time error as id is readonly property
    this.employees.push(employee);
  }

  print() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const dept = new Department(1, "Accounting");
dept.addEmployee("Rajin");
dept.addEmployee("Jhon");
dept.describe();
dept.print();

// const deptCopy = { name: "sample", describe: dept.describe };
// deptCopy.describe(); //undefined

/**
 * Inheritanse is ts
 */
class ITDepartment extends Department {
  admins: string[];
  constructor(id: number, name: string, ...admins: string[]) {
    super(id, name);
    this.admins = admins;
  }
}

class AccontingDept extends Department {
  constructor(id: number, name: string, private reports: string[]) {
    super(id, name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const itDept = new ITDepartment(2, "Web", "Admin1", "Admin2", "Admin3");
console.log(itDept);

const actDept = new AccontingDept(3, "Account", ["report"]);
console.log(actDept);

/**
 * Override properties and protected modifiers
 */
class NewDepartment extends Department {
  addEmployee(employee: string): void {
    if (employee == "Rajin") return;
    this.employees.push(employee);
  }
}

const newDept = new NewDepartment(5, "Hello");
newDept.addEmployee("Rahim");
newDept.print();
