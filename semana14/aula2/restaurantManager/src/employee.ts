export abstract class Employee {
  protected name: string;
  protected salary: number;
  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary
  }
  abstract sayJob(): string
}