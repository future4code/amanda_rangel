import { Course } from "./course";

export class Dish extends Course {
  constructor(
    price: number,
    cost: number,
    ingredients: string[],
    timeToCook: number
  ) {
    super(price, cost, ingredients, timeToCook);
  }

  public cook(): void {
    console.log("Starting Salty Course")
  }
}

export const feijoada = new Dish(100, 20, ["leite condensado"], 100);
// console.log(feijoada.getProfit());
