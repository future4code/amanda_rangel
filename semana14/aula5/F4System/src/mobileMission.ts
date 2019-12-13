import {f4JSONFileManager, JSONFileManager} from "./jsonFileManager";
import {Teacher} from "./teacher";
import {Student} from "./student";
import {Mission} from "./mission";

export class MobileMission extends  Mission {
    constructor(public classNumber: number, startDate: string, endDate: string, teachers: Teacher[], students: Student[]) {
    super(startDate, endDate, teachers, students);
    this.classNumber = classNumber;
    this.startDate = startDate;
    this.endDate = endDate;
    this.teachers = [];
    this.students = [];
  }

  createClass(classNumber: number, startDate: string, endDate: string, teachers: Teacher[], students: Student[]): void {
    const newMobileClass = new f4JSONFileManager('f4system.json');
    newMobileClass.writeDataToFile({startDate, endDate, teachers, students, classNumber})
  }
}