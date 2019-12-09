import {UserAccount} from "./UserAccount";
import {JSONFileManager} from "./JSONFileManager";

export class Bank {
  accounts: UserAccount[];
  fileManager: JSONFileManager;

  // constructor(accounts: UserAccount[], fileManager: JSONFileManager) {
  //
  // }

   async createAccount(account: UserAccount) {
    const bankFileManager = new JSONFileManager('banksystem.json');
    this.accounts = await bankFileManager.getJSONContent();
    if ( this.accounts.length === 0) {
      this.accounts.push(account);
      await bankFileManager.saveToJSON(this.accounts);
    }
  }
}

