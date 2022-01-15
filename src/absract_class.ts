/**
 * Abstract class
 *
 */
abstract class DepartmentThree {
  constructor(public id: number, public name: string) {}

  abstract describe(this: DepartmentThree): void;
}

class MarketingDept extends DepartmentThree {
  constructor(id: number, name: string) {
    super(id, name);
  }
  describe(this: DepartmentThree): void {
    console.log("Department name: " + this.id);
  }
}
