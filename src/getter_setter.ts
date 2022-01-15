/**
 * Getter & Setter
 */
class Dept {
  private lastReport: string;
  constructor(
    private id: number,
    public name: string,
    private reports: string[]
  ) {
    this.lastReport = reports[0];
  }

  /**
   * use <get> keyword to set getter property
   * getter must return somthing
   */
  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;

    throw new Error("No report found");
  }

  /**
   * use <set> keyword to set a setter method
   */
  set mostRecentReport(value: string) {
    if (!value) throw new Error("Please pass in a string value");
    this.lastReport = value;
  }

  describe(this: Dept) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}

const department = new Dept(1, "Marketing", []);
department.describe();
department.mostRecentReport = "Hello World";
console.log(department.mostRecentReport);
