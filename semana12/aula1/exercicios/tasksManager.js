const fs = require('fs');
const fileName = process.argv[2];
const task1 = 'fazer mala /nestudar'
// const task3 = `\n${process.argv[5]}`;

try {
  fs.writeFileSync(fileName, task1);
  console.log("Arquivo criado com sucesso!");
  // fs.appendFileSync(fileName, task2, 'utf8');
  // console.log("Tarefa adicionada com sucesso!");
} catch (e) {
  console.log(e)
}