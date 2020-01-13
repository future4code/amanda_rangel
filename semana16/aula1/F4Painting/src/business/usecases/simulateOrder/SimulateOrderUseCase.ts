import {Order} from "../../entities/Order";
import {OrderDatabase} from "../../../data/OrderDatabase"

export class SimulateOrderInteractor {
  private orderDatabase: OrderDatabase;

  constructor() {
    this.orderDatabase = new OrderDatabase()
  }

  async execute(simulateOrderInput: SimulateOrderInput): Promise<SimulateOrderOutput> {
    const newOrder = new Order(
        simulateOrderInput.orderDate,
        simulateOrderInput.userName,
        simulateOrderInput.userEmail,
        simulateOrderInput.image,
        simulateOrderInput.printSize,
        simulateOrderInput.printPaper,
        simulateOrderInput.frameColor,
        simulateOrderInput.frameType,
        simulateOrderInput.frameBorder);

    await this.orderDatabase.simulateOrder(newOrder);

    return
  }
}

export interface SimulateOrderInput {
  orderDate: Date,
  userName: string,
  userEmail: string,
  image: string,
  printSize: string,
  printPaper: string,
  frameColor: string,
  frameType: string,
  frameBorder: string
}

export interface SimulateOrderOutput {
  printPrice: string,
  framePrice: string,
  totalAmount: string
}
