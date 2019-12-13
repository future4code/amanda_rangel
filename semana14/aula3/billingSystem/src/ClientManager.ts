import {Client} from "./client";

export class ClientManager {
  clients: Client[] = [];
  constructor(clients: Client[]) {
    this.clients = []
  }

  addClient(client: Client):void {
    this.clients.push(client);
  }

  getClientsQuantity(): number {
    return this.clients.length
  }

  printClientsBills(client: Client): any {
    console.log(`${client.clientNumber}`, `${client.clientName}`, "R$", `${client.calculateBill()}`)
  }

  calculateAllIncome(clients: Client[]): number {
    const eachClient: number[] = this.clients.map((oneClient: Client) => oneClient.calculateBill());
    return eachClient.reduce((a, b): number => {
      return a + b
    })
  }

}