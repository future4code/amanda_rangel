import {Transaction} from "./Transaction";


export class UserAccount {
  private name: string;
  private age: number;
  private cpf: string;
  private balance: number;
  private transactions: Transaction[];

  constructor(name: string, age: number, cpf: string, balance: number, transactions: Transaction[]) {
    this.name = name;
    this.age = age;
    this.cpf = cpf;
    this.balance = balance;
    this.transactions = transactions;
  }

  public getBalance(name: string,  cpf: string) {
    console.log(`O saldo do(a) cliente ${this.name} é R$${this.balance} `)
  }

  public addBalance(name: string, cpf: string, ammount: number) {
    console.log(`O valor de ${ammount} foi adicionado à conta`)
  }
}



