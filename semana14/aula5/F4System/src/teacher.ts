import {User} from "./user";
import {JSONFileManager} from "./jsonFileManager";

export class Teacher implements User {
  constructor(
      public name:string,
      public email: string,
      public dateOfBirth: string,
      protected  specialty: Specialty[])
  {
    this.name = name;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
    this.specialty = [];
  }
  registerTeacher(name:string, email: string, dateOfBirth: string, specialty: Specialty[]):void {
    const addTeacher = new JSONFileManager('f4system.json');
    addTeacher.writeObjetcToFile({name, email, dateOfBirth, specialty})
  }
}

export enum Specialty {
  HTML = "HTML",
  CSS = "CSS",
  JS = "JS",
  REACT = "React",
  REDUX = "Redux",
  BACK = "back",
  POO = "Orientação a objetos",
  HACKER = "Hackeamento de sistemas escolares"
}