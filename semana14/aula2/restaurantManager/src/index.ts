import {Course} from "./course";
import {Dessert} from "./dessert";
import {Cashier} from "./cashier";
import {Dish} from "./dish";


export const menu: Course[] = [];

const brigadeiro = new Dessert(100, 20, ["leite condensado"], 100, 10);
const feijoada = new Dish( 100, 20, ["feijão"], 100);

const cashier = new Cashier('João', 2000);
console.log(cashier.calculateBill([brigadeiro, feijoada]));
