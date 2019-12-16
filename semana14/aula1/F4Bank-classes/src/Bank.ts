import {UserAccount} from "./UserAccount";
import {JSONFileManager} from "./JSONFileManager";

export class Bank {
  accounts: UserAccount[];
  fileManager = new JSONFileManager('banksystem.json');

  constructor() {
    this.accounts = []
  }

   createAccount(name: string, cpf: string, age: number) : void {
      const newAccount = new UserAccount(name, age, cpf,0, []);
      this.accounts.push(newAccount);
      this.fileManager.saveToJSON(this.accounts);
  }
}

