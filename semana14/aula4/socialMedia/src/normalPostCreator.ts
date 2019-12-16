import {PostCreator} from "./postCreator";
import {JSONFileManager} from "./JSONFileManager";
import {ErrorPrinter} from "./errorPrinter";
import * as moment from 'moment';

export class NormalPostCreator implements PostCreator{
  private errorPrinter: ErrorPrinter;
  constructor(public author:string, public text:string, public name: string, public pubDate: string) {
  }

 create(text: string, author: string): void {
    if (author && text !== "") {
      const postFileManager = new JSONFileManager('posts.json');
      const now = moment();
      postFileManager.writeObjetcToFile({text, author, now})
    } else {
      console.log(this.errorPrinter)
    }
 }
}