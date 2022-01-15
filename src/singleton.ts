/**
 * Singletons and Private Constructor
 */
class FinanceDepartment {
  private static instance: FinanceDepartment;
  private constructor(private readonly id: number, public name: string) {}

  /**
   * Get single instance
   */
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new FinanceDepartment(20, "Rajin");
    return this.instance;
  }
}

const dept1 = FinanceDepartment.getInstance();
const dept2 = FinanceDepartment.getInstance();

console.log(dept1, dept2);
