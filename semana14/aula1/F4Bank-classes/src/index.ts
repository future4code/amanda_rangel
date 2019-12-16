import {UserAccount} from "./UserAccount";
import {Bank} from "./Bank";
import {JSONFileManager} from "./JSONFileManager";

const userAccount1: UserAccount = new UserAccount('Amanda Rangel', 32, '07268871619', 0, []);
const userAccount2: UserAccount = new UserAccount('Bernardo Rangel', 32, '07638910613', 50, []);

// userAccount1.getBalance('Amanda Rangel', '07268871619');
// userAccount2.getBalance('Bernardo Rangel', '07638910613');
// userAccount1.addBalance('Bernardo Rangel', '07638910613', 100);


const bank = new Bank();
bank.createAccount('Amanda Rangel', '07268871619', 32);
bank.createAccount('Bernardo Mendonça', '07638910613', 32);