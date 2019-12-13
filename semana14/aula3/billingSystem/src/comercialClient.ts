import {Trade} from "./trade";
import {Client} from "./client";

export class ComercialClient extends Trade implements Client {
  constructor(public clientName: string, public clientNumber: number, public consumedEnergy: number, businessName: string, cnpj: string, cep: string ) {
    super(businessName, cnpj, cep);
  }

  calculateBill(): number {
    return this.consumedEnergy * 0.53
  }
}