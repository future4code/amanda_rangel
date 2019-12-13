import * as fs from 'fs'

export class JSONFileManager {
  fileName: string;
  constructor(fileName: string) {
    this.fileName = fileName
  }

  saveToJSON(array: object[]) {
    fs.writeFileSync(this.fileName, JSON.stringify(array, null, 2))
  }

  getJSONContent() {
    return JSON.parse(fs.readFileSync(this.fileName).toString())
  }
}