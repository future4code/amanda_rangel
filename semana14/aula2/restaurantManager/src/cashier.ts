import {Employee} from "./employee";
import {Course} from "./course";

export class Cashier extends Employee {
  constructor(name: string, salary: number) {
    super(name, salary);
  }

  sayJob(): string {
    return "Caixa";
  }

  calculateBill(orders: Course[]): number {
    const orderPrice: number[] = orders.map((order: Course) => (order.price));
    return orderPrice.reduce((a, b): number => {
      return a + b
    })
  }
}
