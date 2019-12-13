import {Teacher} from "./teacher";
import {Student} from "./student";

export abstract class Mission {
  constructor(
      protected startDate: string,
      protected endDate: string,
      protected teachers: Teacher[],
      protected students: Student[])
  {
    this.startDate = startDate;
    this.endDate = endDate;
    this.teachers = [];
    this.students = [];
  }
}
