import * as fs from "fs";

export class JSONFileManager {
  private fileName: string;

  constructor(fileName: string){
    this.fileName = fileName;
  }
  writeObjetcToFile(objectToSave: object){
    fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 4));
  }
  getObjectFromFile() {
    return JSON.parse(fs.readFileSync(this.fileName).toString());
  }
}

export class f4JSONFileManager extends JSONFileManager {
  writeDataToFile(objectToSave: object) {
    let allData: object[] = [];
    try {
      allData = this.getObjectFromFile();

    } catch (err) {
    }
    allData.push(objectToSave);
    this.writeObjetcToFile(allData);
  }
}