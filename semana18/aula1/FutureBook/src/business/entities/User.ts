export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private type: UserType
  ) {}


  public getId() {
    return this.id
  }

  public getName() {
    return this.name
  }

  public getEmail() {
    return this.email
  }

  public getPassword () {
    return this.password
  }

 public getType () {
    return this.type
  }

  public static convertUserType(type: string): UserType {
    switch (type) {
      case "TEACHER":
        return UserType.STUDENT;
      case "STUDENT":
        return UserType.STUDENT;
      case "CX":
        return UserType.CX;
      case "ASIAN_NATION":
        return UserType.ASIAN_NATION;
      default:
        throw new Error('Tipo de usuário inválido')
    }
  }
}

export enum UserType {
  TEACHER = "TEACHER",
  STUDENT = "STUDENT",
  CX = "CX",
  ASIAN_NATION = "ASIAN_NATION"
}