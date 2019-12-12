import * as moment from 'moment';
export class Error {
  errorDate = moment();
  constructor(public message: string) {
    this.errorDate = moment()
  }
}