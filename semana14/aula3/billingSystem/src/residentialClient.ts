import {Residence} from "./residence";
import {Client} from "./client";

export class ResidentialClient extends Residence implements Client {
  constructor(public clientName: string, public clientNumber: number, public consumedEnergy: number, resName: string, cpf: string, cep: string){
  super(resName, cpf, cep);
  }
  calculateBill(): number {
    return this.consumedEnergy * 0.75
   }
}