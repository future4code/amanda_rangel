const fs = require('fs');
const fileName = process.argv[2];
const task1 =  'fazer mala';
const task2 = 'estudar';
const task3 = process.argv[3];

try {
  fs.writeFileSync(fileName, task1 + "\n" + task2);
  console.log("Arquivo criado com sucesso!");
  fs.appendFileSync(fileName, "\n" + task3, 'utf8');
  console.log("Tarefa adicionada com sucesso!");
} catch (e) {
  console.log(e)
}