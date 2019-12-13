import {JSONFileManager} from "./jsonFileManager";
import {Mission} from "./mission";
import {Teacher} from "./teacher";
import {Student} from "./student";

export class WebMission extends Mission {
  protected patron: string;
  constructor(
      patron: string,
      startDate: string,
      endDate: string,
      teachers: Teacher[],
      students: Student[])
  {
    super(startDate, endDate, teachers, students);
    this.patron = patron;
  }

  createClass(patron: string, startDate: string, endDate: string, teachers: Teacher[], student: Student[]): void {
    const newWebClass = new JSONFileManager('f4system.json');
    newWebClass.writeObjetcToFile({startDate, endDate, teachers, student, patron})
  }
}