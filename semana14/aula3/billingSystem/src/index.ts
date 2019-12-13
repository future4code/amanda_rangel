import {IndustrialClient} from "./industrialCLient";
import {ResidentialClient} from "./residentialClient";
import {ComercialClient} from "./comercialClient";
import {ClientManager} from "./ClientManager";

const myIndustry = new IndustrialClient("Daniel", 100, 500, "My Industry", "300", "30180190");
const yourIndustry = new IndustrialClient("Joao", 101, 800, "Your Industry", "301", "30441014");
const amanda = new ResidentialClient("Amanda", 102, 200, "Casa da Amanda", "03131114520", "30441014");
const brunna = new ResidentialClient("Brunna", 103, 150, "Casa da Brunna", "03232214621", "30551015");
const topStore = new ComercialClient("Brisa", 104, 300, "Top Store", "301", "30441014");
const bottomStore = new ComercialClient("Marcos", 105, 250, "Bottom Store", "40.401.444/0001", "307710147");
const clientManager = new ClientManager([]);

console.log(clientManager.getClientsQuantity());
clientManager.addClient(amanda);
console.log(clientManager.getClientsQuantity());
clientManager.addClient(topStore);
console.log(clientManager.getClientsQuantity());
clientManager.addClient(brunna);
console.log(clientManager.getClientsQuantity());
clientManager.addClient(bottomStore);
console.log(clientManager.getClientsQuantity());
clientManager.addClient(myIndustry);
console.log(clientManager.getClientsQuantity());
clientManager.addClient(yourIndustry);
console.log(clientManager.getClientsQuantity());
clientManager.printClientsBills(myIndustry);
clientManager.printClientsBills(yourIndustry);
clientManager.printClientsBills(amanda);
clientManager.printClientsBills(brunna);
clientManager.printClientsBills(topStore);
clientManager.printClientsBills(bottomStore);
console.log("Faturamento: R$", clientManager.calculateAllIncome([amanda, brunna, myIndustry, yourIndustry, topStore, bottomStore]));


// console.log(`O valor da conta de ${myIndustry.clientName} é: R$`, myIndustry.calculateBill());
// console.log(`O valor da conta de ${yourIndustry.clientName} é: R$`, yourIndustry.calculateBill());
// console.log(`O valor da conta de ${amanda.clientName} é: R$`, amanda.calculateBill());
// console.log(`O valor da conta de ${brunna.clientName} é: R$`, brunna.calculateBill());
// console.log(`O valor da conta de ${topStore.clientName} é: R$`, topStore.calculateBill());
// console.log(`O valor da conta de ${bottomStore.clientName} é: R$`, bottomStore.calculateBill());
