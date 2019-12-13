import {f4JSONFileManager, JSONFileManager} from "./jsonFileManager";
import {User} from "./user";
import {Mission} from "./mission";

export class Student implements User {
  constructor(public name:string,
              public email: string,
              public dateOfBirth: string,
              public classType: Mission)
  {
    this.name = name;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
  }

  registerStudent(name: string, email: string, dateOfBirth: string, classType: Mission): void{
    const newStudent = new f4JSONFileManager('f4system.json');
    newStudent.writeDataToFile({name, email, dateOfBirth, classType})
  }
}
