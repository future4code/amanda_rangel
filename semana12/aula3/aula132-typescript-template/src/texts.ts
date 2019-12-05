import { readFile } from 'fs';
import ErrnoException = NodeJS.ErrnoException;

const path = require("path");
const fs = require('fs');

const directoryPath = "/home/amanda/Desktop/ProjetosF4/amanda_rangel/semana12/aula3/aula132-typescript-template/textos/";

  const getFiles = (path: string) => {
    return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, (err:ErrnoException | null , files: string[]) => {
      if(err) {
        console.log("Erro ao acessar informações do diretório.");
        reject(err);
        return;
      }  resolve(files)
    })
  });
};

const readFiles = (file: string, directoryPath: string) => {
return new Promise((resolve, reject) => {
  fs.readFile(`${directoryPath}${file}`, 'utf8', (err: ErrnoException | null, data: Buffer) => {
    if(err) {
      reject(err);
      return;
    }
    const fileContent = data.toString();
    resolve(fileContent)
  });
});
};

const allFiles = getFiles(directoryPath);

allFiles.then((resolve: string[]) => {
  const eachFile = resolve.map(file => readFiles(file, directoryPath));
  const allTexts = Promise.all(eachFile);
  allTexts.then((values) => {
    console.log("Conteúdo do arquivo", values.join(""))
  }).catch(e => {
    console.error("Erro ao ler o arquivo", e)
  })
});




