import {JSONFileManager} from "./jsonFileManager";
import {Teacher} from "./teacher";
import {Student} from "./student";
import {Mission} from "./mission";

export class MobileMission extends  Mission {
  classNumber: number;
  createClass(classNumber: number, startDate: string, endDate: string, teachers: Teacher[], student: Student[]): void {
    const newMobileClass = new JSONFileManager('f4system.json');
    newMobileClass.writeObjetcToFile({startDate, endDate, teachers, student, classNumber})
  }
}