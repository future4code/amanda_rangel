const fs = require('fs');
const fileName = process.argv[2];
const task1 =  'fazer mala';
const task2 = 'estudar';
const task3 = process.argv[3];

try {
  fs.writeFileSync(fileName, task1 + "\n" + task2 + "\n");
  console.log('\x1b[33m', 'Arquivo criado com sucesso!');
  fs.appendFileSync(fileName, task3 + "\n", 'utf8');
  console.log('\x1b[31m', "Tarefa adicionada com sucesso!");
} catch (e) {
  console.log(e)
}

