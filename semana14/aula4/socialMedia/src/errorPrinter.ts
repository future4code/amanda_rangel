import {Error} from "./error";
import * as moment from 'moment';

export class ErrorPrinter extends Error {
  constructor(public message: string) {
    super(message);
    this.message = message;
    this.errorDate = moment();
  }
  onError(message: string = this.message) {
    const errorDate = this.errorDate;
    console.log(`<${message}> - <${errorDate}>`)
  }
}
