import {Order} from "../../entities/Order";

export class CalculatePriceInteractor {
  private orderDatabase: OrderDatabase;

  constructor() {
    this.orderDatabase = new OrderDatabase()
  }

  async execute(calculatePriceInput: CalculatePriceInput): Promise<CalculatePriceOutput> {
    const newOrder = new Order(
        calculatePriceInput.id,
        calculatePriceInput.orderDate,
        calculatePriceInput.userName,
        calculatePriceInput.userEmail,
        calculatePriceInput.image,
        calculatePriceInput.printSize,
        calculatePriceInput.printPaper,
        calculatePriceInput.frameColor,
        calculatePriceInput.frameType,
        calculatePriceInput.frameBorder);

    await this.orderDatabase.calculatePrice(newOrder);

    return
  }
}

export interface CalculatePriceInput {
  printSize: string,
  printPaper: string,
  frameColor: string,
  frameType: string,
  frameBorder: string
}

export interface CalculatePriceOutput {
 price: string
}
